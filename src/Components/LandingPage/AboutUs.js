import React from "react";
import image from "./images/aboutimg.png";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h1 className="page-heading about-heading">About Us</h1>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            Our mission is to make quality healthcare accessible to everyone, regardless of location. 
            We strive to provide a seamless and secure platform where patients can receive expert medical consultations without the need for travel or long waiting times.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;