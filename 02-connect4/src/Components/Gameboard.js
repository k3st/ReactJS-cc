import React, { useEffect, useState } from "react";
import GameCircle from "./GameCircle";
import "../Game.css";
import { Header, Footer } from "./Header";

const NO_CIRCLES = 16;

const NO_PLAYER = 0;
const PLAYER_1 = 1;
const PLAYER_2 = 2;

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

  useEffect(() => {
    initGame();
  }, []);

  const initGame = () => {
    setGameBoard(Array(16).fill(NO_PLAYER));
    setCurrentPlayer(PLAYER_1);
  };

  // console.log(gameBoard);
  const renderBoard = () => {
    const circles = [];
    for (let i = 0; i < NO_CIRCLES; i++) {
      circles.push(renderCircle(i));
    }
    return circles;
  };
  const circleClicked = (id) => {
    // console.log("circle clicked: " + id);
    // const board = [...gameBoard];
    // board[id] = currentPlayer;
    // setGameBoard(board);
    // setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);

    // //  Second Method // //

    setGameBoard((prev) => {
      return prev.map((circle, pos) => {
        if (pos === id) return currentPlayer;
        return circle;
      });
    });

    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
  };

  const renderCircle = (id) => {
    return (
      <GameCircle
        key={id}
        id={id}
        className={`player_${gameBoard[id]}`}
        onCircleClicked={circleClicked}
      />
    );
  };

  return (
    <div className="app-container center-container">
      <Header player={currentPlayer} />
      <div className="gameBoard ">{renderBoard()}</div>
      <Footer onClickEvent={initGame} />
    </div>
  );
};

export default GameBoard;
