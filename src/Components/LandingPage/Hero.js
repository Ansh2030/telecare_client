import React from "react";
import image from "./images/heroimg.png";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
        Telecare: Your Health <br/> Your Home, Your Way

        </h1>
        <p>
        Telecare connects patients with experienced doctors through one-on-one online appointments, ensuring personalized and attentive care without the need for travel.
        
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;