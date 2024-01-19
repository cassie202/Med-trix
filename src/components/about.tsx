import React from "react";
import NavBar from "./nav";
import "./about.css";

export interface AboutPageProps {}

const AboutPage: React.FunctionComponent<AboutPageProps> = (props) => {
  return (
    <div className="about-main">
      <NavBar />
      <div className="about-container">
        <h1 className="about-heading">ABOUT MED-TRIX</h1>

        <p className="about-paragraph">
          At Med-trix, we take pleasure in finding the right doctors, hospitals,
          and care for you and your family. By making healthcare easier and more
          accesible, Med-trix empowers you to make decisions based on
          information, not just instinct. You can rest easy knowing you and your
          family are receiving standard, accesible care that's right for you.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
