import React from "react";

class Step extends React.Component {
  state = { val: "" };
  onStepChange = (newVal) => {
    this.setState({ val: newVal }, () => {
      this.props.onStepChange(this.state.val, this.props.data.step);
    });
  };

  render() {
    return (
      <form>
        <h2>step {this.props.data.step}</h2>
        <h2>{this.props.data.label}</h2>
        <label></label>
        <input
          placeholder={`enter ${this.props.data.label}`}
          value={this.state.val}
          onChange={(e) => {
            this.onStepChange(e.target.value);
          }}
          type={this.props.data.type}
        ></input>
      </form>
    );
  }
}

export default Step;
