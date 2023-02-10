import React from 'react';
import { useState, useEffect } from 'react';
import "./App.css";
import Square from './components/Square';
import { Condition } from './Condition';

const App = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]); 
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({winner: "none", state: "none"})

  useEffect(() => {
    Winner(); 
    tieCheck();
    if(player == "X"){
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if(result.state != "none"){
      alert(`Game over! The winner is ${result.winner}`);
      restart();
    }
  }, [result])
  const pickSquare = (square) => {
    setBoard(board.map((value, index) => {
      if(index == square && value == ""){
        return player;
      }
        return value;
      })  
    );
  };

  const Winner = () => {
    Condition.forEach((currConditon) => {
      const FirstPlayer = board[currConditon[0]];
      if(FirstPlayer == "") return;
      let winningCondition = true;  
      currConditon.forEach((index) => {
        if(board[index] != FirstPlayer){
          winningCondition = false;
        }
      })
      if(winningCondition){
        setResult({winner: player, state: "won the game"});
      }
    })
  }

  const tieCheck = () => {
    let filled = true;
    board.forEach((square) => {
      if(square == ""){
        filled = false;
      }
    });
    if(filled){
      setResult({winner: "Tie!", state: "Tie!"})
    }
  } 

  const restart = () => {
    setBoard(["", "", "", "", "", "", "", "", ""])
  }
  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      <div className='app'>
      <div className='board'>
        <div className='row'>
          <Square 
            value={board[0]} 
            pickSquare={() => {pickSquare(0)}}/>
          <Square
            value={board[1]} 
            pickSquare={() => {pickSquare(1)}}/>
          <Square
            value={board[2]} 
            pickSquare={() => {pickSquare(2)}}/>
        </div>
        <div className='row'>
          <Square 
            value={board[3]} 
            pickSquare={() => {pickSquare(3)}}/>
          <Square
            value={board[4]} 
            pickSquare={() => {pickSquare(4)}}/>
          <Square
            value={board[5]} 
            pickSquare={() => {pickSquare(5)}}/>
        </div>
        <div className='row'>
          <Square 
            value={board[6]} 
            pickSquare={() => {pickSquare(6)}}/>
          <Square
            value={board[7]} 
            pickSquare={() => {pickSquare(7)}}/>
          <Square
            value={board[8]} 
            pickSquare={() => {pickSquare(8)}}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App;