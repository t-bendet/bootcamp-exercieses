import React from "react";
import "./App.css";
import ResponsiveCounter from "./ResponsiveCounter";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <ResponsiveCounter />
      </div>
    );
  }
}
export default App;
