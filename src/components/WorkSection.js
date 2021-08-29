import React from "react";
import CardRight from "./CardRight";
import CardLeft from "./CardLeft";
import Card from "./Card";
import card4Img from "../img/app-img.jpg";

const WorkSection = () => {
  return (
    <section className="work-section section" id="work-section">
      <h3 className="work-section-title section-title">Work</h3>
      <div className="section-title-line"></div>
      <Card
        side="right"
        title="new card"
        text="asdasdasdasd asd asd asddsa a asd a add weda adsf af ad cxva seaf ahgr cdva fdg rgar afdg adfgsdhth yhjsfga agh drga\g rg gf gs asddsa a asd a add weda adsf af ad cxva seaf ahgr cdva fdg rgar afdg adfgsdhth yhjsfga agh drga\g rg gf gs"
        image={card4Img}
      />
      <Card
        side="left"
        title="new card"
        text="asdasdasdasd asd asd asddsa a asd a add weda adsf af ad cxva seaf ahgr cdva fdg rgar afdg adfgsdhth yhjsfga agh drga\g rg gf gs asddsa a asd a add weda adsf af ad cxva seaf ahgr cdva fdg rgar afdg adfgsdhth yhjsfga agh drga\g rg gf gs"
        image={card4Img}
      />
      <Card
        side="right"
        title="new card"
        text="asdasdasdasd asd asd asddsa a asd a add weda adsf af ad cxva seaf ahgr cdva fdg rgar afdg adfgsdhth yhjsfga agh drga\g rg gf gs asddsa a asd a add weda adsf af ad cxva seaf ahgr cdva fdg rgar afdg adfgsdhth yhjsfga agh drga\g rg gf gs"
        image={card4Img}
      />
      <Card
        side="left"
        title="new card"
        text="asdasdasdasd asd asd asddsa a asd a add weda adsf af ad cxva seaf ahgr cdva fdg rgar afdg adfgsdhth yhjsfga agh drga\g rg gf gs asddsa a asd a add weda adsf af ad cxva seaf ahgr cdva fdg rgar afdg adfgsdhth yhjsfga agh drga\g rg gf gs"
        image={card4Img}
      />
    </section>
  );
};

export default WorkSection;
