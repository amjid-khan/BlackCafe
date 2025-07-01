
import React, { useState } from "react";
import "./LoginPopup.css";
import { IoMdClose } from "react-icons/io";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  return (
    <>
      <div className="login-popup">
        <form className="login-pop-up-container">
          <div className="login-popup-title">
            <h2>{currState}</h2>
            <p onClick={() => setShowLogin(false)}>
              <IoMdClose />
            </p>
          </div>
          <div className="login-popup-inputs">
            {currState === "Login" ? (
              <></>
            ) : (
              <input type="text" placeholder="Your name" required />
            )}
            <input type="text" placeholder="Your email" required />
            <input type="password" placeholder="Your password" required />
          </div>
          <button>
            {currState === "Sign up" ? "Create Account" : "Login"}
          </button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy</p>
          </div>
          {currState === "Sign up" ? (
            <p>
              Already have an account? <span onClick={()=> setCurrState("Login")}>Login here</span>
            </p>
          ) : (
            <p>
              Create new account? <span onClick={()=> setCurrState("Sign up")}>Click here</span>
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default LoginPopup;
