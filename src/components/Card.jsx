import { useEffect, useState } from "react";
import randomNumbers from "../utils/randomNumbers";

function Card({ pokemonId, spriteUrl }) {
  return (
    <div className="border-2 border-solid border-blue-600 p-12 rounded-2xl bg-yellow-100">
      <img src={spriteUrl} id={pokemonId} className="w-24 h-24"></img>
    </div>
  );
}

function RenderCards() {
  const [pokemonInfo, setPokemonInfo] = useState([]);

  // Fetch Pokemon Images
  useEffect(() => {
    let newPokemonInfo = [];
    let ignore = false;

    // Generate random numbers
    let randomNumsArr = randomNumbers(40);
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
  }, []);

  console.log(pokemonInfo);

  return (
    <div className="grid grid-cols-4 gap-4">
      {pokemonInfo.map((pokemon) => {
        return (
          <Card
            pokemonId={pokemon.id}
            spriteUrl={pokemon.url}
            key={pokemon.id}
          ></Card>
        );
      })}
    </div>
  );
}

export default RenderCards;
