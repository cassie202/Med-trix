import React from "react";
import {Link} from "react-router-dom";
import './nav.css';

export interface NavBarProps {
    
}
 
const NavBar: React.FunctionComponent<NavBarProps> = () => {
    return (  
        <div className="navBar">
        <h3 className="title">Care Finder</h3>
        <div className="nav-items">
           <Link className="home" to= '/'>Home</Link>
            <Link className="about" to ='about'>About</Link>
            <Link className="find-care" to = 'findCare'>Find Care</Link>
            
            <button className="login-btn">Log in</button>
            <button className="signUp-btn">SignUp</button>
            
        </div>
        </div>
    );
}
 
export default NavBar;