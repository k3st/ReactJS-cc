import React from "react";

import { GAME_STATE_PLAYING, GAME_STATE_WIN } from "./Constants";

export const Header = ({ gameState, currentPlayer }) => {
  const renderLabel = () => {
    console.log(gameState);
    switch (gameState) {
      case GAME_STATE_PLAYING:
        return <div> Player {currentPlayer} Turn </div>;
      case GAME_STATE_WIN:
        return <div> Winner: Player {currentPlayer} </div>;
      default:
    }
  };
  return (
    <div className="panel header center-container">
      <div className=" header-text ">{renderLabel()}</div>
    </div>
  );
};

export const Footer = ({ onClickEvent }) => {
  return (
    <div className="panel footer center-container ">
      <button onClick={onClickEvent}>New Game</button>
    </div>
  );
};
