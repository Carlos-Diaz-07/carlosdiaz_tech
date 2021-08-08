import React from "react";
import "../css/components/contact-section.css";

const ContactSection = () => {
  return (
    <div className="contact-section section" id="contact-section">
      <h3 className="contact-section-title section-title">Contact Me</h3>
      <div className="section-title-line"></div>
      <p>
        alotof words all here, chlling out again and again alotof words all
        here, chlling out again and again alotof words all here, chlling out
        again and againalotof words all here, chlling out again and again alotof
        words all here, chlling out again and
      </p>
      <p>
        again alotof words all here, chlling out again and again alotof words
        all here, chlling out again and again alotof words all here, chlling out
        again and againalotof words all here, chlling out again and again alotof
        words all here, chlling out again and again
      </p>
      <a
        className="contact-btn btn"
        href="mailto:diazmelian.carlos@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <p className="btn-text">Get in Touch</p>
      </a>
    </div>
  );
};

export default ContactSection;
