import React from 'react';

const Square = ({ value, onClick }) => {
  return (
    <button 
      className="square" 
      onClick={onClick}
      style={{
        width: '60px',
        height: '60px',
        backgroundColor: '#fff',
        border: '2px solid #999',
        fontSize: '24px',
        fontWeight: 'bold',
        cursor: 'pointer',
        outline: 'none'
      }}
    >
      {value}
    </button>
  );
};

export default Square; 