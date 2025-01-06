import { useState, useEffect } from "react";

function Popup({ gameOver, score, resetScore, setGameOverFalse }) {
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
    <dialog
      open={isOpen}
      className={`${gameOver && "open rounded-2xl mb-[500px]"}`}
    >
      <div className="flex flex-col items-center px-20 py-8 gap-4 text-yellow-300 bg-[#0075be]">
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
    </dialog>
  );
}

export default Popup;
