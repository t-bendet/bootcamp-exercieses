import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [query, setQuery] = useState("hooks");
  const [searchResults, setSearchResults] = useState([]);
  const getLinks = async () => {
    const response = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${query}`
    );
    setSearchResults(response.data.hits);
  };
  useEffect(() => {
    getLinks();
  }, []);
  const search = (e) => {
    e.preventDefault();
    getLinks();
  };
  const renderdLinks = searchResults.map((link, i) => {
    return (
      <p key={i}>
        <a href={link.url}>{link.title}</a>
      </p>
    );
  });
  return (
    <div>
      <h1>Algolia search</h1>
      <form onSubmit={search}>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        ></input>
        <button type="submit">Search</button>
      </form>
      {searchResults.length ? renderdLinks : <h1>Loading</h1>}
    </div>
  );
};

export default App;
