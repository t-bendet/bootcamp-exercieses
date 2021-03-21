import React from "react";
import "./Search.css";
class Search extends React.Component {
  render() {
    return (
      <div className="bar">
        <input
          type="text"
          onChange={(e) => this.props.onChange(e.target.value)}
        />
      </div>
    );
  }
}

export default Search;
