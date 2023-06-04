import './App.css';
import { useState } from "react";

function Square({ value, onSquareClick }) {

  return (
    <button
      className='Square'
      onClick={onSquareClick}> {value} </button>
  )
}

function App() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentTurn, setTurn] = useState("X")
  const [gameState, setGameState] = useState("Playing");

  function handleSquareClicks(clickedSquare) {
    console.log("Got a Click on squre: ", clickedSquare);

    // -----------------------------------------------
    // Go get a copy of the current state of the board
    const nextSquares = squares.slice();
    // Update the one square that is changing
    nextSquares[clickedSquare] = currentTurn;
    // Update the state. But note it's just the one square.
    setSquares(nextSquares);
    // Figure out who's turn it is an update the turn state
    setTurn(calculateNewTurn());
    // See if the game is over yet.
    setGameState();
  }

  function calculateNewTurn() {
    let nextTurn = null;
    if (currentTurn === "X") { nextTurn = "O" } else { nextTurn = "X" }
    return nextTurn;
  }

  return (
    <div className="cssAppBody">
      <h1 className='cssAppHeader'>Anthony's Kick Ass Tic Tac Toe</h1>
      <h2>Current Game State: {gameState}</h2>
      <h2>Current Turn: {currentTurn}</h2>
      <div className='cssAppBoard'>
        <div className="cssBoardRow">
          <Square value={squares[0]} onSquareClick={() => handleSquareClicks(0)}></Square>
          <Square value={squares[1]} onSquareClick={function temp() { handleSquareClicks(1) }}></Square>
          <Square value={squares[2]} onSquareClick={() => handleSquareClicks(2)}></Square>
        </div>
        <div className='cssBoardRow'>
          <Square value={squares[3]} onSquareClick={() => handleSquareClicks(3)}></Square>
          <Square value={squares[4]} onSquareClick={() => handleSquareClicks(4)}></Square>
          <Square value={squares[5]} onSquareClick={() => handleSquareClicks(5)}></Square>
        </div>
        <div className='cssBoardRow'>
          <Square value={squares[6]} onSquareClick={() => handleSquareClicks(6)}></Square>
          <Square value={squares[7]} onSquareClick={() => handleSquareClicks(7)}></Square>
          <Square value={squares[8]} onSquareClick={() => handleSquareClicks(8)}></Square>
        </div>
      </div>
    </div >
  )
}

export default App;
