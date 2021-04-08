import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";
function User(props) {
  const { first, last } = useParams();
  const match = useRouteMatch("/user/pini/hodadad");
  //console.log(match);
  console.log(props);

  return (
    <div>
      User Page: {first}, {last}
      {match && <button>Call For Help</button>}
    </div>
  );
}

export default User;
