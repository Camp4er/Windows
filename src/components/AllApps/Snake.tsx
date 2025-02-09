 import React, { useState, useEffect, useRef } from 'react';
 

 interface Position {
  x: number;
  y: number;
 }
 

 type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
 

 const GRID_SIZE = 20; // Size of the grid
 const SNAKE_START = [{ x: 8, y: 8 }]; // Initial snake position
 const FOOD_START = { x: 12, y: 8 }; // Initial food position
 const MOVE_INTERVAL = 150; // milliseconds between each move
 

 const Snake = () => {
  const [snake, setSnake] = useState<Position[]>(SNAKE_START);
  const [food, setFood] = useState<Position>(FOOD_START);
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
 

  const gameAreaRef = useRef<HTMLDivElement>(null); // Reference to the game area
 

  useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
  switch (e.key) {
  case 'ArrowUp':
  setDirection('UP');
  break;
  case 'ArrowDown':
  setDirection('DOWN');
  break;
  case 'ArrowLeft':
  setDirection('LEFT');
  break;
  case 'ArrowRight':
  setDirection('RIGHT');
  break;
  }
  };
 

  window.addEventListener('keydown', handleKeyDown);
 

  return () => {
  window.removeEventListener('keydown', handleKeyDown);
  };
  }, []);
 

  useEffect(() => {
  if (gameOver) return;
 

  const moveSnake = () => {
  const newSnake = [...snake];
  const head = { ...newSnake[0] };
 

  switch (direction) {
  case 'UP':
  head.y = (head.y - 1 + GRID_SIZE) % GRID_SIZE;
  break;
  case 'DOWN':
  head.y = (head.y + 1) % GRID_SIZE;
  break;
  case 'LEFT':
  head.x = (head.x - 1 + GRID_SIZE) % GRID_SIZE;
  break;
  case 'RIGHT':
  head.x = (head.x + 1) % GRID_SIZE;
  break;
  }
 

  // Check for collision with self
  if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
  setGameOver(true);
  return;
  }
 

  newSnake.unshift(head);
 

  if (head.x === food.x && head.y === food.y) {
  // Snake ate food
  setFood(generateFoodPosition(newSnake));
  setScore(prevScore => prevScore + 1);
  } else {
  newSnake.pop();
  }
 

  setSnake(newSnake);
  };
 

  const gameInterval = setInterval(moveSnake, MOVE_INTERVAL);
 

  return () => clearInterval(gameInterval);
  }, [snake, food, direction, gameOver]);
 

  const generateFoodPosition = (currentSnake: Position[]): Position => {
  let newFood: Position;
  do {
  newFood = {
  x: Math.floor(Math.random() * GRID_SIZE),
  y: Math.floor(Math.random() * GRID_SIZE),
  };
  } while (currentSnake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
  return newFood;
  };
 

  const resetGame = () => {
  setSnake(SNAKE_START);
  setFood(FOOD_START);
  setDirection('RIGHT');
  setGameOver(false);
  setScore(0);
  };
 

  return (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
  <h1 className="text-3xl font-bold mb-4 text-gray-800">Nokia Snake Game</h1>
  <div className="mb-4">Score: {score}</div>
  <div
  ref={gameAreaRef} // Attach the ref to the game area
  className="relative w-80 h-80 bg-gray-300 border border-gray-400"
  style={{ width: `${GRID_SIZE * 16}px`, height: `${GRID_SIZE * 16}px` }}
  >
  {snake.map((segment, index) => (
  <div
  key={index}
  className="absolute bg-green-500 rounded-full"
  style={{
  width: '16px',
  height: '16px',
  left: `${segment.x * 16}px`,
  top: `${segment.y * 16}px`,
  }}
  />
  ))}
  <div
  className="absolute bg-red-500 rounded-full"
  style={{
  width: '16px',
  height: '16px',
  left: `${food.x * 16}px`,
  top: `${food.y * 16}px`,
  }}
  />
  </div>
  {gameOver && (
  <div className="mt-4">
  <p className="text-red-500 text-xl font-bold">Game Over!</p>
  <button
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
  onClick={resetGame}
  >
  Reset Game
  </button>
  </div>
  )}
  </div>
  );
 };
 

 export default Snake;
