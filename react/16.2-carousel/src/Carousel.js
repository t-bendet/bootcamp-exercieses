import { Component } from "react";
import Card from "./Card";
import Unsplash from "./apis/Unsplash";

class Carousel extends Component {
  // config image theme
  state = { images: [], imageTheme: "skydive" };
  loadImages = async (theme) => {
    const response = await Unsplash.get("/search/photos", {
      params: { query: theme },
    });
    this.setState({ images: response.data.results });
  };
  componentDidMount() {
    this.loadImages(this.state.imageTheme);
  }
  render() {
    return (
      <div>
        {this.state.images.length && <Card data={this.state.images[0]} />}
      </div>
    );
  }
}

export default Carousel;
