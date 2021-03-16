import React from "react";
import "./MusicAlbum.css";

const MusicAlbum = (props) => {
  return (
    <div className="music-box">
      <h1>{props.name}</h1>
      <h2>by : {props.artist}</h2>
      <p>number of songs: {props.numOfSongs}</p>
      <p>length: {props.albumLength}</p>
      <a href={props.link}>wikiLink: {props.linkDescription}</a>
    </div>
  );
};

MusicAlbum.defaultProps = {
  name: "סימנים של חולשה",
  artist: "ברי סחרוף",
  numOfSongs: "13",
  albumLength: "62:15",
  link:
    "https://he.wikipedia.org/wiki/%D7%A1%D7%99%D7%9E%D7%A0%D7%99%D7%9D_%D7%A9%D7%9C_%D7%97%D7%95%D7%9C%D7%A9%D7%94",
  linkDescription: "סימנים של חולשה",
};
export default MusicAlbum;
