import React from "react";

function Home(props) {
  console.log(props);

  return <div>Home page, {props.hello}</div>;
}

export default Home;
