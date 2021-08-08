import React from "react";
import "../css/components/work-section.css";
import CardRight from "./CardRight";
import CardLeft from "./CardLeft";

const WorkSection = () => {
  return (
    <div className="work-section section" id="work-section">
      <h3 className="work-section-title section-title">Work</h3>
      <div className="section-title-line"></div>
      <CardRight />
      <CardLeft />
      <CardRight />
      <CardLeft />
    </div>
  );
};

export default WorkSection;
