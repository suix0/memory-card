import RenderCards from "../components/Card";

function Content({
  updateScore,
  resetScore,
  isGameOver,
  currentPokemon,
  setCurrentPokemon,
}) {
  return (
    <main className="flex justify-center items-center">
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
