import Playlist from "react-mp3-player";
import React, { Component } from "react";

const tracks = [
  {
    img: "https://i1.sndcdn.com/avatars-000607078605-vn2n3y-t500x500.jpg",
    name: "Track1",
    desc: "DJ Snake",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    img:
      "https://pbs.twimg.com/profile_images/1072149103243657222/8vFJPSCW.jpg",
    name: "Track 2",
    desc: "Alan Walker",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  }
];

const playlistOverideStylingOpts = {
  breakpoint: {
    maxWidth: 768
  },

  offset: {
    left: 980,
    top: 500,
    height: 170,
    width: 520
  }
};
export default class Sound extends Component {
  render() {
    return <Playlist tracks={tracks} opts={playlistOverideStylingOpts} />;
  }
}
