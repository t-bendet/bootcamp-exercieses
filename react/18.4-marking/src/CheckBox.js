import React, { useState } from "react";
const CheckBox = ({ text, addId }) => {
  const [isChecked, setIsChecked] = useState(false);
  const change = (e) => {
    addId(text);
    setIsChecked(e.target.checked);
  };
  return (
    <li>
      <input type="checkbox" checked={isChecked} onChange={change}></input>
      <label>{text}</label>
    </li>
  );
};

export default CheckBox;
