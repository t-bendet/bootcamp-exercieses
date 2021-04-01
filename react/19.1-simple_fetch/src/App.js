import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [movieInfo, setMovieInfo] = useState(undefined);
  useEffect(() => {
    const startWars = async () => {
      const info = await axios.get("https://swapi.dev/api/films/3/");
      setMovieInfo(info);
    };
    startWars();
  }, []);
  return (
    <div>
      <h1>App</h1>
      <h2>{movieInfo && movieInfo.data.director}</h2>
      <h2>{movieInfo && movieInfo.data.title}</h2>
    </div>
  );
};
export default App;
