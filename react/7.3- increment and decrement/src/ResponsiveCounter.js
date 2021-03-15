import React from "react";
import "./ResposiveCounter.css";

class ResponsiveCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      color: null,
    };
  }
  incrementFunction() {
    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 });
    }
    if (this.state.count >= 0) {
      this.setState({ color: "green" });
    }
  }
  decrementFunction() {
    if (this.state.count > -10) {
      this.setState({ count: this.state.count - 1 });
    }
    if (this.state.count <= 0) {
      this.setState({ color: "red" });
    }
  }

  render() {
    return (
      <div className="box">
        <button onClick={this.incrementFunction.bind(this)}>increment</button>
        <button onClick={this.decrementFunction.bind(this)}>decrement</button>
        <h2 style={{ color: this.state.color }}>{this.state.count}</h2>
      </div>
    );
  }
}
export default ResponsiveCounter;
