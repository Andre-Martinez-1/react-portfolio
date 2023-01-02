import React from 'react';
import ProfilePicture from "../../assets/background-imgs/Profile-pic.jpg"
import "../css/about.css";

export default function About() {
  return (
    <div>
      <div className="about-me" id="about">
      <div className="about-text">
      <h1 className='title-mb-3'>About</h1>
         <img src = {ProfilePicture} alt ="Andre profile" className="profile-pic"></img>
         <div>
      <p>
        I am a graduate of the UCLA Extension Full-Stack Web Development Bootcamp.  
        I am seeking for opportunities to apply my skillset and grow further as a developer.
        Below are some examples of my work along with the technologies that I am familiar with.
        <br></br>
        <br></br>
        If you would like to learn more of my professional work and education 
        experience you can click on the link below!
        
        </p>
        <p className="text-center"><a href="https://drive.google.com/uc?export=download&id=1btb7321UwB3Kzgn_6Q_xtEf3OUJUX29dAe2NqAWNtpU" className="text-center"><i class="fa-solid fa-file"></i>RESUME</a></p>
        </div>
      </div>
      </div>
    </div>
  );
}
