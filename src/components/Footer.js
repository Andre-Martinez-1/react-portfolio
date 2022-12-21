import React from "react";
import "./css/footer.css";

export default function Footer() {
  return (
    <div className="footer d-flex justify-content-center pt-2">
      <a
        href="https://github.com/Spider-Man616"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3"
      >
        <i className="fa-brands fa-github fa-2xl custom-icon"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/andre-martinez-8402bb192/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3"
      >
        <i className="fa-brands fa-linkedin fa-2xl custom-icon"></i>
      </a>
    </div>
  );
}