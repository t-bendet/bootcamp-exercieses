import React, { useState } from "react";
import "./tesk.css";

const Tesk = ({ myTesk, completed }) => {
  const [complete, setComplete] = useState(completed);
  return (
    <div className="container">
      <div className={`${complete ? "" : "check"}`}>{myTesk}</div>
      <div onClick={() => setComplete(!complete)}>{`${
        complete ? String.fromCharCode(10060) : String.fromCharCode(10004)
      }`}</div>
    </div>
  );
};

export default Tesk;
