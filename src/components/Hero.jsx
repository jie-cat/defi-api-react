import React from "react";
import "./Hero.scss";
import Crypto from "../assets/hero-img.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        {/* left */}
        <div className="left">
          <p>Buy & Sell Crypto 24/7 using your retirement account</p>
          <h1>Invest in Cryptocurreny with Your IRA</h1>
          <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
          <div className="input-container">
            <input type="text" placeholder="Enter your email" />
            <button className="btn">Learn More</button>
          </div>
        </div>
        {/* right */}
        <div className="right">
          <div className="img-container">
            <img src={Crypto} alt="hero-img.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
