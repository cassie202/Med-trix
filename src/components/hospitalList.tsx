// src/components/HospitalList.tsx

import React from "react";
import { getAuth } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { hospitalList } from "../helpers/hospitalList";

// const exportToCsv = async () => {
//   const csvContent = "Name,Address,State\n" +
//   hospitalList.map(hospital => `${hospital.name},${hospital.address},${hospital.state}`).join("\n");

// // Create a Blob from the CSV content
// const blob = new Blob([csvContent], { type: 'text/csv' });

// // Create a reference to the CSV file in Firebase Storage

// const csvFileRef = ref(storage, 'hospital_list.csv');

// // Upload the Blob to Firebase Storage
// await uploadBytes(csvFileRef, blob);

// // Get the download URL of the uploaded file (optional)
// const downloadUrl = await getDownloadURL(csvFileRef);

// console.log('CSV file uploaded to Firebase Storage');
// console.log('Download URL:', downloadUrl);
// };

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
