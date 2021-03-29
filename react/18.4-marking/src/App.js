import React, { useState } from "react";
import CheckBox from "./CheckBox";

const boxArr = ["one", "two", "three", "four", "five"];

const App = () => {
  const [intial, setintial] = useState([...boxArr]);
  const [toDelete, setToDelete] = useState([]);
  const addId = (text) => {
    if (toDelete.includes(text)) {
      let index = toDelete.indexOf(text);
      let newArr = [...toDelete];
      newArr.splice(index, 1);
      setToDelete(newArr);
    } else {
      setToDelete([...toDelete, text]);
    }
  };
  const deleteBoxes = () => {
    const filterd = intial.filter((x) => {
      return !toDelete.includes(x);
    });
    setintial(filterd);
  };
  const resetBoxes = () => {
    setintial([...boxArr]);
    setToDelete([]);
  };
  let boxes = intial.map((box) => {
    return <CheckBox addId={addId} key={box} text={box} />;
  });
  return (
    <div>
      <ul>{boxes}</ul>
      <button onClick={deleteBoxes}>Delete</button>
      <button onClick={resetBoxes}>Reset</button>
    </div>
  );
};

export default App;
