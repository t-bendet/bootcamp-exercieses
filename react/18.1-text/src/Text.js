import React, { useState } from "react";
import "./text.css";

const Text = ({ string, maxLength }) => {
  const [text, setText] = useState(string);
  const textRender = text;
  return (
    <div className="container">
      <p className="overflow">
        {text}
        {maxLength}
      </p>
    </div>
  );
};

export default Text;
