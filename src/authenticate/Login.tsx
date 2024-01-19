import React, { useState, useRef } from "react";
import "firebase/auth";
import { auth, app } from "../firebase_setup/Config";
import "./Login.css";
import NavBar from "../components/nav";
import SignupPage from "./SignUp";
import { Link } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  let navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/findCare");
        console.log("userCredential-login", userCredential);
      })
      .catch((error) => {
        console.log("error-login", error);
      });
  };
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result: any) => {
        const user = result.user;

        navigate("/findCare");
      })
      .catch((error) => {});
  };
  return (
    <div className="login-main">
      <NavBar />
      <div className="login-container">
        <form onSubmit={handleLogin} className="form-container">
          <h1 className="login-title">Login</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />
          <button type="submit" className="submit-login">
            Login
          </button>
        </form>
        <div className="new-to-med">
          <p className="or-text">Or</p>
          <button
            onClick={googleSignIn}
            type="button"
            className="google-submit-login"
          >
            Login with Google
          </button>
          <div className="already-have-account">
            <p className="new-to-medtrix">New to Med-trix?</p>
            <Link to="/signup" className="sign-up-link">
              <div className="sign-up"> Create account</div>
            </Link>
          </div>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
