import React from "react";
import "./Card.css";

const Card = (props) => {
  const avatarsList = props.list.map((obj) => {
    return (
      <div className="card">
        <h3>{obj.name.first}</h3>
        <img alt="" src={obj.picture.medium}></img>
      </div>
    );
  });
  return <div className="card-con">{avatarsList}</div>;
};

export default Card;
