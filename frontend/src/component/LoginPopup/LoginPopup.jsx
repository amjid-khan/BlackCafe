import React, { useState } from "react";
import "./LoginPopup.css";
import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios"

const LoginPopup = ({ setShowLogin }) => {
  const {url , setToken} = useContext(StoreContext)
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const onLogin = async (e) => {
    e.preventDefault()
    let newUrl = url
    if (currState === "Login") {
      newUrl += "/api/user/login"
    } else {
      newUrl += "/api/user/register"
    }
    const response = await axios.post(newUrl, data)
    if (response.data.success) {
      setToken(response.data.token)
      localStorage.setItem("Token", response.data.token)
      setShowLogin(false)
    } else {
      alert(response.data.message)
    }
  }
  return (
    <>
      <div className="login-popup">
        <form onSubmit={onLogin} className="login-pop-up-container">
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
              <input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder="Your name" required />
            )}
            <input name="email" onChange={onChangeHandler} value={data.email} type="text" placeholder="Your email" required />
            <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder="Your password" required />
          </div>
          <button type="submit">
            {currState === "Sign up" ? "Create Account" : "Login"}
          </button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy</p>
          </div>
          {currState === "Sign up" ? (
            <p>
              Already have an account?{" "}
              <span onClick={() => setCurrState("Login")}>Login here</span>
            </p>
          ) : (
            <p>
              Create new account?{" "}
              <span onClick={() => setCurrState("Sign up")}>Click here</span>
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default LoginPopup;
