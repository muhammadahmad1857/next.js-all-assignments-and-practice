// app/page.tsx
"use client";
import { useState } from "react";
import TicTacToe from "./(components)/ticTacToe";
import WelcomeDialog from "./(components)/welcomeDialog";

export default function Home() {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const handleSelectGrid = (size: number) => {
    setSelectedSize(size);
  };

  return (
    <div className="container">
      {!selectedSize && <WelcomeDialog onSelectGrid={handleSelectGrid} />}
      {selectedSize && <TicTacToe size={selectedSize} />}
    </div>
  );
}
