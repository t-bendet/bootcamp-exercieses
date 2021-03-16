import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "blue" });
    }, 1000);
  }
  componentDidUpdate() {
    const tal = document.querySelector("#tal");
    tal.innerText = `The updated favorite color is ${this.state.favoriteColor}`;
  }
  render() {
    return (
      <div className="container">
        <h1>{`my favorite color is ${this.state.favoriteColor}`}</h1>
        <div id="tal"></div>
      </div>
    );
  }
}

export default App;
