import React from "react";

export const Header = ({ player }) => {
  return (
    <div className="panel header center-container">
      <div>Player {player} Turn</div>
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
