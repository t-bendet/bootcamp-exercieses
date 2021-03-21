import React from "react";
import "./Name.css";
const Name = (props) => {
  const names = props.names.map((name) => {
    return <p>{name}</p>;
  });
  return <div className="box">{names}</div>;
};

export default Name;
