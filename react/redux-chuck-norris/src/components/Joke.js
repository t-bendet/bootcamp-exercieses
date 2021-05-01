import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getJoke } from "../actions";

const Joke = (props) => {
  useEffect(() => {
    const test = async () => {
      const x = props.getJoke();
      console.log(x);
    };
    test();
  }, []);
  return (
    <div>
      <h1>Joke</h1>
    </div>
  );
};

export default connect(null, {
  getJoke,
})(Joke);
