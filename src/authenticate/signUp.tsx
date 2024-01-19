import React, { useState } from "react";
import "firebase/auth";
import { auth } from "../firebase_setup/Config";
import NavBar from "../components/nav";
import "./Signup.css";
import { Link } from "react-router-dom";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  let navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/findCare");
        console.log("userCredential", userCredential);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const googleSignUp = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result: any) => {
        const user = result.user;
      })
      .catch((error) => {});
  };

  return (
    <div className="signin-main">
      <NavBar />
      <div className="signin-container">
        <form onSubmit={handleSubmit} className="form-container">
          <h1 className="signup-title">Signup</h1>
          <div>
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="signin-input"
              required
            />
            <label htmlFor="password"></label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="signin-input"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="signin-input"
              required
            />
            <p>
              {formData.confirmPassword &&
              formData.confirmPassword !== formData.password
                ? "Password is wrong"
                : null}
            </p>
          </div>
          <button type="submit" className="submit-signin">
            Sign Up
          </button>
        </form>
        <div className="new-to-med">
          <p className="or-text">Or</p>
          <button
            onClick={googleSignUp}
            type="submit"
            className="submit_google_signin"
          >
            Sign Up with Google
          </button>
          <div className="already-have-account">
            <p className="new-to-medtrix">Already have an account?</p>
            <Link to="/login" className="sign-up-link">
              <div className="sign-up">Sign in</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
