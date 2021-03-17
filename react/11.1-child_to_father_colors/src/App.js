import React from "react";
import "./App.css";
import CustomButton from "./CustomButton";

class App extends React.Component {
  state = { myColor: "" };
  logColor = (me) => {
    this.setState({ myColor: me });
  };
  render() {
    return (
      <div className="container">
        <div>
          <CustomButton onClick={this.logColor} name="yellow" />
          <CustomButton onClick={this.logColor} name="red" />
          <CustomButton onClick={this.logColor} name="blue" />
        </div>
        <div>
          <h1>the color selected is:{this.state.myColor} </h1>
        </div>
      </div>
    );
  }
}
export default App;
//
// <CustomButton name="blue" />
// <CustomButton name="red" />
