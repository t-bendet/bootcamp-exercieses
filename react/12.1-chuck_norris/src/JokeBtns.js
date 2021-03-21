import React from "react";
import "./App.css";
class JokeBtns extends React.Component {
  jokeCategories = this.props.categories.map((cat, i) => {
    return (
      <button key={i} value={cat}>
        {cat}
      </button>
    );
  });
  render() {
    return (
      <div
        onClick={(e) => {
          this.props.x(e.target.value);
        }}
      >
        {this.jokeCategories}
      </div>
    );
  }
}

export default JokeBtns;
