import React from "react";
import "./Signup.scss";
import Crypto from "../assets/trade.png";

const Signup = () => {
  return (
    <div className="signup">
      <div className="container">
        {/* left */}
        <div className="left">
          <img src={Crypto} alt="trade.png" />
        </div>
        {/* right */}
        <div className="right">
          <h3>Earn passive income with crypto.</h3>
          <p>
            Earn up to 12% annual rewards on 30+ digital assets. Simply hold
            your assets in the app to automatically earn rewards at the end of
            each month with no lockups and no limits.
          </p>
          <div className="input-container">
            <input type="text" placeholder="Enter your email" />
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
