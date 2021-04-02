import React, { useState, useEffect, useRef } from "react";
import sky1 from "./image/sky1.jpg";
import sky2 from "./image/sky2.jpg";
import sky3 from "./image/sky3.jpg";
import sky4 from "./image/sky4.jpg";
import "./app.css";
const App = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  useEffect(() => {
    ref1.current.addEventListener("mouseover", () => {
      ref1.current.src = sky1;
    });
    ref1.current.addEventListener("mouseout", () => {
      ref1.current.src = sky3;
    });
    ref2.current.addEventListener("mouseover", () => {
      ref2.current.src = sky2;
    });
    ref2.current.addEventListener("mouseout", () => {
      ref2.current.src = sky4;
    });
  }, []);

  return (
    <div>
      <img ref={ref1} src={sky3}></img>
      <img ref={ref2} src={sky4}></img>
    </div>
  );
};

export default App;
