import React from "react";
import ReactDOM from "react-dom";
if (module.hot) {
  module.hot.accept();
}
// creat a react component
const App = () => {
  return (
    <div style={{ backgroundColor: "red", height: "100px" }}>Hi there!</div>
  );
};

/// take the react component and shoe it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
