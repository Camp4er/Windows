"use client";

import React, { useEffect, useState } from "react";

type Cell = {
  isMine: boolean;
  isRevealed: boolean;
  isFlagged: boolean;
  adjacentMines: number;
};

const GRID_SIZE = 10; // Grid size (10x10)
const NUM_MINES = 15; // Total mines in the game

const Minesweeper: React.FC = () => {
  const [grid, setGrid] = useState<Cell[][]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  // Generate a fresh grid
  const generateGrid = (): Cell[][] => {
    let newGrid: Cell[][] = Array(GRID_SIZE)
      .fill(null)
      .map(() =>
        Array(GRID_SIZE).fill({
          isMine: false,
          isRevealed: false,
          isFlagged: false,
          adjacentMines: 0,
        })
      );

    // Place Mines
    let mineCount = 0;
    while (mineCount < NUM_MINES) {
      const row = Math.floor(Math.random() * GRID_SIZE);
      const col = Math.floor(Math.random() * GRID_SIZE);

      if (!newGrid[row][col].isMine) {
        newGrid[row][col] = { ...newGrid[row][col], isMine: true };
        mineCount++;
      }
    }

    // Calculate adjacent mine counts
    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        if (!newGrid[r][c].isMine) {
          let adjacentMines = 0;
          for (let dr of [-1, 0, 1]) {
            for (let dc of [-1, 0, 1]) {
              const nr = r + dr;
              const nc = c + dc;
              if (
                nr >= 0 &&
                nr < GRID_SIZE &&
                nc >= 0 &&
                nc < GRID_SIZE &&
                newGrid[nr][nc].isMine
              ) {
                adjacentMines++;
              }
            }
          }
          newGrid[r][c] = { ...newGrid[r][c], adjacentMines };
        }
      }
    }

    return newGrid;
  };

  // Initialize game
  useEffect(() => {
    setGrid(generateGrid());
  }, []);

  // Reveal a cell
  const revealCell = (row: number, col: number) => {
    if (gameOver || gameWon || grid[row][col].isRevealed || grid[row][col].isFlagged) return;

    let newGrid = [...grid];
    newGrid[row][col] = { ...newGrid[row][col], isRevealed: true };

    // If mine clicked, game over
    if (newGrid[row][col].isMine) {
      setGameOver(true);
      return;
    }

    // If no adjacent mines, recursively reveal neighbors
    if (newGrid[row][col].adjacentMines === 0) {
      for (let dr of [-1, 0, 1]) {
        for (let dc of [-1, 0, 1]) {
          const nr = row + dr;
          const nc = col + dc;
          if (
            nr >= 0 &&
            nr < GRID_SIZE &&
            nc >= 0 &&
            nc < GRID_SIZE &&
            !newGrid[nr][nc].isRevealed
          ) {
            revealCell(nr, nc);
          }
        }
      }
    }

    setGrid(newGrid);

    // Check win condition
    if (checkWin(newGrid)) {
      setGameWon(true);
    }
  };

  // Right-click to flag a cell
  const toggleFlag = (e: React.MouseEvent, row: number, col: number) => {
    e.preventDefault();
    if (gameOver || gameWon || grid[row][col].isRevealed) return;

    let newGrid = [...grid];
    newGrid[row][col] = { ...newGrid[row][col], isFlagged: !newGrid[row][col].isFlagged };

    setGrid(newGrid);
  };

  // Check if player won
  const checkWin = (grid: Cell[][]): boolean => {
    for (let row of grid) {
      for (let cell of row) {
        if (!cell.isMine && !cell.isRevealed) return false;
      }
    }
    return true;
  };

  // Restart game
  const resetGame = () => {
    setGameOver(false);
    setGameWon(false);
    setGrid(generateGrid());
  };

  return (
    <div className="flex flex-col items-center pt-14 min-h-screen bg-gradient-to-br from-gray-700 via-emerald-300 to-gray-700">
  <h1 className="text-3xl text-black font-bold mb-4">Minesweeper</h1>

  {/* Minesweeper Grid */}
  <div className="grid grid-cols-10 rounded bg-gray-300 p-1 border-4 border-gray-600" style={{ borderCollapse: "collapse" }}>
    {grid.map((row, rIdx) =>
      row.map((cell, cIdx) => (
        <button
          key={`${rIdx}-${cIdx}`}
          onClick={() => revealCell(rIdx, cIdx)}
          onContextMenu={(e) => toggleFlag(e, rIdx, cIdx)}
          className={`w-9 h-9 text-center flex items-center justify-center border-[1px] border-gray-500 
            ${
              cell.isRevealed
                ? cell.isMine
                  ? "bg-red-500"
                  : "bg-gray-400"
                : "bg-gradient-to-b from-gray-300 to-gray-500 text-black font-bold shadow-lg rounded-sm"
            }
            ${cell.isFlagged ? "bg-yellow-500" : ""}
            transition-all duration-150 active:shadow-inner active:translate-y-[2px]
          `}
        >
          {cell.isRevealed && cell.isMine ? "💣" : ""}
          {cell.isRevealed && !cell.isMine && cell.adjacentMines > 0
            ? cell.adjacentMines
            : ""}
          {cell.isFlagged && !cell.isRevealed ? "🚩" : ""}
        </button>
      ))
    )}
  </div>

  {/* Game status */}
  {gameOver && <h2 className="text-red-600 text-xl font-bold mt-4">💥 Game Over!</h2>}
  {gameWon && <h2 className="text-green-600 text-xl font-bold mt-4">🎉 You Win!</h2>}

  {/* Restart button */}
  <button
    onClick={resetGame}
    className="mt-4 px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
  >
    Restart
  </button>
</div>

  );
};

export default Minesweeper;
