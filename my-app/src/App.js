import './App.css';
import { useState } from "react";
//import { useEffect, useState } from "react";
//import axios from "axios";

function Square({ value, onSquareClick }) {

  return (
    <button
      className='Square'
      onClick={onSquareClick}> {value} </button>
  )
}
/*
function Anthony() {
  const [message, setMessage] = useState("Testing");

  useEffect(() => {

    axios.get(`http://testVSCode:8000`).then((response) => { setMessage(response.data) }).catch(() => { setMessage("error") })
  },
    []);
    "axios": "^1.4.0",

  return message;
}*/

function Card({ cardData, onCardClick }) {

  return <div
    className="cssAppCard"
    onClick={onCardClick}>
    UID: {cardData.uid}
    <ul>
      <li>TITLE: {cardData.title}</li>
      <li>TYPE: {cardData.cardType}</li>
    </ul>
  </div>
}

function Release() {
  const initialCardStack = [
    { uid: 0, cardType: 'Feature', title: "Feature1" },
    { uid: 1, cardType: 'NUDD', title: "NUDD1" },
    { uid: 2, cardType: 'Study', title: "Study1" },
    { uid: 3, cardType: 'Question', title: "Question1" }
  ];

  const [releaseList, setReleaseList] = useState(initialCardStack);

  function handleCardClick() {
    console.log("Got a Card Click", releaseList.length)
    //const newReleaseList = releaseList.slice();
    //newReleaseList.push(<Card onCardClick={() => handleCardClick()}></Card>);
    //newReleaseList.push(<Card onCardClick={() => handleCardClick()}></Card>);
    //setReleaseList(newReleaseList);
  }

  //let myString = <p>2</p>;
  //let myArray = [];
  //myArray.push(<Card></Card>);
  //myArray.push(<Card></Card>);
  return (
    <div className='cssAppRelease'>
      {releaseList.map(card => (
        <Card
          cardData={card}
          onCardClick={() => handleCardClick()}>
        </Card>))}
    </div>)
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
    <div className="cssAppBody" >
      <h1 className="cssAppHeader">Anthony's Kick Ass Tic Tac Toe</h1>
      <h2>Current Game State: {gameState}</h2>
      <h2>Current Turn: {currentTurn}</h2>
      <div className="cssAppReleaseBoard">
        <Anthony></Anthony>
        <Release />
        <Release />
      </div>
      <div className="cssAppBoard">
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
