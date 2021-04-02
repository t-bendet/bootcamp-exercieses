import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [toggle]);
  return (
    <div>
      <h1>App</h1>
      {toggle ? null : <input ref={ref}></input>}
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "edit" : "save"}
      </button>
    </div>
  );
};

export default App;
