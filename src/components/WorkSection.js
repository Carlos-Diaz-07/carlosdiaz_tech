import React from "react";
import CardRight from "./CardRight";
import CardLeft from "./CardLeft";

const WorkSection = () => {
  return (
    <section className="work-section section" id="work-section">
      <h3 className="work-section-title section-title">Work</h3>
      <div className="section-title-line"></div>
      <CardRight />
      <CardLeft />
      <CardRight />
      <CardLeft />
    </section>
  );
};

export default WorkSection;
