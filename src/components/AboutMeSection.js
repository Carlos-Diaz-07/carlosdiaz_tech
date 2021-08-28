import React from "react";
import smallCarlos from "../img/small-carlos.png"

const AboutMeSection = () => {
  return (
    <section className="about-me-section section" id="about-me-section">
      <h3 className="about-me-section-title section-title">About Me</h3>
      <div className="section-title-line"></div>
      <p>
        alotof words all here, chlling out again and again alotof words all
        here, chlling out again and again alotof words all here, chlling out
        again and againalotof words all here, chlling out again and again alotof
        words all here, chlling out again and again alotof words all here,
        chlling out again and again alotof words all here, chlling out again and
        again alotof words all here, chlling out again and againalotof words all
        here, chlling out again and again alotof words all here, chlling out
        again and again alotof words all here, chlling out again and again
        alotof words all here, chlling out again and again alotof words all
        here, chlling out again and againalotof words all here, chlling out
        again and again alotof words all here, chlling out again and again Some
        Technologies that I use: Javascript React Gatsby NodeJs
      </p>
      <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Gatsby</li>
          <li>NodeJs</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Gatsby</li>
          <li>NodeJs</li>
      </ul>
      <img src={smallCarlos} alt="" className="small-carlos"/>
    </section>
  );
};

export default AboutMeSection;
