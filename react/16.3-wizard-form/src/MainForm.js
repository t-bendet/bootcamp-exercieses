import React from "react";
import Step from "./Step";
class MainForm extends React.Component {
  state = {
    forms: [
      { label: "email address", type: "email", value: "", step: 1 },
      { label: "username", type: "text", value: "", step: 2 },
      { label: "password", type: "password", value: "", step: 3 },
    ],
    current: 1,
  };
  onStepChange = (value, i) => {
    let test = JSON.stringify(this.state.forms);
    let test2 = JSON.parse(test);
    test2[i - 1].value = value;
    this.setState((prev) => {
      return (prev.forms = test2);
    });
  };
  next = () => {
    this.setState({ current: this.state.current + 1 });
  };
  back = () => {
    this.setState({ current: this.state.current - 1 });
  };
  submitForm = () => {
    alert(`
    email: ${this.state.forms[0].value}
    username: ${this.state.forms[1].value}
    password: ${this.state.forms[2].value}
    `);
  };
  //TODO add validation for inputs
  //TODO add clear value from one step to another
  render() {
    return (
      <div>
        <h1>React Wizard Form</h1>
        {
          <Step
            data={this.state.forms[this.state.current - 1]}
            onStepChange={this.onStepChange}
          />
        }
        {this.state.current > 1 && <button onClick={this.back}>back</button>}
        {this.state.forms.length > this.state.current && (
          <button onClick={this.next}>next</button>
        )}
        {this.state.current === this.state.forms.length && (
          <button onClick={this.submitForm}>submit</button>
        )}
      </div>
    );
  }
}

export default MainForm;
