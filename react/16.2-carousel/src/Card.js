import React from "react";

const Card = ({ data }) => {
  return (
    <div key={data.id}>
      <h1>{data.description}</h1>
      <h3>{data.alt_description}</h3>
      <div>
        <img src={data.urls.small} />
      </div>
    </div>
  );
};

export default Card;
