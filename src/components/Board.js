import React from 'react';
import Square from './Square'

const style = {
    border: '4px solid #8bd0df',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '50px auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

const Board = ({ squares, onClick }) => (
    <div style={style}>
        {squares.map((elementSquare, i) => (
            <Square key={i} value={elementSquare} onClick={() => onClick(i)} />
        ))}
    </div>
)

export default Board;