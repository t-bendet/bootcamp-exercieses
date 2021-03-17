import React from "react";
import "./App.css";
import Survey from "./Survey";
import Approve from "./Approve";
class App extends React.Component {
  state = { continue: false };
  onSearchSubmit = (formInfo) => {
    this.setState({ continue: true, ...formInfo });
  };
  backToForm = () => {
    this.setState({ continue: false });
  };

  render() {
    return (
      <div className="container">
        {!this.state.continue && <Survey onSubmit={this.onSearchSubmit} />}
        {this.state.continue && (
          <Approve form={this.state} onSubmit={this.backToForm} />
        )}
      </div>
    );
  }
}
export default App;
