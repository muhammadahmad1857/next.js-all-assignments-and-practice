// TicTacToe.tsx
"use client";
import useTicTacToe from "../custom-hooks/useTicTacToe";

export default function TicTacToe({ size }: { size: number }) {
  const { board, resetGame, calculateWinner, handleClick, getStatusMessage } =
    useTicTacToe(size);

  return (
    <div
      className="game"
      style={{
        maxWidth: `calc(${size} * 100px) !important`,
        padding: `20px calc((100vw - (${size} * 100px)) / 2)`,
      }}
    >
      <h3 className="status"> {getStatusMessage()}</h3>
      <div
        className="board"
        style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
      >
        {board.map((val: string | null, index: number) => {
          return (
            <div
              className={size !== 5 ? "cell" : "cell1"}
              key={index}
              onClick={() => handleClick(index)}
              //   disabled={val !== null}
            >
              <p className={val === "X" ? "playerX" : "playerO"}>{val}</p>
            </div>
          );
        })}
      </div>
      <div className="control">
        <button className="reset-button" onClick={() => resetGame()}>
          Reset Game
        </button>
      </div>
    </div>
  );
}
