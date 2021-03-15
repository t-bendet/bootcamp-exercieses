import React from "react";
import "./hide.css";
class Hide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }
  hideFunction(e) {
    if (this.state.visible) {
      this.setState({ visible: false });
      e.target.nextElementSibling.classList.toggle("color-box");
    } else {
      this.setState({ visible: true });
      e.target.nextElementSibling.classList.toggle("color-box");
    }
    //     e.target.nextElementSibling.classList.toggle("color-box") would work by it's own
  }
  render() {
    return (
      <div className="box">
        <button onClick={this.hideFunction.bind(this)}>show/hide</button>
        <div className="color-box"></div>
      </div>
    );
  }
}
export default Hide;
