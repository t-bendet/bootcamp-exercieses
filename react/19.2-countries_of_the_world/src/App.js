import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterdCountries, setFilterdCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const getCountries = async () => {
    const countriesArr = [];
    const response = await axios.get("https://restcountries.eu/rest/v2/all");
    const temp = response.data;
    for (let countrie of temp) {
      countriesArr.push(countrie.name);
    }
    setCountries(countriesArr);
    setFilterdCountries(countriesArr);
  };
  // runs onLoad
  useEffect(() => {
    getCountries();
  }, []);
  useEffect(() => {
    const temp = countries.filter((str) => {
      return str.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
    });
    setFilterdCountries(temp);
  }, [searchTerm]);
  const renderdList = filterdCountries.map((el, i) => {
    return <li key={i}>{el}</li>;
  });
  return (
    <div>
      <h1>App</h1>
      <form>
        <label>Search : </label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
      </form>
      <ul>{countries.length && renderdList}</ul>
    </div>
  );
};

export default App;
