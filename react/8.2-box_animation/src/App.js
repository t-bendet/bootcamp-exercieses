import React from "react";
import "./App.css";
import Box from "./Box";

class App extends React.Component {
  state = { box: undefined };
  componentDidMount() {
    setTimeout(() => {
      this.setState((prevState, prevProp) => {
        return (prevState.box = (
          <div>
            <Box width="100px" height="100px" />
            <Box width="200px" height="150px" />
            <Box width="50px" height="50px" />
          </div>
        ));
      });
    }, 1000);
  }
  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ box: undefined });
    }, 4000);
  }
  render(props) {
    return <div className="container">{this.state.box}</div>;
  }
}
export default App;
