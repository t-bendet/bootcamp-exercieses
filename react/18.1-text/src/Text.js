import React, { useState } from "react";
import "./text.css";

const Text = ({ string, maxLength }) => {
  const [showText, setShowText] = useState(false);
  // if str length is bigger then maxLength add span else display string
  if (string.length <= maxLength) {
    return <span>{string}</span>;
  }
  return (
    <div className="container">
      <p>
        {showText ? string : `${string.substr(0, maxLength).trim()}`}
        {showText ? (
          <span onClick={() => setShowText(false)}>Show less</span>
        ) : (
          <span onClick={() => setShowText(true)}>...Read more</span>
        )}
      </p>
    </div>
  );
};

export default Text;
