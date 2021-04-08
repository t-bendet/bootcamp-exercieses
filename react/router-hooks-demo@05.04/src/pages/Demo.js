import React from "react";
import { useParams } from "react-router-dom";

function Demo(props) {
  console.log(props);
  const params = useParams();
  console.log(params);

  return <div>Demo</div>;
}

export default Demo;
