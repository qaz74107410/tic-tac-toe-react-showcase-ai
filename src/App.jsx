import React from 'react';
import TicTacToe from './components/TicTacToe.jsx';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0'
    }}>
      <TicTacToe />
    </div>
  );
}

export default App; 