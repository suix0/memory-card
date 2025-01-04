import RenderCards from "../components/Card";

function Content({ updateScore }) {
  return (
    <main className="flex justify-center items-center">
      <RenderCards updateScore={updateScore}></RenderCards>
    </main>
  );
}

export default Content;
