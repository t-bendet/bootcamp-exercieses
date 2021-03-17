import React from "react";
import "./App.css";
import CustomButton from "./CustomButton";

class App extends React.Component {
  state = { myColor: "" };
  colorsArr = ["red", "blue", "yellow"];
  logColor = (me) => {
    this.setState({ myColor: me });
  };
  render() {
    return (
      <div className="container">
        <div>
          {this.colorsArr.map((color) => (
            <CustomButton onClick={this.logColor} name={color} />
          ))}
        </div>
        <div>
          <h1>the color selected is: {this.state.myColor} </h1>
        </div>
      </div>
    );
  }
}
export default App;
