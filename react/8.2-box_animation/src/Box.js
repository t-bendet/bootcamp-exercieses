import React from "react";
import "./Box.css";

const Box = (props) => {
  return (
    <div
      className="box slide-right"
      style={{ width: props.width, height: props.height }}
    ></div>
  );
};

export default Box;
