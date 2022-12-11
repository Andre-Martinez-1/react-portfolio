import React from 'react';
import ProfilePicture from "../../assets/background-imgs/Profile-pic.jpg"
import "../css/about.css";

export default function About() {
  return (
    <div>
      <div className="about-me" id="about">
      <div className="about-text">
      <h1 className='mb-3'>About</h1>
         <img src = {ProfilePicture} alt ="Andre profile" className="profile-pic"></img>
      <p>
        I am a graduate of the UCLA Extension Full-Stack Web Development Bootcamp.  
        I am seeking for opportunities to apply my skillset and grow further as a developer.
        Below are some examples of my work along with the technologies that I am familiar with. 
      </p>
      </div>
      </div>
    </div>
  );
}
