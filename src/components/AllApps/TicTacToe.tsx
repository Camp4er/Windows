 import React, { useState, useEffect } from 'react';
 import { Inter } from 'next/font/google';
 

 const inter = Inter({ subsets: ['latin'] });
 

 interface Player {
  name: string;
  symbol: 'X' | 'O';
 }
 

 const TicTacToe = () => {
  const [board, setBoard] = useState<('' | 'X' | 'O')[]>(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState<Player>({ name: 'X', symbol: 'X' });
  const [winner, setWinner] = useState<Player | null>(null);
  const [isDraw, setIsDraw] = useState<boolean>(false);
  const [resetting, setResetting] = useState<boolean>(false);
 

  const winningCombinations = React.useMemo(() => [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ], []);
 

  useEffect(() => {
  if (!winner) {
  for (let combo of winningCombinations) {
  if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
  setWinner({ name: board[combo[0]] === 'X' ? 'X' : 'O', symbol: board[combo[0]] as 'X' | 'O' });
  return;
  }
  }
 

  if (!board.includes('')) {
  setIsDraw(true);
  }
  }
  }, [board, winner, winningCombinations]);
 

  const handleCellClick = (index: number) => {
  if (board[index] || winner || isDraw) return;
  const newBoard = [...board];
  newBoard[index] = currentPlayer.symbol;
  setBoard(newBoard);
  setCurrentPlayer(currentPlayer.symbol === 'X' ? { name: 'O', symbol: 'O' } : { name: 'X', symbol: 'X' });
  };
 

  const resetBoard = () => {
  setResetting(true);
  setTimeout(() => {
  setBoard(Array(9).fill(''));
  setCurrentPlayer({ name: 'X', symbol: 'X' });
  setWinner(null);
  setIsDraw(false);
  setResetting(false);
  }, 300);
  };
 

  const renderCell = (index: number) => (
  <button
  key={index}
  className={`w-24 h-24 border-2 border-gray-400 flex items-center justify-center text-5xl font-bold focus:outline-none ${
  board[index] === 'X' ? 'text-blue-500' : 'text-green-500'
  } ${index > 2 && index < 6 ? 'border-t-0 border-b-0' : ''} ${index % 3 === 1 ? 'border-l-0 border-r-0' : ''}`}
  onClick={() => handleCellClick(index)}
  disabled={!!(board[index] || winner || isDraw)}
  >
  {board[index]}
  </button>
  );
 

  return (
  <div className={`min-h-screen py-6 flex flex-col justify-center sm:py-12 bg-gradient-to-r from-purple-200 to-blue-200 ${inter.className}`}>
  <div className="relative py-3 sm:max-w-xl sm:mx-auto">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
  <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
  <div className="max-w-md mx-auto">
  <h1 className="text-3xl font-semibold text-gray-800 text-center">Tic Tac Toe</h1>
 

  <div className="grid grid-cols-3 gap-0 mt-8">
  {board.map((_, index) => renderCell(index))}
  </div>
 

  <div className="mt-8 flex justify-center">
  <button
  className={`px-6 py-2 rounded-md bg-red-500 text-white font-bold hover:bg-red-700 focus:outline-none transition-colors duration-300 ${
  resetting ? 'opacity-50 cursor-not-allowed' : ''
  }`}
  onClick={resetBoard}
  disabled={resetting}
  >
  Reset
  </button>
  </div>
 

  <div className="mt-4 text-center">
  {winner ? (
  <p className="text-lg text-green-600 font-semibold">Winner: {winner.name}</p>
  ) : isDraw ? (
  <p className="text-lg text-yellow-600 font-semibold">It's a Draw!</p>
  ) : (
  <p className="text-lg text-blue-600 font-semibold">Current Player: {currentPlayer.name}</p>
  )}
  </div>
  </div>
  </div>
  </div>
  </div>
  );
 };
 

 export default TicTacToe;
