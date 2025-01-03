import { useEffect, useState } from "react";

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

    // Generate random numbers
    let randomNumbers = [];
    let randomNumber = Math.floor(Math.random() * 25 + 1);
    for (let i = 0; i < 9; i++) {
      if (randomNumbers.includes(randomNumber) === false) {
        randomNumbers.push(randomNumber);
        randomNumber++;
      }
    }
    let urls = [
      `https://pokeapi.co/api/v2/pokemon/${randomNumbers[0]}/`,
      `https://pokeapi.co/api/v2/pokemon/${randomNumbers[1]}/`,
      `https://pokeapi.co/api/v2/pokemon/${randomNumbers[2]}/`,
      `https://pokeapi.co/api/v2/pokemon/${randomNumbers[3]}/`,
      `https://pokeapi.co/api/v2/pokemon/${randomNumbers[4]}/`,
      `https://pokeapi.co/api/v2/pokemon/${randomNumbers[5]}/`,
      `https://pokeapi.co/api/v2/pokemon/${randomNumbers[6]}/`,
      `https://pokeapi.co/api/v2/pokemon/${randomNumbers[7]}/`,
      `https://pokeapi.co/api/v2/pokemon/${randomNumbers[8]}/`,
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
      setPokemonInfo(newPokemonInfo);
    };

    fetchPokemonData();
    return () => (newPokemonInfo = []);
  }, []);

  console.log(pokemonInfo);

  return (
    <div>
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
