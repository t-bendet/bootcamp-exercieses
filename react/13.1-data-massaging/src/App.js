import React from "react";
import "./App.css";
import Data from "./Data";
import Name from "./Name";
import Card from "./Card";
class App extends React.Component {
  state = { data: Data };
  getNames = () => {
    let nameArr = this.state.data.map((person) => {
      return person.name;
    });
    return nameArr;
  };
  getBornBefore = () => {
    let beforeArr = this.state.data.filter((person) => {
      let birthday = person.birthday.split("-");
      return birthday[2] < 1991;
    });
    return beforeArr;
  };
  render() {
    return (
      <div className="container">
        <Name names={this.getNames()} />
        <Card list={this.getBornBefore()} />
      </div>
    );
  }
}
export default App;
