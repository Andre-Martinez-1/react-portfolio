import React from "react";
//import "./css/nav.css";
import Nav from "react-bootstrap/Nav";

function NavTabs() {
  return (
    <div className="side-nav">
       <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="#home" className="mt-2 nav-home">
          Home
          <i class="fa-solid fa-house fa-2x nav-i"></i>
        </Nav.Link>

        <Nav.Link href="#portfolio" className="nav-port">
          Projects
          <i class="fa-solid fa-table-cells fa-2x nav-i"></i>
        </Nav.Link>

        <Nav.Link href="#about" className="nav-about">
          About
          <i class="fa-solid fa-user fa-2x nav-i"></i>
        </Nav.Link>

        <Nav.Link href="#resume" className="nav-skill">
          Skills
          <i class="fa-solid fa-file-lines fa-2x nav-i"></i>
        </Nav.Link>

        <Nav.Link href="#contact" className="nav-contact-me">
          Contact
          <i class="fa-solid fa-envelope fa-2x nav-i"></i>
        </Nav.Link>
      </Nav> 
    </div> 
  );
}



export default NavTabs;
