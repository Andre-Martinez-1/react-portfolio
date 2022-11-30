import React from "react";
import "./css/nav.css";
import Nav from "react-bootstrap/Nav";
// import lettera from "../assets/background-imgs/Alphabet-A-PNG-Photos.png"

function NavTabs() {
  return (
    <div className="">
      {/* <div className="top-nav"> 
      <img
              src={lettera}
              alt="Letter A symbol"
              className="nav-symbol "
            ></img>
      </div> */}

      <div className="side-nav"> <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="#home" className="mt-2 nav-home">
          Home
          <i class="fa-solid fa-house-chimney fa-2x nav-i"></i>
        </Nav.Link>

        <Nav.Link href="#about" className="nav-about">
          About
          <i class="fa-solid fa-user-tie fa-2x nav-i"></i>
        </Nav.Link>

        <Nav.Link href="#resume" className="nav-skill">
          Skills
          <i class="fa-solid fa-list fa-2x nav-i"></i>
        </Nav.Link>

        <Nav.Link href="#portfolio" className="nav-port">
          Projects
          <i class="fa-solid fa-table-cells fa-2x nav-i"></i>
        </Nav.Link>

        <Nav.Link href="#contact" className="nav-contact-me">
          Contact
          <i class="fa-solid fa-envelope fa-2x nav-i"></i>
        </Nav.Link>
      </Nav> </div>
       
    </div> 
  );
}



export default NavTabs;
