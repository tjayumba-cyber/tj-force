import { useState, useEffect, useCallback, useRef } from 'react';

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_FOOD = { x: 15, y: 15 };
const INITIAL_DIRECTION = { x: 1, y: 0 };
const SPEED = 150;

export default function SnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const gameLoopRef = useRef();

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    };
    return newFood;
  }, []);

  const resetGame = useCallback(() => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection(INITIAL_DIRECTION);
    setIsGameOver(false);
    setScore(0);
    setIsPaused(true);
  }, []);

  const checkCollision = useCallback((head) => {
    // Wall collision
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      return true;
    }
    // Self collision
    return snake.some((segment, index) => index !== 0 && segment.x === head.x && segment.y === head.y);
  }, [snake]);

  const gameLoop = useCallback(() => {
    if (isPaused || isGameOver) return;

    setSnake(currentSnake => {
      const head = { ...currentSnake[0] };
      head.x += direction.x;
      head.y += direction.y;

      if (checkCollision(head)) {
        setIsGameOver(true);
        return currentSnake;
      }

      const newSnake = [head, ...currentSnake];

      if (head.x === food.x && head.y === food.y) {
        setScore(s => s + 1);
        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, isPaused, isGameOver, checkCollision, generateFood]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === ' ' || e.key.startsWith('Arrow')) {
        e.preventDefault(); // Prevent scrolling
      }

      if (e.key === ' ') {
        setIsPaused(p => !p);
        return;
      }

      if (isPaused || isGameOver) return;

      const keyDirections = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 }
      };

      const newDirection = keyDirections[e.key];
      if (newDirection) {
        const isOpposite = (
          newDirection.x === -direction.x && newDirection.y === direction.y ||
          newDirection.x === direction.x && newDirection.y === -direction.y
        );
        if (!isOpposite) {
          setDirection(newDirection);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, isPaused, isGameOver]);

  useEffect(() => {
    if (!isPaused && !isGameOver) {
      gameLoopRef.current = setInterval(gameLoop, SPEED);
      return () => clearInterval(gameLoopRef.current);
    }
  }, [gameLoop, isPaused, isGameOver]);

  return (
    <div className="w-full max-w-lg mx-auto my-12 p-8 rounded-2xl bg-white/5 backdrop-blur-xl">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold mb-2">Snake Game</h2>
        <p className="text-gray-400">Score: {score}</p>
      </div>
      
      <div className="relative aspect-square bg-black/40 rounded-lg overflow-hidden backdrop-blur-sm"
           style={{ width: GRID_SIZE * CELL_SIZE }}>
        {/* Snake */}
        {snake.map((segment, index) => (
          <div
            key={index}
            className="absolute bg-white rounded-sm transition-all duration-150"
            style={{
              width: CELL_SIZE - 2,
              height: CELL_SIZE - 2,
              left: segment.x * CELL_SIZE,
              top: segment.y * CELL_SIZE,
              opacity: 1 - (index * 0.05)
            }}
          />
        ))}
        
        {/* Food */}
        <div
          className="absolute bg-blue-500 rounded-full animate-pulse"
          style={{
            width: CELL_SIZE - 2,
            height: CELL_SIZE - 2,
            left: food.x * CELL_SIZE,
            top: food.y * CELL_SIZE
          }}
        />
      </div>

      <div className="mt-6 text-center">
        {isGameOver ? (
          <button
            onClick={resetGame}
            className="px-6 py-2 bg-white/10 rounded-full hover:bg-white/20 transition"
          >
            Play Again
          </button>
        ) : (
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="px-6 py-2 bg-white/10 rounded-full hover:bg-white/20 transition"
          >
            {isPaused ? 'Start Game' : 'Pause'}
          </button>
        )}
        <p className="mt-4 text-sm text-gray-400">
          Use arrow keys to move • Space to pause
        </p>
      </div>
    </div>
  );
} 