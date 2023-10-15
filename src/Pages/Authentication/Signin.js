import React, { useState } from "react";
import apple from "../../Assets/icons8-apple.svg";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    var regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEmailError(!validateEmail(email));
    setPasswordError(password.length < 8);
  };

  const handleSuccess = ({credential}) => {
    const credentialResponseDecoded = jwt_decode(credential);
    setData(credentialResponseDecoded)
    localStorage.setItem('picture', credentialResponseDecoded.picture);
    navigate('/dashboard');
  }
  const handleFaliure = (res) => {
    console.log(res);
  }

  return (
    <>
      <div className="Auth">
        <div className="board-container">
          <div className="logo">LOGO</div>
          <div className="title">Board.</div>
          <div className="icons">
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-square-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-reddit"></i>
          </div>
        </div>
        <div className="Signin_Page">
          <h2>Sign In</h2>
          <p>Sign in to your account</p>

          <div className="oauth-buttons">
            <GoogleLogin
             onSuccess={handleSuccess}
            onError={handleFaliure}

            />
            <button className="apple-signin">
              <img src={apple}></img>
              Sign in with Apple
            </button>
          </div>

          <form className="signin-form" onSubmit={handleFormSubmit}>
            <div className="input-group">
              <label>Email address</label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && (
                <p style={{ color: "red" , fontSize:"13px", position:"absolute" }}>Invalid email address</p>
              )}
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <p style={{ color: "red" , fontSize:"13px", position:"absolute" }}>
                  Password must be at least 8 characters
                </p>
              )}
            </div>

            <div className="forgot-password">
              <a href="#">Forgot password?</a>
            </div>

            <button type="submit" className="signin-btn">
              Sign In
            </button>
          </form>

          <div className="register-link">
            Don't have an account? <a href="#">Register here</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
