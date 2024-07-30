// useTicTacToe.tsx
"use client";
import { useState } from "react";

function generateWinningPatterns(size: number): number[][] {
  const patterns: number[][] = [];

  // Generate horizontal patterns
  for (let row = 0; row < size; row++) {
    // console.log("at first loop", size);

    for (let col = 0; col <= size - size; col++) {
      // console.log("at second loop", size);

      const horizontalPattern: number[] = [];
      for (let i = 0; i < size; i++) {
        // console.log("at third loop", size);

        horizontalPattern.push(row * size + col + i);
      }
      patterns.push(horizontalPattern);
    }
  }

  // Generate vertical patterns
  for (let row = 0; row <= size - size; row++) {
    // console.log("at fourth loop", size);

    for (let col = 0; col < size; col++) {
      // console.log("at fifth loop", size);

      const verticalPattern: number[] = [];
      for (let i = 0; i < size; i++) {
        verticalPattern.push((row + i) * size + col);
      }
      patterns.push(verticalPattern);
    }
  }

  // Generate diagonal patterns (top-left to bottom-right)
  for (let row = 0; row <= size - size; row++) {
    for (let col = 0; col <= size - size; col++) {
      const diagonalPattern: number[] = [];
      for (let i = 0; i < size; i++) {
        diagonalPattern.push((row + i) * size + col + i);
      }
      patterns.push(diagonalPattern);
    }
  }

  // Generate diagonal patterns (top-right to bottom-left)
  for (let row = 0; row <= size - size; row++) {
    for (let col = size - 1; col >= size - 1; col--) {
      const diagonalPattern: number[] = [];
      for (let i = 0; i < size; i++) {
        diagonalPattern.push((row + i) * size + col - i);
      }
      patterns.push(diagonalPattern);
    }
  }

  return patterns;
}

function initialBoard(size: number): (string | null)[] {
  return Array(size * size).fill(null);
}

function useTicTacToe(size: number) {
  const [board, setBoard] = useState<(string | null)[]>(initialBoard(size));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const winningPatterns = generateWinningPatterns(size);

  const handleClick = (i: number) => {
    console.log(generateWinningPatterns(size));

    const winner = calculateWinner(board);
    if (winner || board[i]) return;

    const newBoard = [...board];
    newBoard[i] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const calculateWinner = (currentBoard: (string | null)[]) => {
    for (const pattern of winningPatterns) {
      const isPatternWinner = pattern.every(
        (index) => currentBoard[index] === currentBoard[pattern[0]]
      );
      if (isPatternWinner && currentBoard[pattern[0]]) {
        return currentBoard[pattern[0]];
      }
    }

    return null;
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} wins!`;
    if (!board.includes(null)) return `It's a draw!`;
    return `Player ${isXNext ? "X" : "O"} turn`;
  };

  const resetGame = () => {
    setBoard(initialBoard(size));
    setIsXNext(true);
  };

  return {
    board,
    handleClick,
    calculateWinner,
    getStatusMessage,
    resetGame,
  };
}

export default useTicTacToe;
