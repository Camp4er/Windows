import React, { useState, useEffect } from 'react';

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
import Image from 'next/image';

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
    const [isWhiteTurn, setIsWhiteTurn] = useState(true); // Track whose turn it is
    const [enPassantPossible, setEnPassantPossible] = useState<{ row: number; col: number } | null>(null);

    const handleSquareClick = (row: number, col: number) => {
        if (selectedSquare) {
            const selectedPiece = board[selectedSquare.row][selectedSquare.col];
            if (isValidMove(selectedPiece, selectedSquare.row, selectedSquare.col, row, col, board, isWhiteTurn, enPassantPossible)) {
                let newBoard = board.map((rowArr) => [...rowArr]); // Deep copy

                // Handle en passant capture
                if (enPassantPossible && selectedPiece.toLowerCase() === 'p' && row === enPassantPossible.row && col === enPassantPossible.col) {
                    newBoard[selectedSquare.row][col] = ''; // Remove captured pawn
                }

                newBoard[row][col] = selectedPiece;
                newBoard[selectedSquare.row][selectedSquare.col] = '';

                setBoard(newBoard);
                setIsWhiteTurn(!isWhiteTurn);
                setSelectedSquare(null);
                setEnPassantPossible(null); // Reset en passant

                // Check if pawn can perform en passant on next move
                if (selectedPiece.toLowerCase() === 'p' && Math.abs(row - selectedSquare.row) === 2) {
                    setEnPassantPossible({ row: (selectedSquare.row + row) / 2, col });
                }
            } else {
                setSelectedSquare(null); // Deselect if move is invalid
            }
        } else {
            // Selecting a square
            setSelectedSquare({ row, col }); // Select the square
        }
    };
    const isValidMove = (piece: Piece, startRow: number, startCol: number, endRow: number, endCol: number, board: Board, isWhiteTurn: boolean, enPassantPossible: { row: number; col: number } | null): boolean => {
        if (!piece) return false;

        const isWhitePiece = piece === piece.toUpperCase();
        if (isWhiteTurn !== isWhitePiece) return false;

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

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
            <h2 className="text-xl text-white mb-4">{isWhiteTurn ? "White's Turn" : "Black's Turn"}</h2>
            <div className="grid grid-cols-8 gap-0">
                {board.map((rowArr, rowIndex) => (
                    rowArr.map((piece, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`w-16 h-16 flex items-center justify-center cursor-pointer transition duration-200 
                ${(rowIndex + colIndex) % 2 === 0 ? "bg-gray-700" : "bg-gray-600"} 
                ${selectedSquare?.row === rowIndex && selectedSquare?.col === colIndex ? "border-4 border-blue-400" : ""}`}
                            onClick={() => handleSquareClick(rowIndex, colIndex)}
                        >
                            {piece && <Image src={pieceImages[piece]} alt={piece} width={50} height={50} />}
                        </div>
                    ))
                ))}
            </div>
        </div>
    );
};

export default Chess;