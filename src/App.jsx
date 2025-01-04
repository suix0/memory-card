import Header from "./layouts/Header";
import Content from "./layouts/Content";
import { useState } from "react";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function updateScore() {
    setCurrentScore(currentScore + 1);
  }

  function resetScore() {
    setCurrentScore(0);
  }

  if (currentScore > bestScore) {
    setBestScore(currentScore);
  }

  return (
    <>
      <Header currentScore={currentScore} bestScore={bestScore}></Header>
      <Content updateScore={updateScore} resetScore={resetScore}></Content>
    </>
  );
}

export default App;
