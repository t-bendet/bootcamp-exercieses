import { Component } from "react";
import { Link } from "react-router-dom";
import StoreData from "../store";

class Products extends Component {
  state = { data: [] };
  componentDidMount() {
    this.setState({ data: StoreData });
  }
  createLinks = () => {
    const linkList = this.state.data.map(({ id, title }) => {
      return (
        <Link
          to={`${this.props.location.pathname}/${id}`}
          className="item"
          key={id}
        >
          {title}
        </Link>
      );
    });
    return linkList;
  };
  render() {
    return (
      <div className="ui menu">
        {this.state.data.length && this.createLinks()}
      </div>
    );
  }
}

export default Products;
