import React, { useState } from "react";
import apple from "../../Assets/icons8-apple.svg";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

// Component for user sign-in functionality
const Signin = () => {
  // State variables for storing and managing email, password, errors, and user data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [data, setData] = useState(null);

  // Hook from react-router-dom to programmatically navigate through your application
  const navigate = useNavigate();

  // Function to validate email format
  const validateEmail = (email) => {
    var regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate email and password, setting respective error states
    setEmailError(!validateEmail(email));
    setPasswordError(password.length < 8);
  };

  // Function to handle successful OAuth login via Google
  const handleSuccess = ({credential}) => {
    // Decoding the JWT token received from Google's OAuth flow
    const credentialResponseDecoded = jwt_decode(credential);
    
    // Storing user data and navigation to the dashboard upon successful login
    setData(credentialResponseDecoded)
    localStorage.setItem('picture', credentialResponseDecoded.picture);
    navigate('/dashboard');
  }

  // Function to handle failure in OAuth login
  const handleFaliure = (res) => {
    console.log(res);
  }

  return (
    <>
      {/* ... Rendered JSX omitted for brevity ... */}

      {/* Oauth buttons for alternate login */}
      <div className="oauth-buttons">
        {/* GoogleLogin component to facilitate OAuth2.0 login via Google */}
        <GoogleLogin
          onSuccess={handleSuccess} // Function called on successful login
          onError={handleFaliure}   // Function called on failed login
        />

        {/* Button for signing in with Apple */}
        <button className="apple-signin">
          <img src={apple}></img>
          Sign in with Apple
        </button>
      </div>

      {/* Form for email/password sign-in */}
      <form className="signin-form" onSubmit={handleFormSubmit}>
        {/* ... Individual input fields and labels ... */}

        {/* Button to submit sign-in form */}
        <button type="submit" className="signin-btn">
          Sign In
        </button>
      </form>

      {/* Link for navigating to the registration page */}
      <div className="register-link">
        Don't have an account? <a href="#">Register here</a>
      </div>
    </>
  );
};

export default Signin;
