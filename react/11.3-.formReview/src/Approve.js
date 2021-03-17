import React from "react";
import "./Survey.css";

class Approve extends React.Component {
  submitME() {
    alert("thank you and have a good day");
  }
  dontSubmitME = (event) => {
    this.props.onSubmit(this);
  };

  render() {
    return (
      <div className="box">
        <h3>first name : {this.props.form.first}</h3>
        <h3>last name : {this.props.form.last}</h3>
        <h3>age : {this.props.form.select}</h3>
        <p>free text : {this.props.form.text}</p>
        <div>
          <button onClick={this.dontSubmitME}>back</button>
          <button onClick={this.submitME}>send survay</button>
        </div>
      </div>
    );
  }
}

export default Approve;
