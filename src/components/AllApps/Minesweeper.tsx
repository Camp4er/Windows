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


 let newGrid = grid.map(r => r.map(c => ({ ...c }))); // Deep copy
 newGrid[row][col] = { ...newGrid[row][col], isRevealed: true };


 // If mine clicked, game over
 if (newGrid[row][col].isMine) {
 setGameOver(true);
 return;
 }


 // If no adjacent mines, recursively reveal neighbors
 if (newGrid[row][col].adjacentMines === 0) {
 const revealNeighbors = (r: number, c: number) => {
 for (let dr of [-1, 0, 1]) {
 for (let dc of [-1, 0, 1]) {
 const nr = r + dr;
 const nc = c + dc;
 if (
 nr >= 0 &&
 nr < GRID_SIZE &&
 nc >= 0 &&
 nc < GRID_SIZE &&
 !newGrid[nr][nc].isRevealed &&
 !newGrid[nr][nc].isMine // Prevent revealing mines during cascade
 ) {
 newGrid[nr][nc] = { ...newGrid[nr][nc], isRevealed: true };
 if (newGrid[nr][nc].adjacentMines === 0) {
 revealNeighbors(nr, nc); // Continue cascade
 }
 }
 }
 }
 };
 revealNeighbors(row, col); // Start cascade from clicked cell
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


 let newGrid = grid.map(r => r.map(c => ({ ...c }))); // Deep copy
 newGrid[row][col] = { ...newGrid[row][col], isFlagged: !newGrid[row][col].isFlagged };


 setGrid(newGrid);
 };


 // Check if player won
 const checkWin = (grid: Cell[][]): boolean => {
 let revealedCount = 0;
 for (let row of grid) {
 for (let cell of row) {
 if (cell.isRevealed) {
 revealedCount++;
 }
 }
 }
 return revealedCount === GRID_SIZE * GRID_SIZE - NUM_MINES;
 };


 // Restart game
 const resetGame = () => {
 setGameOver(false);
 setGameWon(false);
 setGrid(generateGrid());
 };


 return (
 <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 overflow-auto p-4">
 <div className="bg-gradient-to-br from-gray-300 to-gray-400 shadow-lg rounded-lg p-6 w-full max-w-md">
 <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Minesweeper</h1>
 <div className="grid grid-cols-10 gap-1 bg-gray-500 p-1 rounded">
 {grid.map((row, rIdx) =>
 row.map((cell, cIdx) => (
 <button
 key={`${rIdx}-${cIdx}`}
 onClick={() => revealCell(rIdx, cIdx)}
 onContextMenu={(e) => toggleFlag(e, rIdx, cIdx)}
 className={`w-8 h-8 text-center flex items-center justify-center
 border border-gray-700 rounded-sm
 ${
 cell.isRevealed
 ? cell.isMine
 ? "bg-red-700 text-white"
 : "bg-gray-300 text-gray-800"
 : "bg-gray-700 hover:bg-gray-600 text-white"
 }
 ${cell.isFlagged ? "bg-yellow-500" : ""}
 font-bold text-xl
 `}
 disabled={gameOver || gameWon}
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
 {gameOver && <h2 className="text-red-600 text-xl font-bold mt-4 text-center">💥 Game Over!</h2>}
 {gameWon && <h2 className="text-green-600 text-xl font-bold mt-4 text-center">🎉 You Win!</h2>}


 {/* Restart button */}
 <div className="text-center mt-4">
 <button
 onClick={resetGame}
 className="px-4 py-2 bg-blue-700 text-white font-bold rounded hover:bg-blue-800 shadow"
 >
 Restart
 </button>
 </div>
 </div>
 </div>
 );
};


export default Minesweeper;
