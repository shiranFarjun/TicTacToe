import React from 'react';

const style = {
    background: 'white',
    border: '2px solid #8bd0df',
    fontSize: '30px',
    fontWeight: '1000',
    cursor: 'pointer',
    outline: 'none'
};

const Square = ({ value, onClick }) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>
);

export default Square;