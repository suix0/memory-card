import { useState } from "react";
import Header from "./layouts/Header";
import Content from "./layouts/Content";
import Modal from "./components/Modal";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [clickedPokemons, setClickedPokemon] = useState([]);

  function updateScore() {
    setCurrentScore(currentScore + 1);
  }

  function resetScore() {
    setIsGameOver(true);
    setClickedPokemon([]);
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
        clickedPokemons={clickedPokemons}
        setClickedPokemon={setClickedPokemon}
      ></Content>
      <Modal
        gameOver={isGameOver}
        setGameOverFalse={() => setIsGameOver(false)}
        score={currentScore}
        resetScore={() => setCurrentScore(0)}
      ></Modal>
    </>
  );
}

export default App;
