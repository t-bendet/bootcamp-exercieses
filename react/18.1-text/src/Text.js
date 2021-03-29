import React, { useState } from "react";

const Text = ({ string, maxLength }) => {
  const [text, setText] = useState(string);
  return (
    <div>
      <h1>
        {text}
        {maxLength}
      </h1>
    </div>
  );
};

export default Text;
