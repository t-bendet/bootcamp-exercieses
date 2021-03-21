import React from "react";
import axios from "axios";
import "./App.css";
import Search from "./Search";
import Card from "./Card";

class App extends React.Component {
  state = { avatars: [], filterBy: "" };
  getAvatars = async () => {
    const test = await axios.get("https://randomuser.me/api/?results=50");
    this.setState({ avatars: test.data.results });
  };
  componentDidMount() {
    this.getAvatars();
  }
  getSearchWord = (e) => {
    this.setState({ filterBy: e });
  };
  tester = () => {
    let arr = this.state.avatars.filter((avi) => {
      return avi.name.first.includes(this.state.filterBy);
    });
    return arr;
  };
  render() {
    return (
      <div className="container">
        <Search onChange={this.getSearchWord} />
        {this.state.avatars.length && <Card list={this.tester()} />}
      </div>
    );
  }
}
export default App;
