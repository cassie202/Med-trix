import React from "react";
import NavBar from "./nav";
import { Link } from "react-router-dom";
import "./howItWorks.css";

export interface HowItWorksProps {}

const HowItWorks: React.FunctionComponent<HowItWorksProps> = (props) => {
  return (
    <div>
      <NavBar />

      <h2 className="how-it-works-title">How it works</h2>
      <div className="how-it-works">
        <Link to="/findCare" className="how-it-works-find-hospital-container">
          <div className="how-it-works-find-hospital-container">
            <img
              className="how-it-works-image"
              src="https://media.istockphoto.com/id/1425798958/photo/photo-of-confident-female-doctor-in-hospital-looking-at-camera-with-smile.jpg?s=612x612&w=0&k=20&c=i91idG544pXuYkw5ju6iIzm1m-lEqQaygeOOrjG5GEk="
              alt="a doctor"
            />
            <h4 className="how-it-works-find-hospital-title">Find Hospital</h4>
            <p className="how-it-works-find-hospital-paragraph">
              Find the best hospitals and doctors near you, our efficient search
              engine provides you with the best results.
            </p>
          </div>
        </Link>

        <div className="save-hospital-container">
          <img
            className="save-hospital-image"
            src="https://media.istockphoto.com/id/490246550/photo/touching-smart-phone.jpg?s=612x612&w=0&k=20&c=QuzVjGI0OL41RMHdkMRs6B2ZwAarOsOZo3b3d06vkW4="
            alt="a telephone being pressed"
          />
          <h4 className="save-hospital-title">Save or share Hospital</h4>
          <p className="save-hospital-paragraph">
            Carefinder allows users to save and share the list of hospitals with
            others. Users can share the information via email or by generating a
            shareable link.
          </p>
        </div>

        <div className="book-hospital-container">
          <img
            className="save-hospital-image"
            src="https://media.istockphoto.com/id/636897342/photo/hispanic-business-women-on-phone-walking-in-a-rush.jpg?s=612x612&w=0&k=20&c=z2K4XpI4gzuVUr83FECJXR9Jz7oiqsAgwUbtdx_iH4U="
            alt="a telephone being pressed"
          />
          <h4 className="save-hospital-title">Book Appointment</h4>
          <p className="save-hospital-paragraph">
            Book appointments easily by inputting correct details
          </p>
        </div>

        <div className="visit-hospital-container">
          <img
            className="how-it-works-image"
            src="https://media.istockphoto.com/id/1400053534/photo/young-patient-in-a-consult-with-his-doctor-african-american-doctor-showing-a-patient-their.jpg?s=612x612&w=0&k=20&c=rOkv0N_1p-_q7Hz3TDLfzx11CIjHQpGIai93OH_tztw="
            alt="a telephone being pressed"
          />
          <h4 className="save-hospital-title">Make a visit</h4>
          <p className="save-hospital-paragraph">
            Appointment confirmed, then make a visit to your selected hospital
            or doctor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
