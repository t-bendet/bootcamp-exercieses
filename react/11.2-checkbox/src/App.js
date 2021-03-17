import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <form>
          <input type="checkBox" checked={true}></input>i read the terms of the
          app
          <input type="checkBox" checked={true}></input>i accept the term of the
          app
          <input type="checkBox"></input>i want to get the weekly news letter
          <input type="checkBox"></input>i want to get sales and offers
        </form>
      </div>
    );
  }
}
export default App;
