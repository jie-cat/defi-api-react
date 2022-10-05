import React, { useState } from "react";
import "./Navbar.scss";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  let [nav, setNav] = useState(false);

  let clickHandle = () => {
    setNav(!nav);
  };

  return (
    <div className="header">
      <div className="container">
        <h1>
          De<span className="primary">fi</span>
        </h1>

        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="">Featured</a>
          </li>
          <li>
            <a href="">Earn</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <div className="btn-group">
          <button className="btn">Connect Wallet</button>
        </div>
        <div onClick={clickHandle} className="hamburger">
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
