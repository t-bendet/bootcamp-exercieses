import React from "react";

const MyButton = (props) => {
  return <button className={props.btnClass}>{props.text}</button>;
};

export default MyButton;
