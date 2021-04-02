import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Search from "./Search";
import Card from "./Card";

const App = () => {
  const [avatars, setAvatars] = useState([]);
  const [filterBy, setFilterBy] = useState("");
  const getAvatars = async () => {
    const test = await axios.get("https://randomuser.me/api/?results=50");
    setAvatars(test.data.results);
  };
  useEffect(() => {
    getAvatars();
  }, []);
  const getSearchWord = (e) => {
    setFilterBy(e);
  };
  const tester = () => {
    let arr = avatars.filter((avi) => {
      return avi.name.first.includes(filterBy);
    });
    return arr;
  };
  return (
    <div className="container">
      <Search onChange={getSearchWord} />
      {avatars.length && <Card list={tester()} />}
    </div>
  );
};

export default App;
