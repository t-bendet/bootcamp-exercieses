import { Component } from "react";
import StoreData from "../store";
import Card from "./Card";

class ProductDetail extends Component {
  state = { product: null };
  componentDidMount() {
    const id = Number(this.props.match.params.id);
    const findProduct = StoreData.find((item) => {
      return item.id === id;
    });
    this.setState({ product: findProduct });
  }
  render() {
    return (
      <div>{this.state.product && <Card data={this.state.product} />}</div>
    );
  }
}

export default ProductDetail;
