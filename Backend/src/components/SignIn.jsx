import axios from "axios"; // Library for making HTTP requests
import { useState } from "react"; // Hook for managing component state
import { Link, useNavigate } from "react-router-dom"; // For navigation within the React application
import NavBar from "./NavBar"; // Import the NavBar component (assumed to be a navigation bar)
import "./SignIn.css"; // Import styles for the SignIn component

const SignIn = () => {
  // State variable to store login data (email and password)
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // Hook for browser navigation
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      // Send a POST request to the login API endpoint (replace with your actual API URL)
      const response = await axios.post("http://localhost:8000/api/login", {
        email: data.email,
        password: data.password,
      });
      console.log(response); // Log the response from the API

      // Clear the login form data after successful submission (optional)
      useState({
        email: "",
        password: "",
      });

      // Handle successful login (e.g., navigate to a different page, store token)
      // Currently commented out, implement your logic here based on the API response
      // const token = response.data.token;
      // ... handle token and navigate accordingly
    } catch (error) {
      console.log("error authentication and creating queue: ", error.message);
      // Handle errors during login
      if (error.response && error.response.status === 404) {
        alert("Please SignUp first");
        console.log(error.message);
      } else {
        // Handle other errors (e.g., network errors, server errors)
        alert("Login failed! Please check your credentials or try again later.");
      }
    }
  };

  // Handle changes in input fields
  const handleChange = (event) => {
    event.preventDefault();
    // Update the state with the new value for the changed field
    setData({ ...data, [event.target.id]: event.target.value });
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="formbox">
        <form onSubmit={handleSubmit}>
          <h1>SignIn Form</h1>

          <div className="logo">
            {/* Display a user icon */}
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/ios-filled/100/user.png"
              alt="user"
            />
          </div>
          <br />

          {/* Email input field */}
          <i className="fa-solid fa-envelope"></i>
          <input
            type="email"
            id="email"
            value={data.email}
            placeholder="Enter Your Email ID"
            onChange={handleChange}
          />
          <br />
          <br />

          {/* Password input field */}
          <i className="fa-solid fa-lock"></i>
          <input
            type="password"
            id="password"
            value={data.password}
            placeholder="Enter Your password"
            onChange={handleChange}
          />
          <br />
          <br />

          {/* Login button */}
          <button>Login</button>

          {/* Link to SignUp component */}
          <p className="line">
            {" "}
            Don't have an Account <Link to="/SignUp">SignUp</Link>
          </p>
          <br />
          <br />
        </form>
      </div>
    </>
  );
};

export default SignIn;
