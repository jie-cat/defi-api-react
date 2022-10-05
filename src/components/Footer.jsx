import React from "react";
import "./Footer.scss";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <h1 className="col-1">
          De<span className="primary">fi</span>
        </h1>
        <div className="col">
          <h5>Support</h5>
          <span className="bar"></span>
          <a href="/">Contact Us</a>
          <a href="/">Chat</a>
          <a href="/">Help Center</a>
          <a href="/">FAQ</a>
        </div>
        <div className="col">
          <h5>Developers</h5>
          <span className="bar"></span>
          <a href="/">Cloud</a>
          <a href="/">Commerce</a>
          <a href="/">Pro</a>
          <a href="/">API</a>
        </div>
        <div className="col">
          <h5>Company</h5>
          <span className="bar"></span>
          <a href="/">About</a>
          <a href="/">Information</a>
          <a href="/">Legal</a>
          <a href="/">Privacy</a>
        </div>
        <div className="col">
          <h5>Social</h5>
          <span className="bar"></span>
          <a href="/">
            <FaFacebook size={20} className="icon" />
            Facebook
          </a>
          <a href="/">
            <FaTwitter size={20} className="icon" />
            Twitter
          </a>
          <a href="/">
            <FaLinkedin size={20} className="icon" />
            Linkedin
          </a>

          <a href="/">
            <FaGithub size={20} className="icon" />
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
