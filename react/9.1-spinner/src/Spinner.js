import React from "react";
import "./Spinner.css";
const Spinner = (props) => {
  return (
    <div className="box">
      <div class={props.spinerType}></div>
    </div>
  );
};

export default Spinner;
// </div>
// <div class="box">
// <div class="circle black"></div>
// </div>
