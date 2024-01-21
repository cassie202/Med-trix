import React, { useState } from "react";
import NavBar from "./Nav";
import "./FindCare.css";
import HospitalCard from "./HospitalCard";
import { hospitalList } from "../helpers/hospitalList";

export interface FindCarePageProps {}

const hospitalsPerPage = 10;

const FindCarePage: React.FC<FindCarePageProps> = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    setCurrentPage(0);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const startIndex = currentPage * hospitalsPerPage;
  const endIndex = startIndex + hospitalsPerPage;
  const filteredHospitals = hospitalList
    .filter((hospital) =>
      hospital.state.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(startIndex, endIndex);

  function convertArrayOfObjectsToCSV(array: any[]) {
    let result = "";
    const columnDelimiter = ",";
    const lineDelimiter = "\n";
    const keys = Object.keys(array[0]);

    result += keys.join(columnDelimiter);
    result += lineDelimiter;
    array.forEach((item: { [x: string]: string }) => {
      let ctr = 0;
      keys.forEach((key) => {
        if (ctr > 0) result += columnDelimiter;

        result += item[key];
        ctr++;
      });
      result += lineDelimiter;
    });

    return result;
  }
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText("http://localhost:3000/findCare")
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Error in copying text: ", err);
      });
  };

  function downloadCSV(array: any) {
    const csvString = convertArrayOfObjectsToCSV(array);
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", "download.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div>
      <NavBar />
      <div className="search-hospital-input">
        <h3 className="search-hospital-text">Find a nearby hospital </h3>
        <div className="download-btns">
          <button
            onClick={() => downloadCSV(hospitalList)}
            className="download-csv-btn"
          >
            Download csv
          </button>
          <button onClick={copyToClipboard} className="share-btn">
            Share csv
          </button>
        </div>
        <input
          className="search-input"
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Enter Your Location (State)"
        />
      </div>
      <div className="hospital-grid-container">
        {filteredHospitals.map((hospital, index) => (
          <HospitalCard key={index} hospital={hospital} />
        ))}
      </div>
      <div className="pagination-buttons">
        <button
          className="prev-btn"
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <button
          className="next-btn"
          onClick={handleNextPage}
          disabled={endIndex >= hospitalList.length}
        >
          Next
        </button>
      </div>

      <div className="footer-container">
        <div className="footer-section">
          <h3 className="contact-us-footer">Contact Us</h3>
          <p>32 Crescent Gwarinpa, Abuja. Nigeria. +2348141715571</p>
        </div>

        <div className="footer-section">
          <h3 className="about-us-footer">About Us</h3>
          <p>News & Media</p>
        </div>

        <div className="footer-section">
          <h3 className="quick-details-footer">Quick Links</h3>
          <p>My account Book an appointment Library</p>
        </div>
        <div className="footer-note">
          <p>&copy; {new Date().getFullYear()} Designed by c</p>
        </div>
      </div>
    </div>
  );
};

export default FindCarePage;
