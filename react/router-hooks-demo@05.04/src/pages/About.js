import React from "react";
import { useHistory } from "react-router-dom";

function About() {
  const { location, goBack, push, replace } = useHistory();

  return (
    <div>
      About Page location: {location.pathname}
      <button onClick={() => goBack()}>Go Back</button>
      <button onClick={() => replace("/")}>Go Home</button>
      <button onClick={() => push("/user/pini/hodadad")}>Go To Pini</button>
    </div>
  );
}

export default About;
