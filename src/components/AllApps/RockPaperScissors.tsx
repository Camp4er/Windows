 import React, { useState } from 'react';
 import { Inter } from 'next/font/google';
 

 const inter = Inter({ subsets: ['latin'] });
 

 type Choice = 'rock' | 'paper' | 'scissors';
 

 const RockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<string>('');
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
 

  const choices: Choice[] = ['rock', 'paper', 'scissors'];
 

  const handlePlayerChoice = (choice: Choice) => {
  if (!gameStarted) setGameStarted(true);
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  setPlayerChoice(choice);
  setComputerChoice(computerChoice);
  determineWinner(choice, computerChoice);
  };
 

  const determineWinner = (player: Choice, computer: Choice) => {
  if (player === computer) {
  setResult("It's a tie!");
  } else if (
  (player === 'rock' && computer === 'scissors') ||
  (player === 'paper' && computer === 'rock') ||
  (player === 'scissors' && computer === 'paper')
  ) {
  setResult('You win!');
  setPlayerScore(prevScore => prevScore + 1);
  } else {
  setResult('You lose!');
  setComputerScore(prevScore => prevScore + 1);
  }
  };
 

  const resetGame = () => {
  setPlayerChoice(null);
  setComputerChoice(null);
  setResult('');
  setPlayerScore(0);
  setComputerScore(0);
  setGameStarted(false);
  };
 

  return (
  <div className={`min-h-screen py-6 flex flex-col bg-gradient-to-tr  from-red-300 to-emerald-300`}>
  <div className="relative py-3 sm:max-w-xl sm:mx-auto text-center">
  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
  <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
  <div className="max-w-md mx-auto">
  <h1 className="text-2xl font-semibold text-gray-800">Rock Paper Scissors</h1>
 

  <div className="py-4">
  <p className="text-gray-600">Choose your weapon:</p>
  <div className="flex justify-center space-x-4 mt-2">
  <button
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
  onClick={() => handlePlayerChoice('rock')}
  >
  Rock
  </button>
  <button
  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
  onClick={() => handlePlayerChoice('paper')}
  >
  Paper
  </button>
  <button
  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
  onClick={() => handlePlayerChoice('scissors')}
  >
  Scissors
  </button>
  </div>
  </div>
 

  {gameStarted && (
  <div className="py-4">
  <p className="text-gray-700">You chose: {playerChoice}</p>
  <p className="text-gray-700">Computer chose: {computerChoice}</p>
  <p className="text-lg font-semibold mt-2">{result}</p>
  </div>
  )}
 

  <div className="py-2">
  <p className="text-lg text-gray-800 font-semibold">Score:</p>
  <p className="text-gray-700">You: {playerScore}</p>
  <p className="text-gray-700">Computer: {computerScore}</p>
  </div>
 

  <button
  className="bg-gray-400 hover:bg-gray-300 border border-black text-gray-800 font-bold py-2 px-4 rounded focus:outline-none mt-4"
  onClick={resetGame}
  >
  Reset Game
  </button>
  </div>
  </div>
  </div>
  </div>
  );
 };
 

 export default RockPaperScissors;
