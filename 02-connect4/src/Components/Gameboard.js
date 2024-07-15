import React, { useState } from "react";
import GameCircle from "./GameCircle";
import "../Game.css";

const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

  // console.log(gameBoard);
  const renderBlock = () => {
    const circles = [];
    for (let i = 0; i < 16; i++) {
      circles.push(renderCircle(i));
    }
    return circles;
  };
  const circleClicked = (id) => {
    console.log("circle clicked: " + id);

    const board = [...gameBoard];

    board[id] = currentPlayer;
    setGameBoard(board);

    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
  };

  const renderCircle = (id) => {
    return (
      <GameCircle
        id={id}
        className={`player_${gameBoard[id]}`}
        onCircleClicked={circleClicked}
      />
    );
  };

  return <div className="gameBoard">{renderBlock()}</div>;
};

export default GameBoard;
