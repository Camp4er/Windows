import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { FaCog, FaUserCircle } from 'react-icons/fa'; // Import settings icon
import useSound from 'use-sound';

// Import piece images
import whitePawn from '../../../public/games/wp.png';
import blackPawn from '../../../public/games/bp.png';
import whiteRook from '../../../public/games/wr.png';
import blackRook from '../../../public/games/br.png';
import whiteKnight from '../../../public/games/wn.png';
import blackKnight from '../../../public/games/bn.png';
import whiteBishop from '../../../public/games/wb.png';
import blackBishop from '../../../public/games/bb.png';
import whiteQueen from '../../../public/games/wq.png';
import blackQueen from '../../../public/games/bq.png';
import whiteKing from '../../../public/games/wk.png';
import blackKing from '../../../public/games/bk.png';
// Sounds
// import moveSound from '../../../public/sound/ting.mp3?url';
// import captureSound from '../../../public/sound/ting.mp3?url';

// Define types
type Piece = 'r' | 'n' | 'b' | 'q' | 'k' | 'p' | 'P' | 'R' | 'N' | 'B' | 'Q' | 'K' | '';
type Board = Piece[][];

const initialBoard: Board = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
];

const pieceImages: { [key: string]: any } = {
    P: whitePawn,
    R: whiteRook,
    N: whiteKnight,
    B: whiteBishop,
    Q: whiteQueen,
    K: whiteKing,
    p: blackPawn,
    r: blackRook,
    n: blackKnight,
    b: blackBishop,
    q: blackQueen,
    k: blackKing,
};

const Chess: React.FC = () => {
    const [board, setBoard] = useState<Board>(initialBoard);
    const [selectedSquare, setSelectedSquare] = useState<{ row: number; col: number } | null>(null);
    const [isWhiteTurn, setIsWhiteTurn] = useState(true);
    const [enPassantPossible, setEnPassantPossible] = useState<{ row: number; col: number } | null>(null);
    const [possibleMoves, setPossibleMoves] = useState<number[][]>([]);
    const [showPossibleMoves, setShowPossibleMoves] = useState(true);
    const [isCheck, setIsCheck] = useState(false);
    const [isCheckmate, setIsCheckmate] = useState(false);
    const [gameOver, setGameOver] = useState(false); // Track if the game is over
    const [lastMove, setLastMove] = useState<string>(''); // Track the last move
    // Sounds
    // const [playMoveSound] = useSound(moveSound);
    // const [playCaptureSound] = useSound(captureSound);

    const handleSquareClick = (row: number, col: number) => {
        if (gameOver) return; // Stop further moves if the game is over

        if (selectedSquare) {
            const selectedPiece = board[selectedSquare.row][selectedSquare.col];
            if (isValidMove(selectedPiece, selectedSquare.row, selectedSquare.col, row, col, board, isWhiteTurn, enPassantPossible)) {
                let newBoard = board.map((rowArr) => [...rowArr]);

                // Handle capturing a piece
                const capturedPiece = newBoard[row][col];

                // Handle en passant capture
                if (enPassantPossible && selectedPiece.toLowerCase() === 'p' && row === enPassantPossible.row && col === enPassantPossible.col) {
                    newBoard[selectedSquare.row][col] = '';
                }

                newBoard[row][col] = selectedPiece;
                newBoard[selectedSquare.row][selectedSquare.col] = '';

                setBoard(newBoard);
                setIsWhiteTurn(!isWhiteTurn);
                setSelectedSquare(null);
                setPossibleMoves([]); // Clear possible moves
                setEnPassantPossible(null);

                // Track the last move
                setLastMove(`Moved ${selectedPiece} from ${String.fromCharCode(97 + selectedSquare.col)}${8 - selectedSquare.row} to ${String.fromCharCode(97 + col)}${8 - row}`);

                // Check to determine who took the step
                if (isWhiteTurn) {
                  setLastMove(`White` + ' ' + `${selectedPiece} from ${String.fromCharCode(97 + selectedSquare.col)}${8 - selectedSquare.row} to ${String.fromCharCode(97 + col)}${8 - row}`);
                } else {
                  setLastMove(`Black` + ' ' + `${selectedPiece} from ${String.fromCharCode(97 + selectedSquare.col)}${8 - selectedSquare.row} to ${String.fromCharCode(97 + col)}${8 - row}`);
                }

                // Play appropriate sound
                // if (capturedPiece) {
                //     playCaptureSound();
                // } else {
                //     playMoveSound();
                // }
                // Check to determine if it's a checkmate
                if (selectedPiece.toLowerCase() === 'k') {
                    setGameOver(true);
                    alert(`Checkmate! ${isWhiteTurn ? "White" : "Black"} wins!`);
                    return;
                }

                // Check if the opponent is in check or checkmate
                if (isInCheck(newBoard, !isWhiteTurn)) {
                    setIsCheck(true);
                    if (isCheckmateFn(newBoard, !isWhiteTurn)) {
                        setIsCheckmate(true);
                        setGameOver(true);
                        alert(`Checkmate! ${isWhiteTurn ? "White" : "Black"} wins!`);
                    }
                } else {
                    setIsCheck(false);
                    setIsCheckmate(false);
                }
            } else {
                setSelectedSquare(null);
                setPossibleMoves([]);
            }
        } else {
            setSelectedSquare({ row, col });
            if (showPossibleMoves) {
                const moves = getPossibleMoves(board[row][col], row, col, board, isWhiteTurn, enPassantPossible);
                setPossibleMoves(moves);
            }
        }
    };

    const isValidMove = (piece: Piece, startRow: number, startCol: number, endRow: number, endCol: number, board: Board, isWhiteTurn: boolean, enPassantPossible: { row: number; col: number } | null): boolean => {
        if (!piece) return false;

        const isWhitePiece = piece === piece.toUpperCase();
        if (isWhiteTurn !== isWhitePiece) return false;

        // Destination square can't contain a piece of the same color
        const destPiece = board[endRow][endCol];
        if (destPiece && ((isWhiteTurn && destPiece === destPiece.toUpperCase()) || (!isWhiteTurn && destPiece === destPiece.toLowerCase()))) {
            return false;
        }

        const rowDiff = Math.abs(endRow - startRow);
        const colDiff = Math.abs(endCol - startCol);

        switch (piece.toLowerCase()) {
            case 'p': {
                const direction = isWhiteTurn ? -1 : 1;
                const startingRow = isWhiteTurn ? 6 : 1;

                if (endCol === startCol && board[endRow][endCol] === '') {
                    if (endRow === startRow + direction) return true;
                    if (startRow === startingRow && endRow === startRow + 2 * direction && board[startRow + direction][endCol] === '') return true;
                } else if (Math.abs(endCol - startCol) === 1 && endRow === startRow + direction &&
                           (board[endRow][endCol] !== '' || (enPassantPossible && endRow === enPassantPossible.row && endCol === enPassantPossible.col))) {
                    return true; // Diagonal capture
                }
                return false;
            }
            case 'r': {
                if ((rowDiff === 0 || colDiff === 0) && !isPathBlocked(startRow, startCol, endRow, endCol, board)) return true;
                return false;
            }
            case 'n': {
                if ((rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2)) return true;
                return false;
            }
            case 'b': {
                if ((rowDiff === colDiff) && !isPathBlocked(startRow, startCol, endRow, endCol, board)) return true;
                return false;
            }
            case 'q': {
                if (((rowDiff === colDiff) || (rowDiff === 0 || colDiff === 0)) && !isPathBlocked(startRow, startCol, endRow, endCol, board)) return true;
                return false;
            }
            case 'k': {
                if (rowDiff <= 1 && colDiff <= 1) return true;
                return false;
            }
            default:
                return false;
        }
    };
    const isPathBlocked = (startRow: number, startCol: number, endRow: number, endCol: number, board: Board): boolean => {
        const stepRow = Math.sign(endRow - startRow);
        const stepCol = Math.sign(endCol - startCol);

        let row = startRow + stepRow;
        let col = startCol + stepCol;

        while (row !== endRow || col !== endCol) {
            if (board[row][col]) return true; // Path is blocked by another piece
            row += stepRow;
            col += stepCol;
        }
        return false; // Path is clear
    };

    const getPossibleMoves = (piece: Piece, startRow: number, startCol: number, board: Board, isWhiteTurn: boolean, enPassantPossible: { row: number; col: number } | null): number[][] => {
        const moves: number[][] = [];
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                if (isValidMove(piece, startRow, startCol, row, col, board, isWhiteTurn, enPassantPossible)) {
                    moves.push([row, col]);
                }
            }
        }
        return moves;
    };
    const isInCheck = (board: Board, isWhiteTurn: boolean): boolean => {
        let kingRow = -1, kingCol = -1;
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const piece = board[i][j];
                if ((isWhiteTurn && piece === 'K') || (!isWhiteTurn && piece === 'k')) {
                    kingRow = i;
                    kingCol = j;
                    break;
                }
            }
            if (kingRow !== -1) break;
        }
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const piece = board[i][j];
                if (piece && ((isWhiteTurn && piece === piece.toLowerCase()) || (!isWhiteTurn && piece === piece.toUpperCase()))) {
                    if (isValidMove(piece, i, j, kingRow, kingCol, board, !isWhiteTurn, null)) {
                        return true; // King is under attack
                    }
                }
            }
        }
        return false; // King is not under attack
    };
    const isCheckmateFn = (board: Board, isWhiteTurn: boolean): boolean => {
      for (let row = 0; row < 8; row++) {
          for (let col = 0; col < 8; col++) {
              const piece = board[row][col];
  
              // Skip empty squares and opponent's pieces
              if (!piece || (isWhiteTurn && piece === piece.toLowerCase()) || (!isWhiteTurn && piece === piece.toUpperCase())) {
                  continue;
              }
  
              for (let moveRow = 0; moveRow < 8; moveRow++) {
                  for (let moveCol = 0; moveCol < 8; moveCol++) {
                      let newBoard = board.map((rowArr) => [...rowArr]);
  
                      if (isValidMove(piece, row, col, moveRow, moveCol, board, isWhiteTurn, null)) {
                          // Simulate the move
                          newBoard[moveRow][moveCol] = piece;
                          newBoard[row][col] = '';
  
                          // If the move gets the king out of check, it's not checkmate
                          if (!isInCheck(newBoard, isWhiteTurn)) {
                              return false;
                          }
                      }
                  }
              }
          }
      }
      return true; // No legal moves left → Checkmate
  };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="flex justify-between w-full max-w-md items-center mb-4">
                <div className="flex items-center">
                    <FaUserCircle size={32} className={`mr-2 ${isWhiteTurn ? 'text-green-500' : 'text-gray-400'}`} />
                    <span>White</span>
                </div>
                <div className="flex items-center">
                    <span>Black</span>
                    <FaUserCircle size={32} className={`ml-2 ${!isWhiteTurn ? 'text-green-500' : 'text-gray-400'}`} />
                </div>
            </div>
            <h2 className="text-xl text-gray-700 mb-2">{(isWhiteTurn ? "White's Turn" : "Black's Turn")}</h2>
            <p className="text-sm text-gray-500 mb-2">{lastMove}</p>
            {isCheck && <p className="text-red-500">Check!</p>}
            {isCheckmate && <p className="text-red-500">Checkmate!</p>}
            {gameOver && <p className="text-2xl text-green-500">Game Over!</p>}
            <div className="grid grid-cols-8 gap-0 bg-green-700 border-4 border-green-900">
                {board.map((rowArr, rowIndex) => (
                    rowArr.map((piece, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`w-12 h-12 flex items-center justify-center cursor-pointer transition duration-200 
                              ${(rowIndex + colIndex) % 2 === 0 ? "bg-green-400" : "bg-green-500"} 
                              ${selectedSquare?.row === rowIndex && selectedSquare?.col === colIndex ? "border-4 border-blue-400" : ""}
                              ${possibleMoves.some(move => move[0] === rowIndex && move[1] === colIndex) ? "bg-blue-200" : ""}`}
                            onClick={() => handleSquareClick(rowIndex, colIndex)}
                        >
                            {piece && <Image src={pieceImages[piece]} alt={piece} width={50} height={50} />}
                        </div>
                    ))
                ))}
            </div>
            <div className="mt-4">
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-green-600"
                        checked={showPossibleMoves}
                        onChange={() => setShowPossibleMoves(!showPossibleMoves)}
                    />
                    <span className="ml-2 text-gray-700">Show Possible Moves</span>
                </label>
            </div>
        </div>
    );
};

export default Chess;
