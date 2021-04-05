import React from 'react';
import Square from './components/Square';
import Knight from './components/Knight';
import { canMoveKnight, moveKnight } from './components/Game';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BoardSquare from './components/BoardSquare';

import './App.css';

export default function Board({ knightPosition }) {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
    console.log(squares);
  }

  function handleSquareClick(toX, toY) {
    if (canMoveKnight(toX, toY)) {
      moveKnight(toX, toY);
    }
  }

  function renderSquare(i, knightPosition) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return (
      <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
        <BoardSquare x={x} y={y}>
          {renderPiece(x, y, knightPosition)}
        </BoardSquare>
      </div>
    );
  }

  function renderPiece(x, y, [knightX, knightY]) {
    if (x === knightX && y === knightY) {
      return (
        <>
          <DndProvider backend={HTML5Backend}>
            <Knight />
          </DndProvider>
        </>
      );
    }
  }
  return (
    <DndProvider backend={HTML5Backend}>
      <div className='screen'>{squares}</div>
    </DndProvider>
  );
}
