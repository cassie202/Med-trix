// src/components/HospitalList.tsx

import React from "react";
import { getAuth } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { hospitalList } from "../helpers/hospitalList";


const HospitalListPage: React.FC = () => {
  return (
    <div>
      <h1>Hospital List</h1>
      {/* <button onClick={exportToCsv}>Export to CSV</button> */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {hospitalList.map((hospital, index) => (
            <tr key={index}>
              <td>{hospital.name}</td>
              <td>{hospital.address}</td>
              <td>{hospital.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default HospitalListPage;
