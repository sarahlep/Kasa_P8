import React from "react";
import Banner from "../../components/Banner";
import bannerImage from "../../assets/images/banner_2.png";
import Collapse from "../../components/Collapse.jsx";
import { collapseTextAPropos } from "../../data/CollapseTable.jsx";


const About = () => {
  return (
    <div className="about">
      <Banner
        image={bannerImage}
        alt="Une vallée entre de hautes grande montagnes enneigées"
      />
      {collapseTextAPropos.map((item, index) => (
        <Collapse key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default About;