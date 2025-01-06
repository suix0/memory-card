import RenderCards from "../components/Card";

function Content({ updateScore, resetScore, isGameOver }) {
  return (
    <main className="flex justify-center items-center">
      <RenderCards
        updateScore={updateScore}
        resetScore={resetScore}
        isGameOver={isGameOver}
      ></RenderCards>
    </main>
  );
}

export default Content;
