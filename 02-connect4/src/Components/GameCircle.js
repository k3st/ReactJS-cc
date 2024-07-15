import React from "react";

const onClick = (id, value) => {
  alert("click" + id);
};

const GameCircle = ({ id, value, children }) => {
  console.log(id);
  return <div onClick={(ev) => onClick(ev, id, value)}>{children}</div>;
};

export default GameCircle;
