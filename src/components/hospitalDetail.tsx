import React from "react";
import { useParams } from "react-router-dom";
import { hospitalList } from "../helpers/hospitalList";
import "./hospitalDetail.css";
import NavBar from "./nav";
import { Link } from "react-router-dom";
import "./home.css";
import arrowImg from "../assets/arrow-back.png";

const HospitalDetails: React.FC = () => {
  const { hospitalName } = useParams<{ hospitalName?: string }>();
  const normalizedHospitalName = hospitalName ? hospitalName.toLowerCase() : "";

  const hospital = hospitalList.find(
    (h) => h.name.toLowerCase() === normalizedHospitalName
  );

  if (!hospital) {
    return <div>Hospital not found</div>;
  }

  return (
    <div>
      <NavBar />
      <div className="hospital-detail-container">
        <Link to="/findcare">
          <img src={arrowImg} className="arrow-back-img" />
        </Link>
        <div className="hospital-detail-img">
          <img
            src="https://media.istockphoto.com/id/995338570/photo/in-the-hospital-lobby-young-couple-patients-talks-to-receptionist-new-modern-medical-facility.jpg?s=612x612&w=0&k=20&c=ND2T7I7itEhR01a3h65MO3xVwHDFikX79hEO3MQrIJ0="
            alt="receptionist-img"
          />
        </div>

        <div className="hospital-detail-info">
          <h2>{hospital.name}</h2>
          <p>{hospital.address}</p>
          <p>{hospital.state} State</p>
        </div>
      </div>
      <div className="care-finder">
        <div>
          <h3 className="contact-us-footer">Contact Us</h3>
          <p>Plot 42, Akinza Street, Victoria island, Lagos +2349167351788</p>
        </div>

        <div>
          <h3 className="about-us-footer">About Us</h3>
          <p>News & Media Contact Us</p>
        </div>

        <div>
          <h3 className="quick-details-footer">Quick Links</h3>
          <p> My account Book an appointment Library</p>
        </div>
      </div>
    </div>
  );
};

export default HospitalDetails;
