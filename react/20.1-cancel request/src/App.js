import React, { useState } from "react";
import MyDisplay from "./myDisplay";
const App = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Hide Data" : "Show Data"}
      </button>
      {toggle && <MyDisplay />}
    </div>
  );
};

export default App;
