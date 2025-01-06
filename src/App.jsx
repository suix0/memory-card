import { useState } from "react";
import Header from "./layouts/Header";
import Content from "./layouts/Content";
import Popup from "./components/Popup";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  function updateScore() {
    setCurrentScore(currentScore + 1);
  }

  function resetScore() {
    setIsGameOver(true);
  }

  if (currentScore > bestScore) {
    setBestScore(currentScore);
  }

  return (
    <>
      <Header currentScore={currentScore} bestScore={bestScore}></Header>
      <Content
        updateScore={updateScore}
        resetScore={resetScore}
        isGameOver={isGameOver}
      ></Content>
      <Popup
        gameOver={isGameOver}
        setGameOverFalse={() => setIsGameOver(false)}
        score={currentScore}
        resetScore={() => setCurrentScore(0)}
      ></Popup>
    </>
  );
}

export default App;
