import React from 'react';
import { Parallax } from 'react-parallax';
import Swingers from "../../assets/background-imgs/IMG_4939.jpg"
import "../css/portfolio.css";
import artist from "../../assets/project-imgs/artist-locator.png"
import fullchat from "../../assets/project-imgs/fullchat2.png"
import pokemon from "../../assets/project-imgs/i-choose-you.png"

export default function Portfolio(){
  return(
<Parallax className="projects-background" bgImage={Swingers} bgImageAlt="Image of Andre Martinez walking in front of Swingers Diner" strength={800}>

  <div>
  <div className="portfolio-details" id="portfolio">
    <h1>Projects</h1>
  </div>
  </div>

<div class="row row-cols-1 row-cols-md-3">
  <div class="col mb-4">
    <div class="card h-100">
      <img src={artist} class="card-img-top" alt="artist locator website"></img>
      <div class="card-body">
        <h5 class="card-title">The Artist Locator</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="https://jonathan-lee8.github.io/the-rockstars/" class="card-link"><i class="fa-solid fa-xl fa-link"></i></a>
        <a href="https://github.com/jonathan-lee8/the-rockstars" class="card-link"><i class="fa-brands fa-xl fa-github"></i></a>
        
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100">
      <img src={fullchat} class="card-img-top" alt="fullchat website"></img>
      <div class="card-body">
        <h5 class="card-title">Fullchat</h5>
        <p class="card-text">This is a short card.</p>
        <a href="https://stormy-basin-09335.herokuapp.com/login" class="card-link"><i class="fa-solid fa-xl fa-link"></i></a>
        <a href="https://github.com/Sam-T-G/FullChat" class="card-link"><i class="fa-brands fa-xl fa-github"></i></a>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100">
      <img src={pokemon} class="card-img-top" alt="i choose you website"></img>
      <div class="card-body">
        <h5 class="card-title">I Choose You</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <a href="https://ichooseyou.herokuapp.com/" class="card-link"><i class="fa-solid fa-xl fa-link"></i></a>
        <a href="https://github.com/a-riveragonzalez/i-choose-you" class="card-link"><i class="fa-brands fa-xl fa-github"></i></a>
      </div>
    </div>
  </div>
</div>
</Parallax>
  );
}