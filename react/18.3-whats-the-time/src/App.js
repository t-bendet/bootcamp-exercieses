import React, { useState } from "react";
const App = () => {
  const [time, setTime] = useState(60);

  return (
    <div>
      <form>
        <label>Seconds</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        ></input>
        <label>Minutes</label>
        <input
          type="number"
          value={time / 60}
          onChange={(e) => setTime(e.target.value * 60)}
        ></input>
        <label>Hours</label>
        <input
          type="number"
          value={time / 60 / 60}
          onChange={(e) => setTime(e.target.value * 60 * 60)}
        ></input>
      </form>
    </div>
  );
};

export default App;
