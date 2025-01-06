import RenderCards from "../components/Card";

function Content({
  updateScore,
  resetScore,
  isGameOver,
  currentPokemon,
  setCurrentPokemon,
}) {
  return (
    <main className="flex justify-center md:items-center sm:items-start bg-[#d03d33]">
      <RenderCards
        updateScore={updateScore}
        resetScore={resetScore}
        isGameOver={isGameOver}
        currentPokemon={currentPokemon}
        setCurrentPokemon={setCurrentPokemon}
      ></RenderCards>
    </main>
  );
}

export default Content;
