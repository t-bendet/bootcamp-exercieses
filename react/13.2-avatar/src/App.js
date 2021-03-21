import React from "react";
import axios from "axios";
import "./App.css";



class App extends React.Component {
  state = { avatars: [] };
  getAvatars = async () => {
    const test = await axios.get("https://randomuser.me/api/?results=10");
    this.setState({ avatars: test.data.results });
  };
  componentDidMount() {
    this.getAvatars();
  }
  render() {
    return (
      <div className="container">
      </div>
    );
  }
}
export default App;
