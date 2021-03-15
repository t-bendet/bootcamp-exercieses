import React from "react";
import "./counter.css";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementFunction() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div className="box">
        <button onClick={this.incrementFunction.bind(this)}>increment</button>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}
export default Counter;
