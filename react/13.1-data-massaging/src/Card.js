import React from "react";
import "./Card.css";

const Card = (props) => {
  const oldList = props.list.map(({ name, birthday, favoriteFoods }) => {
    return (
      <div className="person">
        <h1>{name}</h1>
        <p>birthday : {birthday}</p>
        <h3>favorite meats</h3>
        {favoriteFoods.meats.map((x) => {
          return <p>{x}</p>;
        })}
        <h3>favorite fish</h3>
        {favoriteFoods.fish.map((z) => {
          return <p>{z}</p>;
        })}
      </div>
    );
  });
  return <div className="card-con">{oldList}</div>;
};

export default Card;
