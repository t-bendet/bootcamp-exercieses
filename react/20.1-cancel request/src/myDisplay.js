import React, { useState, useEffect } from "react";
import axios from "axios";

const MyDisplay = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://swapi.dev/api/people/", {
          cancelToken: source.token,
        });
        setData(data.results);
      } catch (e) {
        if (axios.isCancel(e)) {
          console.log(e.message);
        } else {
          console.log(e.message);
        }
      }
    };
    fetchData();
    return () => {
      source.cancel("cancelled by user");
    };
  }, []);
  const renderdData = data.map((x, i) => {
    return <div key={i}>{x.name}</div>;
  });
  return <div>{data.length && renderdData}</div>;
};

export default MyDisplay;
