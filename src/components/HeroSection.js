import React from "react";
import "../css/components/hero-section.css";

const HeroSection = () => {
  return (
    <div className="hero-section section">
      <h3>Hi, my name is</h3>
      <h1>Carlos Diaz.</h1>
      <h2>I build things for the web.</h2>
      <p>
        alotof words all here, chlling out again and again alotof words all
        here, chlling out again and again alotof words all here, chlling out
        again and againalotof words all here, chlling out again and again alotof
        words all here, chlling out again and again
      </p>
      <a
        className="hero-btn btn"
        href="mailto:diazmelian.carlos@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <p className="btn-text">Get in Touch</p>
      </a>
    </div>
  );
};
export default HeroSection;
