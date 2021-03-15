import React from "react";
import MyButton from "./MyButton";
import "./index.css";

function App() {
  return (
    <div>
      <MyButton btnClass="btn-bold" text="Important" />
      <MyButton text="Not Important" />
    </div>
  );
}

export default App;
