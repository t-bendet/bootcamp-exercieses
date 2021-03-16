import React from "react";
import Content from "./components/Content.component";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: 0 };
  }
  setNewNumber = () => {
    this.setState((prevState) => {
      return { data: prevState.data + 1 };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.setNewNumber}>INCREMENT</button>
        <Content myNumber={this.state.data}></Content>
      </div>
    );
  }
}
export default App;
