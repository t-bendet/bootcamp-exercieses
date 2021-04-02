import React, { useRef } from "react";
import waves from "./waves.mp4";
const App = () => {
  const ref = useRef();
  return (
    <div>
      <h1>App</h1>
      <video ref={ref} width="420" height="240">
        <source src={waves} type="video/mp4" />
      </video>
      <div>
        <button onClick={() => ref.current.play()}>Play</button>
        <button onClick={() => ref.current.pause()}>Pause</button>
      </div>
    </div>
  );
};

export default App;
