// Import necessary modules
import clientModel from "../models/clientModel.mjs";  // Model for interacting with client data
import jwt from "jsonwebtoken";                         // For generating JSON Web Tokens (JWT)
import express from 'express';                          // Framework for building web applications
import redis from 'redis';                               // Redis client for potential future use
import Bull from 'bull';                                 // Bull for managing message queues (not used here)

// Create an Express application instance
const app = express();

// Connect to Redis (replace with your configuration if needed)
const redisClient = redis.createClient({
    host: 'localhost',
    port: 6379
});

// Create a Bull queue instance (not used in this version)
const authQueue = new Bull('auth-queue', {redis: redisClient}); 

// Login function to handle user login requests
const login = async (req, res) => {
  try {
    // Extract email and password from request body
    const { email, password } = req.body;
    console.log(`Received login request for email: ${email}`);

    // Find the client by email and password using your client model
    const client = await clientModel.findOne({ email, password });
    console.log(`Login attempt for email: ${email}, client found:`, client);

    // Check if user was found
    if (!client) {
      return res.status(404).send({
        message: "User not found!",
      });
    }

    // Ensure SECRET_KEY environment variable is set for JWT signing
    if (!process.env.SECRET_KEY) {
      return res.status(500).send({ message: "Missing SECRET_KEY environment variable!" });
    }

    // Generate a JWT token containing the client ID as payload
    const token = jwt.sign(
      { clientId: client._id },
      process.env.SECRET_KEY
    );

    // Send the client data and JWT token in the response
    return res.send({ client, token });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).send({ message: "Something went wrong!", error: error.message });
  }
};

// Register function to handle user registration requests
const register = async (req, res) => {
  try {
    // Extract user data from request body
    const { name, password, phone, email } = req.body;
    console.log(`Received registration request for email: ${email}`);

    // Create a new client using the client model
    const client = await clientModel.create({ name, password, phone, email });
    console.log(`New client created:`, client);

    // Send a success message upon successful registration
    return res.status(201).send({
      message: "Data added successfully."
    })
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).send({ message: "Something went wrong!", error: error.message });
  }
};

// Export login and register functions for use in other parts of the application
export { login, register };

