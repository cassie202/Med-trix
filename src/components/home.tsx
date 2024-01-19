import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import NavBar from "./nav";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHouseMedicalCircleExclamation,
  faUserDoctor,
  faFileExport,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

export interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = (props) => {
  return (
    <div className="home-container">
      <NavBar />
      <div className="hero-container">
        <h1 className="hero-text">
          Find the nearest hospital to you and make an appointment
        </h1>
        <p className="hero-paragraph">
          Discover your perfect care: Find your hospital anytime, any day!
        </p>
        <Link to="/findCare">
          <button className="get-started-btn">Get Started</button>
        </Link>
        {/* <Link className="find-care" to = 'findCare'>Find Care */}
        <Link className="learn-more-btn" to="">
          Learn More..
        </Link>
      </div>
      <div className="welcome-container">
        <div className="image-container">
          <img
            src="https://media.istockphoto.com/id/1157106508/photo/senior-patient-and-nurse-in-hospital.webp?b=1&s=170667a&w=0&k=20&c=9ugovHJuYfhCz64zwBj1AfbP5Mts06O76cp_fdYRB5k="
            alt="A nurse adjusting a patient on the hospital bed"
            className="welcome-image"
          />
          <img
            src="https://media.istockphoto.com/id/844399628/photo/where-healing-happens.webp?b=1&s=170667a&w=0&k=20&c=I4HNLly6z_R2r8zCEi7IskjVK-36wqg9CclENLD1nEM="
            alt="A hospital corridor with a stretcher at the side"
            className="welcome-image"
          />
          <img
            src="https://media.istockphoto.com/id/1152675766/photo/blurry-background.webp?b=1&s=170667a&w=0&k=20&c=VhXTKkIhrUEgZnBVw2-qOcRxl-RMRRL2x1fwwvFt4j4="
            alt="Hospital staff walking around the hospital"
            className="welcome-image"
          />
          <img
            src="https://media.istockphoto.com/id/1218823354/photo/in-the-hospital-operating-room-an-international-team-of-professional-surgeons-and-assistants.jpg?s=612x612&w=0&k=20&c=i_wiSnvGp5W3LkHtxs3-Lj-qIydb6zzKCgxJj0CCe7Y="
            alt="A nurse on a mask in the theatre"
            className="welcome-image"
          />
          <img
            src="https://media.istockphoto.com/id/1404962439/photo/muslim-nurse-taking-care-of-a-senior-patient-in-a-wheelchair.webp?b=1&s=170667a&w=0&k=20&c=PZBg2QWTMidGtAjnmdqapNB6NBfsaAkQACcuvrPTD4I="
            alt="An old man carried by a nurse in a stretcher "
            className="welcome-image"
          />
          <img
            src="https://media.istockphoto.com/id/1404179486/photo/anesthetist-working-in-operating-theatre-wearing-protecive-gear-checking-monitors-while.jpg?s=612x612&w=0&k=20&c=gecZ0b-nDIuMOvRIt8Qyam-eSx6RBdUzn5yDh0nNEvM="
            alt="A doctor before a computer screen in the theatre "
            className="welcome-image"
          />
        </div>

        <div className="welcome-text-section">
          <div className="welcome-text-container">
            <h2 className="welcome-text-title">Welcome to Care Finder</h2>
            <p className="welcome-text-paragraph">
              Here at Carefinder, you can search through any hospital of choice
              within the provided address,export and share this findings to
              family and friends
            </p>
          </div>
          <Link to="/how-it-works">
            <button className="our-service-button">Our services</button>
          </Link>
        </div>
      </div>

      <div className="icon-container">
        <div className="hospital-icon">
          <FontAwesomeIcon
            className="icon"
            icon={faHouseMedicalCircleExclamation}
          />
          <Link to="findCare" className="search-hospital-link">
            <div className="search-hospital-paragraph">
              <h3 className="icon-title"> Search Hospital</h3>
              <p className="icon-paragraph">Find the best hospital </p>
            </div>
          </Link>
        </div>
        <div className="doctor-icon">
          <FontAwesomeIcon className="icon" icon={faUserDoctor} />
          <div className="search-doctor-paragraph">
            <h3 className="icon-title"> Search Doctors</h3>
            <p className="icon-paragraph">Effortlessly find the best doctor </p>
          </div>
        </div>

        <div className="export-icon">
          <FontAwesomeIcon className="icon" icon={faFileExport} />
          <div className="export-hospital-paragraph">
            <h3 className="icon-title"> Export hospitals</h3>
            <p className="icon-paragraph">Save your desired hospital </p>
          </div>
        </div>
        <div className="share-icon">
          <FontAwesomeIcon className="icon" icon={faShare} />
          <div className="search-hospital-paragraph">
            <h3 className="icon-title"> Share Hospitals</h3>
            <p className="icon-paragraph">
              Share your desired hospital to family and friends{" "}
            </p>
          </div>
        </div>
      </div>
      <h2 className="how-it-works-title">How it works</h2>
      <div className="how-it-works">
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
      <h2 className="qualified-doctors-title">Qualified-doctors</h2>
      <div className="qualified-doctors-main">
        <div className="qualified-doctors-container">
          <div>
            <img
              className="qualified-doctors"
              src="https://media.istockphoto.com/id/1201657177/photo/smiling-black-female-doctor-in-white-coat-posing-with-folded-arms.jpg?s=612x612&w=0&k=20&c=1SHhnT53JQ4acR4pNsRHHQXDUJCTAMI9Pg8-UG81Pao="
            />
            <div className="doctors-description">
              <p className="doctor-name">Doctor Sandra</p>
              <p className="doctor-position">Pediatrician</p>
              <p className="doctor-hospital">
                Gwarinpa General Hospital, Abuja
              </p>
            </div>
          </div>
          <div>
            <img
              className="qualified-doctors"
              src="https://media.istockphoto.com/id/592647638/photo/skilled-in-saving-lives.jpg?s=612x612&w=0&k=20&c=EaO-CIpQqGMlY7M69CK4a0XzkQ5XNyaJIlz6PkTBKKY="
            />
            <div className="doctors-description">
              <p className="doctor-name">Doctor Sam</p>
              <p className="doctor-position">Pediatrician</p>
              <p className="doctor-hospital">
                Gwarinpa General Hospital, Abuja
              </p>
            </div>
          </div>
        </div>
        <div className="qualified-doctors-container">
          <div>
            <img
              className="qualified-doctors"
              src="https://media.istockphoto.com/id/1362937229/photo/i-love-my-job.jpg?s=612x612&w=0&k=20&c=H-CFqvHFHKG7mXttyzpZ1vcg2Mfo0pTVX8S4vJd3ixA="
            />
            <div className="doctors-description">
              <p className="doctor-name">Doctor Alicia</p>
              <p className="doctor-position">Pediatrician</p>
              <p className="doctor-hospital">
                Gwarinpa General Hospital, Abuja
              </p>
            </div>{" "}
          </div>
          <div>
            <img
              className="qualified-doctors"
              src="https://media.istockphoto.com/id/1203995945/photo/portrait-of-mature-male-doctor-wearing-white-coat-standing-in-hospital-corridor.jpg?s=612x612&w=0&k=20&c=Hk-dqLqHXyYa4aTqjieXNk9-HQSE8WEYUAjA1sXsy_s="
            />
            <div className="doctors-description">
              <p className="doctor-name">Doctor Andrew</p>
              <p className="doctor-position">Pediatrician</p>
              <p className="doctor-hospital">
                Gwarinpa General Hospital, Abuja
              </p>
            </div>
          </div>
        </div>

        <div className="book-appointment-form-section">
          <div className="book-appointment-title"> Book an appointment</div>
          <form>
            <label>
              <div>
                <input
                  className="book-appointment-input"
                  type="text"
                  name="name"
                  placeholder="Address"
                />
              </div>
              <div>
                <input
                  className="book-appointment-input"
                  type="text"
                  name="name"
                  placeholder="Choose hospital"
                />
              </div>
              <div>
                <input
                  className="book-appointment-input"
                  type="text"
                  name="name"
                  placeholder="Choose Department"
                />
              </div>
              <div>
                <input
                  className="book-appointment-input"
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                />
              </div>
              <div>
                <input
                  className="book-appointment-input"
                  type="text"
                  name="name"
                  placeholder="Enter Email"
                />
              </div>
              <div>
                <input
                  className="book-appointment-input"
                  type="text"
                  name="name"
                  placeholder="Select Date"
                />
              </div>
              <div>
                <input
                  className="book-appointment-input"
                  type="text"
                  name="name"
                  placeholder="Select Time"
                />
              </div>
            </label>

            <button className="submit-appointment">Submit</button>
          </form>
        </div>
      </div>

      <div className="testimonials">
        <div className="testimonials-titles">
          <h3 className="testimonials-title">Testimonials</h3>
          <h2 className="What-our-users-say">What our users say</h2>
        </div>
        <div className="testimony-blocks">
          <div className="testimonies">
            <p className="testimonies-texts">
              Finding the right hospital has never been easier! With this
              website, I was able to locate a nearby hospital quickly and
              efficiently. The search feature is user-friendly, and it provided
              me with all the essential information I needed. Highly recommended{" "}
            </p>
            <img
              src="https://media.istockphoto.com/id/1400073992/photo/im-the-best-asset-in-my-business.jpg?s=612x612&w=0&k=20&c=ceAg_xBwNXyMI5gj3juImWQHVgUvRSCOsYoXMxN2Tv4="
              alt="A portrait of random users"
              className="testimonials-image"
            />
          </div>
          <div className="testimonies">
            <p className="testimonies-texts">
              I can't express how grateful i am for carefinder website. When i
              needed urgent medical care while travelling, it helped me locate
              the nearest hospital in a matter of seconds. The accurate results
              and detailed directions saved me valuable time and ensured i
              received the care i needed{" "}
            </p>
            <img
              src="https://media.istockphoto.com/id/1390893027/photo/portrait-of-a-senior-man-at-home.jpg?s=612x612&w=0&k=20&c=boVFST1awGr0D2ymVrMC5m-h0fb6Rm-6sTIVjIFJ1l4="
              alt="A portrait of random users"
              className="testimonials-image"
            />
          </div>
          <div className="testimonies">
            <p className="testimonies-texts">
              I recently moved to a new city and had no idea where to go for
              medical assistance, my friend shared me some hospital details
              using the carefinder website. It made my life easier, i was able
              to fine reputable hospitals near me effortlessly. The website's is
              user friendly interface and comprehnsive search gave me peace of
              mind. I highly recommend.{" "}
            </p>
            <img
              src="https://media.istockphoto.com/id/1387840951/photo/portrait-of-attractive-beautiful-young-female-with-chubby-cheeks-and-curvy-body-posing-at.jpg?s=612x612&w=0&k=20&c=a483V9zNnXoD8lJzgcUoScrUhle15DQ0eQNZ-0zlT_8="
              alt="A portrait of random users"
              className="testimonials-image"
            />
          </div>
        </div>
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

export default HomePage;
