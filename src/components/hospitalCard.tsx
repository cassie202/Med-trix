// HospitalCard.tsx
import React from "react";
import "./hospitalCard.css";
import { Link } from "react-router-dom";
import "./findCare.css";

interface Hospital {
  name: string;
  state: string;
  address: string;
}

interface HospitalCardProps {
  hospital: Hospital;
}

const HospitalCard: React.FC<HospitalCardProps> = ({ hospital }) => {
  return (
    <div className="hospital-card">
      <h2 className="hospital-name">{hospital.name}</h2>
      <p>{hospital.address}</p>
      <p className="hospital-state">{hospital.state} State.</p>
      <div>
        {/* Link only on the "View" button */}
        <Link
          to={`/hospital/${hospital.name.toLowerCase()}`}
          className="view-hospital-link"
        >
          <div className="view-hospital">View</div>
        </Link>
      </div>
    </div>
  );
};

export default HospitalCard;
