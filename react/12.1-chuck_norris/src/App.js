import React from "react";
import "./App.css";
import JokeBtns from "./JokeBtns";
import Joke from "./Joke";
class App extends React.Component {
  state = { categories: [], joke: "" };
  getJokes = async () => {
    const getCategories = await fetch(
      "https://api.chucknorris.io/jokes/categories"
    );
    const jokesCategories = await getCategories.json();
    this.setState({ categories: jokesCategories });
  };
  getCatJoke = async (cat) => {
    const getJokeByCat = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${cat}`
    );
    const joke = await getJokeByCat.json();
    this.setState({ joke: joke.value });
  };
  componentDidMount() {
    this.getJokes();
  }
  render() {
    return (
      <div className="container">
        <JokeBtns categories={this.state.categories} x={this.getCatJoke} />
        <Joke joke={this.state.joke} />
      </div>
    );
  }
}
export default App;
