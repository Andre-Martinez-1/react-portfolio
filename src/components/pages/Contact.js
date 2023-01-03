import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import LosAngeles2 from "../../assets/background-imgs/IMG_5545-2.jpg"
import "../css/contact.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setstatus] = useState("");

  const handleInputChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    } else {
      setMessage(event.target.value);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // checking to see if all input fields are full
    if (email && name && message) {
      // checking to make sure email is valid
      if (checkEmail(email)) {
        const encodedSubject = "Email From Portfolio";
        const encodedBody = `${message} - from ${name} ${email}`;

        // hyper link to open mail client and populate subject and body --- still working on this
        const link = `mailto:andre_martinez15@yahoo.com?subject=${encodedSubject}&body=${encodedBody}`;

        window.location = link;
      } else {
        setstatus("email is invalid");
      }
    } else {
      setstatus("all input fields need to be filled ");
    }
  };

  const checkEmail = (email) => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


  return (
    <Parallax className="contact-background" bgImage={LosAngeles2} bgImageAlt="Another Image of Los Angeles" strength={800}>
    <div className="contact-content" id="contact">
        <div className="contact-text">
          <h1 className="text-center">Contact Me</h1>

          <form className="px-5 py-1 text-center">
            <div className="form-group ">
              <label for="name" className="py-1 ">
                Name
              </label>
              <input
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="name"
                class="form-control"
              />
            </div>

            <div className="form-group">
              <label for="email" className="py-1 ">
                Email address
              </label>
              <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="email"
                class="form-control"
              />
            </div>

            <div className="form-group">
              <label for="message" className="py-1 ">
                Message
              </label>
              <textarea
                value={message}
                name="message"
                onChange={handleInputChange}
                type="text"
                placeholder="message"
                class="form-control"
                rows="3"
              />
            </div>

            <button
              type="submit"
              onClick={handleFormSubmit}
              class="btn btn-primary w-75 mt-3"
            >
              Submit
            </button>
          </form>

          <p>{status}</p>

          <p className="text-center"><i class="fa-solid fa-envelope"></i> Email: andre_martinez15@yahoo.com</p>
          <p className="text-center"> <i class="fa-solid fa-location-dot"></i> Los Angeles, CA</p>
          <p className="text-center"> Want to know more?</p>
          <p>Link to my RESUME on the icon below!</p>
          <p className="text-center"><a href="https://drive.google.com/uc?export=download&id=100PNuBNtVY0up5IQuhx5vpFM4t8APT7i" className="text-center"><i class="fa-solid fa-file"></i>RESUME</a></p>


        </div>
      </div>
    </Parallax>
  );
}


