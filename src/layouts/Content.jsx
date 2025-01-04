import RenderCards from "../components/Card";

function Content({ updateScore, resetScore }) {
  return (
    <main className="flex justify-center items-center">
      <RenderCards
        updateScore={updateScore}
        resetScore={resetScore}
      ></RenderCards>
    </main>
  );
}

export default Content;
