import React from "react";
import "../Game.css";

const onClick = (id, value) => {
  alert("click" + id);
};

const GameCircle = ({ id, color, children }) => {
  const style = {
    backgroundColor: color,
  };
  return (
    <div
      className="gameCircle"
      style={
        id % 2 === 0 ? { backgroundColor: "red" } : { backgroundColor: "blue" }
      }
      onClick={(ev) => onClick(ev, id)}
    >
      {children}
    </div>
  );
};

export default GameCircle;
