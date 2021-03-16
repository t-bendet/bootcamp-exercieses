import React from "react";
import "./App.css";
import Spinner from "./Spinner";
const spinArray = ["colorfull ball", "circle", "ball"];

class App extends React.Component {
  state = {
    mySpinner: spinArray[Math.floor(Math.random() * spinArray.length)],
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        mySpinner: undefined,
      });
    }, 5000);
  }
  render() {
    return (
      <div className="container">
        <Spinner spinerType={this.state.mySpinner} />
      </div>
    );
  }
}
export default App;
