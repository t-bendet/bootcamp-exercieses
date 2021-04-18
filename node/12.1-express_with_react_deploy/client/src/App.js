import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:9000/api/movies");
      setData(response.data);
    };
    getData();
  }, []);
  const renderCards = data.map((movie, i) => {
    return <Card movie={movie} key={i} />;
  });
  return <div>{data.length && renderCards}</div>;
};

export default App;
