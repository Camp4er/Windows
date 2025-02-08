"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FaPencilAlt, FaEraser, FaMousePointer, FaSearchPlus, FaSearchMinus, FaPaintBrush, FaFont, FaSquare, FaCircle, FaFillDrip, FaTextHeight } from 'react-icons/fa';

const Paint: React.FC = () => {
    const [drawing, setDrawing] = useState(false);
    const [selectedTool, setSelectedTool] = useState('pencil');
    const [strokeColor, setStrokeColor] = useState('#000000');
    const [fillColor, setFillColor] = useState('#ffffff');
    const [lineWidth, setLineWidth] = useState(2);
    const [canvasWidth, setCanvasWidth] = useState(800);
    const [canvasHeight, setCanvasHeight] = useState(600);
    const [zoomLevel, setZoomLevel] = useState(1);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
    const [history, setHistory] = useState<string[]>([]);
    const [historyStep, setHistoryStep] = useState(-1);
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipText, setTooltipText] = useState('');

    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [textInput, setTextInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isInsideCanvas, setIsInsideCanvas] = useState(false);
    const [shapeData, setShapeData] = useState<{ x: number; y: number; width: number; height: number }>({ x: 0, y: 0, width: 0, height: 0 });

    // Use useCallback for stable functions
    const drawShape = useCallback((ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, tool: string) => {
        ctx.beginPath();
        if (tool === 'square') {
            ctx.rect(x, y, width, height);
        } else if (tool === 'circle') {
            const radius = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
        }
        ctx.stroke();
    }, []);

    const saveToHistory = useCallback((ctx: CanvasRenderingContext2D, dataURL: string) => {
        setHistory(prevHistory => {
            const newHistory = prevHistory.slice(0, historyStep + 1);
            return [...newHistory, dataURL];
        });
        setHistoryStep(prevHistoryStep => prevHistoryStep + 1);
    }, [historyStep]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.width = canvasWidth * zoomLevel;
        canvas.height = canvasHeight * zoomLevel;
        canvas.style.width = `${canvasWidth}px`;
        canvas.style.height = `${canvasHeight}px`;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.scale(zoomLevel, zoomLevel);
        setContext(ctx);

        if (history.length === 0) {
            ctx.fillStyle = fillColor;
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
            saveToHistory(ctx, canvas.toDataURL());
        } else {
            const img = new Image();
            img.src = history[historyStep];
            img.onload = () => {
                ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
            };
        }

        setCursorStyle(selectedTool);
    }, [canvasWidth, canvasHeight, fillColor, zoomLevel, selectedTool, historyStep, saveToHistory]);

    const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!context) return;
        setDrawing(true);
        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.offsetY;
        setStartX(x);
        setStartY(y);
        setShapeData({ x, y, width: 0, height: 0 });

        if (selectedTool === 'text') {
            setIsTyping(true);
        } else {
            context.beginPath();
            context.moveTo(x, y);
        }
    };

    const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!drawing || !context) return;

        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.offsetY;

        switch (selectedTool) {
            case 'pencil':
            case 'brush':
                context.strokeStyle = strokeColor;
                context.lineWidth = selectedTool === 'pencil' ? lineWidth : lineWidth * 3;
                context.lineTo(x, y);
                context.stroke();
                break;
            case 'eraser':
                context.clearRect(x - 5, y - 5, 10, 10);
                break;
            case 'square':
            case 'circle':
                if (drawing) {
                    context.clearRect(0, 0, canvasWidth, canvasHeight);
                    const img = new Image();
                    img.src = history[historyStep];
                    img.onload = () => {
                        context.drawImage(img, 0, 0, canvasWidth, canvasHeight);
                        context.beginPath();
                        if (selectedTool === 'square') {
                            context.rect(startX, startY, x - startX, y - startY);
                        } else if (selectedTool === 'circle') {
                            const radius = Math.sqrt(Math.pow(x - startX, 2) + Math.pow(y - startY, 2));
                            context.arc(startX, startY, radius, 0, 2 * Math.PI);
                        }
                        context.strokeStyle = strokeColor;
                        context.lineWidth = lineWidth;
                        context.stroke();
                    };
                }
                break;
            default:
                break;
        }
    };

    const endDrawing = () => {
        if (!context || !canvasRef.current) return;
        setDrawing(false);

        if (selectedTool === 'text') {
            if (context) {
                context.font = '20px sans-serif';
                context.fillStyle = strokeColor;
                context.fillText(textInput, startX, startY);
                setTextInput('');
            }
        }
        setIsTyping(false);
        context.closePath();
        saveToHistory(context, canvasRef.current.toDataURL());
    };

    const handleToolChange = (tool: string) => {
        setSelectedTool(tool);
        setCursorStyle(tool);
    };

    const handleColorChange = (color: string) => {
        setStrokeColor(color);
    };

    const handleFillColorChange = (color: string) => {
        setFillColor(color);
    };

    const handleZoom = (zoomIn: boolean) => {
        setZoomLevel(prevZoom => {
            const newZoom = zoomIn ? prevZoom / 1.1 : prevZoom * 1.1;
            return Math.max(0.1, Math.min(newZoom, 10));
        });
    };

    const undo = () => {
        if (historyStep > 0) {
            setHistoryStep(prevStep => prevStep - 1);
        }
    };

    const redo = () => {
        if (historyStep < history.length - 1) {
            setHistoryStep(prevStep => prevStep + 1);
        }
    };

    useEffect(() => {
        if (context && history[historyStep]) {
            const img = new Image();
            img.src = history[historyStep];
            img.onload = () => {
                context.clearRect(0, 0, canvasWidth, canvasHeight);
                context.drawImage(img, 0, 0, canvasWidth, canvasHeight);
            };
        }
    }, [historyStep, context, canvasWidth, canvasHeight]);

    const handleMouseEnter = (tool: string) => {
        setTooltipText(tool);
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
        setTooltipText('');
    };

    const setCursorStyle = useCallback((tool: string) => {
        let cursor = 'default';
        switch (tool) {
            case 'pencil':
                cursor = 'url("https://img.icons8.com/doodle/48/000000/pencil--v1.png"), auto';
                break;
            case 'eraser':
                cursor = 'url("https://img.icons8.com/plasticine/100/000000/eraser.png"), auto';
                break;
            case 'square':
            case 'circle':
                cursor = 'crosshair';
                break;
            default:
                cursor = 'default';
        }

        if (canvasRef.current) {
            canvasRef.current.style.cursor = isInsideCanvas ? cursor : 'default';
        }
    }, [isInsideCanvas]);

    const handleCanvasEnter = () => {
        setIsInsideCanvas(true);
        setCursorStyle(selectedTool);
    };

    const handleCanvasLeave = () => {
        setIsInsideCanvas(false);
        if (canvasRef.current) {
            canvasRef.current.style.cursor = 'default';
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black">
            <h1 className="text-3xl font-bold mb-4 text-white">React Paint</h1>

            {/* Toolbar */}
            <div className="flex bg-gray-800 p-4 rounded-lg shadow-md mb-4">
                <button
                    onClick={() => handleToolChange('pencil')}
                    onMouseEnter={() => handleMouseEnter('Pencil')}
                    onMouseLeave={handleMouseLeave}
                    className={`p-2 rounded-md hover:bg-gray-700 ${selectedTool === 'pencil' ? 'bg-gray-600' : ''}`}
                >
                    <FaPencilAlt className="text-white" />
                </button>
                <button
                    onClick={() => handleToolChange('brush')}
                    onMouseEnter={() => handleMouseEnter('Brush')}
                    onMouseLeave={handleMouseLeave}
                    className={`p-2 rounded-md hover:bg-gray-700 ${selectedTool === 'brush' ? 'bg-gray-600' : ''}`}
                >
                    <FaPaintBrush className="text-white" />
                </button>
                <button
                    onClick={() => handleToolChange('eraser')}
                    onMouseEnter={() => handleMouseEnter('Eraser')}
                    onMouseLeave={handleMouseLeave}
                    className={`p-2 rounded-md hover:bg-gray-700 ${selectedTool === 'eraser' ? 'bg-gray-600' : ''}`}
                >
                    <FaEraser className="text-white" />
                </button>
                <button
                    onClick={() => handleToolChange('fill')}
                    onMouseEnter={() => handleMouseEnter('Fill')}
                    onMouseLeave={handleMouseLeave}
                    className={`p-2 rounded-md hover:bg-gray-700 ${selectedTool === 'fill' ? 'bg-gray-600' : ''}`}
                >
                    <FaFillDrip className="text-white" />
                </button>
                <button
                    onClick={() => handleToolChange('text')}
                    onMouseEnter={() => handleMouseEnter('Text')}
                    onMouseLeave={handleMouseLeave}
                    className={`p-2 rounded-md hover:bg-gray-700 ${selectedTool === 'text' ? 'bg-gray-600' : ''}`}
                >
                    <FaFont className="text-white" />
                </button>
                <button
                    onClick={() => handleToolChange('square')}
                    onMouseEnter={() => handleMouseEnter('Square')}
                    onMouseLeave={handleMouseLeave}
                    className={`p-2 rounded-md hover:bg-gray-700 ${selectedTool === 'square' ? 'bg-gray-600' : ''}`}
                >
                    <FaSquare className="text-white" />
                </button>
                <button
                    onClick={() => handleToolChange('circle')}
                    onMouseEnter={() => handleMouseEnter('Circle')}
                    onMouseLeave={handleMouseLeave}
                    className={`p-2 rounded-md hover:bg-gray-700 ${selectedTool === 'circle' ? 'bg-gray-600' : ''}`}
                >
                    <FaCircle className="text-white" />
                </button>
                <input
                    type="color"
                    value={strokeColor}
                    onChange={(e) => handleColorChange(e.target.value)}
                    className="ml-4"
                />
                <input
                    type="color"
                    value={fillColor}
                    onChange={(e) => handleFillColorChange(e.target.value)}
                    className="ml-4"
                />
                <button
                    onClick={() => handleZoom(true)}
                    className="p-2 rounded-md hover:bg-gray-700"
                >
                    <FaSearchPlus className="text-white" />
                </button>
                <button
                    onClick={() => handleZoom(false)}
                    className="p-2 rounded-md hover:bg-gray-700"
                >
                    <FaSearchMinus className="text-white" />
                </button>
                <button onClick={undo} className="text-white">Undo</button>
                <button onClick={redo} className="text-white ml-2">Redo</button>
            </div>

            {/* Canvas */}
            <div className="relative">
                {showTooltip && (
                    <div className="absolute top-[-30px] left-0 bg-gray-700 text-white text-sm p-1 rounded">
                        {tooltipText}
                    </div>
                )}
                <canvas
                    ref={canvasRef}
                    className="bg-white shadow-lg"
                    style={{ width: canvasWidth + 'px', height: canvasHeight + 'px', cursor: 'default' }}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={endDrawing}
                    onMouseLeave={handleCanvasLeave}
                    onMouseEnter={handleCanvasEnter}
                />
                {isTyping && (
                    <input
                        type="text"
                        className="absolute left-0 top-0"
                        style={{ left: startX, top: startY, background: 'transparent', border: 'none', outline: 'none' }}
                        value={textInput}
                        onChange={(e) => setTextInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                endDrawing();
                            }
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default Paint;
