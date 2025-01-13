import RenderCards from "../components/Card";

function Content({
  updateScore,
  resetScore,
  isGameOver,
  clickedPokemons,
  setClickedPokemon,
}) {
  return (
    <main className="flex justify-center md:items-center sm:items-start bg-[#d03d33]">
      <RenderCards
        updateScore={updateScore}
        resetScore={resetScore}
        isGameOver={isGameOver}
        clickedPokemons={clickedPokemons}
        setClickedPokemon={setClickedPokemon}
      ></RenderCards>
    </main>
  );
}

export default Content;
