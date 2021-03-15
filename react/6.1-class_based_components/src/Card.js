import React from "react";
import "./card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <div className="image-container">
          <img alt="oops" src={this.props.image}></img>
        </div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.description}</h3>
        <div className="links">
          <a href={this.props.link1}>{this.props.linkDescription1}</a>
          <a href={this.props.link2}>{this.props.linkDescription2}</a>
        </div>
      </div>
    );
  }
}

export default Card;
