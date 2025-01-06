import { useEffect, useState } from "react";
import randomNumbers from "../utils/randomNumbers";

function Card({ pokemonId, spriteUrl, changeCards }) {
  return (
    <div
      className="border-2 border-solid border-blue-600 p-12 sm:p-8 rounded-2xl bg-yellow-200 transition ease-out hover:bg-yellow-100 hover:-translate-y-[4px] xs:p-4 h-[fit-content]"
      id={pokemonId}
      onClick={(e) => {
        changeCards(e);
      }}
    >
      <img
        src={spriteUrl}
        id={pokemonId}
        className="transition hover:scale-150 sm:w-20 sm:h-20 xl:w-20 xl:h-20 xs:w-24 xs:h-20  select-none"
      ></img>
    </div>
  );
}

function RenderCards({
  updateScore,
  resetScore,
  isGameOver,
  currentPokemon,
  setCurrentPokemon,
}) {
  const [pokemonInfo, setPokemonInfo] = useState([]);

  // Fetch Pokemon Images
  useEffect(() => {
    let newPokemonInfo = [];
    let ignore = false;

    // Generate random numbers
    let randomNumsArr = randomNumbers(15);
    let urls = [
      `https://pokeapi.co/api/v2/pokemon/${randomNumsArr[0]}/`,
      `https://pokeapi.co/api/v2/pokemon/${randomNumsArr[1]}/`,
      `https://pokeapi.co/api/v2/pokemon/${randomNumsArr[2]}/`,
      `https://pokeapi.co/api/v2/pokemon/${randomNumsArr[3]}/`,
      `https://pokeapi.co/api/v2/pokemon/${randomNumsArr[4]}/`,
      `https://pokeapi.co/api/v2/pokemon/${randomNumsArr[5]}/`,
      `https://pokeapi.co/api/v2/pokemon/${randomNumsArr[6]}/`,
      `https://pokeapi.co/api/v2/pokemon/${randomNumsArr[7]}/`,
      `https://pokeapi.co/api/v2/pokemon/${randomNumsArr[8]}/`,
      `https://pokeapi.co/api/v2/pokemon/${randomNumsArr[9]}/`,
      `https://pokeapi.co/api/v2/pokemon/${randomNumsArr[10]}/`,
      `https://pokeapi.co/api/v2/pokemon/${randomNumsArr[11]}/`,
    ]; // Improve the random numbers selection logic

    const fetchPokemonData = async () => {
      const pokemonData = await Promise.all(
        urls.map((url) => fetch(url).then((response) => response.json()))
      );
      pokemonData.forEach((data) => {
        newPokemonInfo.push({
          id: data.id,
          url: data.sprites.other.showdown.front_default,
        });
      });
      if (!ignore) {
        setPokemonInfo(newPokemonInfo);
      }
    };

    fetchPokemonData();

    return () => {
      newPokemonInfo = [];
      ignore = true;
    };
  }, [currentPokemon]);

  function changeCards(e) {
    if (e.target.id !== currentPokemon) {
      setCurrentPokemon(e.target.id);
      updateScore();
    } else {
      resetScore();
    }
  }

  return (
    <div
      className={`${
        isGameOver && "pointer-events-none"
      } grid xl:grid-cols-4 sm:grid-cols-4 gap-4 xs:grid-cols-4 xs:h-[fit-content]`}
    >
      {pokemonInfo.map((pokemon) => {
        return (
          <Card
            pokemonId={pokemon.id}
            spriteUrl={pokemon.url}
            changeCards={changeCards}
            key={pokemon.id}
          ></Card>
        );
      })}
    </div>
  );
}

export default RenderCards;
