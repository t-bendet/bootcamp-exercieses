import React, { useState } from "react";
import Tesk from "./Tesk";

const tesksArr = [
  { name: "CSS", completed: true },
  { name: "JavaScript", completed: true },
  { name: "Learn React", completed: false },
  { name: "Learn mongoDB", completed: false },
  { name: "Learn Node JS", completed: false },
];

const App = () => {
  const tesks = tesksArr.map((tesk) => {
    return <Tesk myTesk={tesk.name} completed={tesk.completed} />;
  });
  return <div>{tesks}</div>;
};

export default App;
