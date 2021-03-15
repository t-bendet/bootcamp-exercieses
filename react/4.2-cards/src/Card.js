import React from "react";
import "./card.css";
const Card = (props) => {
  return (
    <div className="card">
      <div className="image-container">
        <img alt="oops" src={props.image}></img>
      </div>
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
      <div className="links">
        <a href={props.link1}>{props.linkDescription1}</a>
        <a href={props.link2}>{props.linkDescription2}</a>
      </div>
    </div>
  );
};

export default Card;
