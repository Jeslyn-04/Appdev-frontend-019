import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../Components/UserContext";
import Button from "@mui/material/Button";
import logo from "../Images/Logo/Logobook.jpg";
import bg from "../Images/Background/loginbg.jpg";
import "../Css/Signin.css";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [isValidEmail, setIsValidEmail] = useState(true);
  const { setUser: setUserContext } = useContext(UserContext);
  const navigate = useNavigate();

  const APIKEY = "http://localhost:8080/api/users";
  
  const updateemail = (e) => {
    setUser({ ...user, email: e.target.value });
    setIsValidEmail(validateEmail(e.target.value));
  };

  const updatepassword = (e) => {
    setUser({ ...user, password: e.target.value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const checkUser = async (email, password) => {
    const response = await axios.get(APIKEY);
    
    return response.data.some(
      (user) => user.email === email && user.password === password
    );
  };
  
  const handleLogin = async (event) => {
    event.preventDefault();
    const userExist = await checkUser(user.email, user.password);
    const response = await axios.get(APIKEY);

    if (userExist) {
      alert("Login Successful");
      const userData = response.data.find(
        (user) => user.email === user.email
      );
      setUserContext(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      navigate('/home');
    } else {
      alert("User does not exist");
    }
  };

  return (
    <div id="Log">
      <div className="background">
        <img src={bg} alt="Background Image" />
      </div>
      <div className="wrapper">
        <div className="Logoimg">
          <img src={logo} height={"220px"} width={"250px"} style={{ marginLeft: "20px" }} />
        </div>
        <form action="">
          <h1 style={{ fontFamily: "serif" }}>SIGN IN</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Email Address"
              value={user.email}
              onChange={updateemail}
              className="email"
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={updatepassword}
              className="email"
            />
          </div>
          <button type="submit" className="btn" onClick={handleLogin}>
            Login
          </button>
          {!isValidEmail && <p style={{ color: "red" }}>Invalid email or password.</p>}
          <div className="register-link">
            <p>
              Don't have an account?
              <br />
              <Link style={{ color: "black" }} to="/signup">
                <p>Sign Up</p>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
