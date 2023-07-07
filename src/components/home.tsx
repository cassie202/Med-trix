import React from "react";
import { useNavigate } from "react-router";
import {Link} from "react-router-dom"
import NavBar from "./nav";
import './home.css';
// import hospital from '../assets/hospital.jpg'

export interface HomePageProps {
    
}
 
const HomePage: React.FunctionComponent<HomePageProps> = (props) => {
    
    return (
        <div className="home-container">
           <NavBar />
           <div className="hero-container">
            <h1 className="hero-text">Find the nearest hospital to you and make an appointment</h1>
            <p className="hero-paragraph">Discover your perfect care: Find your hospital anytime, any day!</p>
            <button className="get-started-btn">Get Started</button>
            <Link className="learn-more-btn" to="">Learn More..</Link>
           
           <div className="search-hospital-input">
           <h3 className ="search-hospital-text"><span className="Find-text">Find a  </span>nearby hospital </h3>
           <input className ="search-input" type="search" placeholder="Gwarimpa General hospital, Gwarimpa Abuja"/>
           </div>
           </div>
           <div className="welcome-container">
             <h3 className="welcome-text">Welcome to Care Finder</h3>
          </div>

          <div className="search-container">
            <h3 className="search-doctors"> Search Doctor</h3>
          </div>
           
          <div className="how-it-works">
             <h3 className="find-hospitals">How it works</h3>
          </div>

          <div className="qualified-doctors">
             <h3 className="qualified-doctors">qualified-doctors</h3>
          </div>

          <div className="testimonials">
             <h3 className="testimonials">testimonials</h3>
          </div>

          <div className="care-finder">
             <h3 className="care-finder">care-finder</h3>
          </div>

           </div>
      );
}
 
export default HomePage;