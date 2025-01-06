import { useState, useEffect } from "react";

function Modal({ gameOver, score, resetScore, setGameOverFalse }) {
  const [isOpen, setOpen] = useState(false);

  function closeHandler(e) {
    e.preventDefault();
    resetScore();
    setOpen(false);
    setGameOverFalse();
  }

  useEffect(() => {
    if (gameOver) {
      setOpen(true);
    }
  }, [gameOver]);

  return (
    <div
      id={`${gameOver ? "open" : "close"}`}
      className="fixed inset-10 m-auto w-max flex items-center"
    >
      <div className="flex flex-col items-center px-20 py-8 gap-4 rounded-3xl text-yellow-300 bg-[#0075be]">
        <h1 className="text-5xl">GAME OVER</h1>
        <p className="text-2xl">Your score is {score}</p>
        <div className="flex gap-12">
          <button
            className="text-2xl rounded-xl bg-green-500 p-1 px-4"
            onClick={closeHandler}
          >
            Retry
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
