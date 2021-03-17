import React from "react";
import "./CustomButton.css";

class CustomButton extends React.Component {
  whatsMyColor = () => {
    this.props.onClick(this.props.name);
  };
  render() {
    return (
      <button
        style={{ backgroundColor: this.props.name }}
        onClick={this.whatsMyColor}
      >
        {this.props.name}
      </button>
    );
  }
}

export default CustomButton;
