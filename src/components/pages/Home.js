import React from 'react';
import "../css/home.css";
import { Parallax } from 'react-parallax';
import LosAngeles from "../../assets/background-imgs/IMG_5702.jpg"

export default function Home() {
  return (
      <Parallax className="home-background" bgImage={LosAngeles} bgImageAlt="Image of Los Angeles" strength={800}>
  
    <div className="home-details " id="home">
      <div className="home-text text-center">
        <h3>Hi, my name is </h3>
        <h1>Andre Martinez</h1>
        <h2>I am a Full-Stack Developer based in Los Angeles</h2>
      </div>
    </div>
    </Parallax>
  );
}
