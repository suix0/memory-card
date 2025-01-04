import { useEffect, useState } from "react";
import randomNumbers from "../utils/randomNumbers";

function Card({ pokemonId, spriteUrl, updateScore, changeCards }) {
  return (
    <div
      className="border-2 border-solid border-blue-600 p-12 rounded-2xl bg-yellow-200"
      id={pokemonId}
      onClick={(e) => {
        changeCards(e);
      }}
    >
      <img
        src={spriteUrl}
        id={pokemonId}
        className="w-20 h-20 select-none"
      ></img>
    </div>
  );
}

function RenderCards({ updateScore, resetScore }) {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState(null); // Store clicked pokemon data

  // Fetch Pokemon Images
  useEffect(() => {
    let newPokemonInfo = [];
    let ignore = false;

    // Generate random numbers
    let randomNumsArr = randomNumbers(18);
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
      console.log(newPokemonInfo);
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
    <div className="grid grid-cols-4 gap-4">
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
