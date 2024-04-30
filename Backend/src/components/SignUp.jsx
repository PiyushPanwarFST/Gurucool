import axios from "axios"; // Library for making HTTP requests
import React, { useState } from "react"; // Hooks for managing component state
import { Link, useNavigate } from "react-router-dom"; // For navigation within the React application
import "./SignUp.css"; // Import styles for the SignUp component
import NavBar from "./NavBar"; // Import the NavBar component (assumed to be a navigation bar)

const SignUp = () => {
  // State variable to store user signup data (name, password, phone, email)
  const [data, setData] = useState({
    name: "",
    password: "",
    phone: "",
    email: "",
  });

  // Hook for browser navigation
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      // Send a POST request to the signup API endpoint (replace with your actual API URL)
      const response = await axios.post("http://localhost:8000/api/register", {
        name: data.name,
        password: data.password,
        phone: data.phone,
        email: data.email,
      });

      console.log(response); // Log the response from the API

      // Clear the signup form data after successful submission (optional)
      setData({
        name: "",
        password: "",
        phone: "",
        email: "",
      });

      // Handle successful signup (e.g., navigate to a different page)
      // You can implement logic here based on the API response (e.g., navigate to login)
    } catch (error) {
      console.log(error); // Log any errors during signup
    }
  };

  // Handle changes in input fields
  const handleChange = (event) => {
    // Update the state with the new value for the changed field
    setData({ ...data, [event.target.id]: event.target.value });
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="formbox">
        <form onSubmit={handleSubmit} autoComplete="off">
          <h1>SignUp Form</h1>
          <br />

          {/* Name input field */}
          <i className="fa-solid fa-user"></i>
          <input
            type="text"
            className="box"
            id="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
          />
          <br />
          <br />

          {/* Password input field */}
          <i className="fa-solid fa-lock"></i>
          <input
            type="password"
            className="box"
            id="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Enter Your Password"
          />
          <br />
          <br />

          {/* Phone number input field */}
          <i className="fa-solid fa-phone"></i>
          <input
            type="number"
            className="box"
            id="phone"
            value={data.phone}
            onChange={handleChange}
            placeholder="Enter Your Number"
          />
          <br />
          <br />

          {/* Email input field */}
          <i className="fa-solid fa-envelope"></i>
          <input
            type="email"
            className="box"
            id="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
          />
          <br />
          <br />

          {/* Sign up button */}
          <button>Sign up</button>

          {/* Commented-out link to Sign In page (add logic to uncomment if needed) */}
          <p>{/* Already user <Link to="/SignIn">SignIn</Link> */}</p>
          <br />
          <br />
        </form>
      </div>
    </>
  );
};

export default SignUp;
