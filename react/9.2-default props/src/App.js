import React from "react";
import "./App.css";
import MusicAlbum from "./MusicAlbum";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <MusicAlbum
          name="Texas Flood"
          artist="Stevie Ray Vaughan"
          numOfSongs="10"
          albumLength="	38:48"
          link="https://en.wikipedia.org/wiki/Texas_Flood"
          linkDescription="Texas Flood"
        />
        <MusicAlbum
          name="Euphoria Morning"
          artist="chris cornell"
          numOfSongs="12"
          albumLength="50:55"
          link="https://en.wikipedia.org/wiki/Euphoria_Morning"
          linkDescription="Euphoria Morning"
        />
        <MusicAlbum
          artist="אביתר בנאי"
          numOfSongs="13"
          link="https://he.wikipedia.org/wiki/%D7%90%D7%91%D7%99%D7%AA%D7%A8_%D7%91%D7%A0%D7%90%D7%99_(%D7%90%D7%9C%D7%91%D7%95%D7%9D)"
          linkDescription="אביתר בנאי"
        />
        <MusicAlbum />
      </div>
    );
  }
}
export default App;
