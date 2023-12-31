import { Link } from "react-router-dom";
import img from "../images/login.svg";
import logo from "../images/vep-logo.svg";
import "../styles/login.css";
import React, { useState } from "react";

export default function Login() {
  const [hidepass, setHidePass] = useState(true);
  return (
    <div className="app-container-login">
      <div className="img-container-login">
        <span className="left-text">Hey!</span>
        <br />
        <span className="left-text-2">Welcome back.</span>
        <br />
        <img src={img} alt="Login Icon" className="login-icon" />
      </div>
      <div className="line-login"></div>
      <div className="seven">
        <div className="right-container-login">
          <div>
            <img src={logo} alt="Logo" className="nine" />
            <span className="login-text">Login to your account.</span>
            <br />
            <br />
            <span className="Enter-details">
              Enter your registered email ID and password.
            </span>
            <br />
          </div>

          <div className="input-container-login">
            <div className="email-container-login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#787878"
                className="icon icon-size"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>

              <input
                type="text"
                placeholder="Enter email ID"
                className="email-input"
                required
              />
            </div>
            <div className="password-container-login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#787878"
                className="icon-size icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>

              <input
                type={hidepass ? "password" : "text"}
                placeholder="Set Password"
                className="password-input"
                required
              />
              <div onClick={() => setHidePass(!hidepass)}>
                {hidepass ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#787878"
                    className="icon icon-size"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#787878"
                    className="icon icon-size"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </div>
            </div>

            <Link to="/dashboard">
              <input type="submit" value="Login" className="login-button" />
            </Link>
            <br />
            <div className="sign-up-container">
              <Link to="/signup" className="sign-up-link">
                <span>Don't have account? </span>
                <span className="sign-up-text-2">Sign Up</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
