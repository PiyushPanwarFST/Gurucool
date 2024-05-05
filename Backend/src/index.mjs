// Import necessary modules and libraries
import express from 'express'; // Express framework for Node.js
import mongoose from 'mongoose'; // Mongoose for MongoDB object modeling
import router from './routes/clientRoute.mjs'; // Importing router from clientRoute.mjs
import cors from 'cors'; // CORS middleware for Express
import {config} from 'dotenv'; // dotenv for environment variables

// Load environment variables from .env file
config();

// Create an Express application
const app = express();

// Enable CORS middleware to allow cross-origin requests
app.use(cors());

// Parse incoming request bodies in JSON format
app.use(express.json());

// Connect to MongoDB database using Mongoose
mongoose.connect("mongodb+srv://piyush2002panwar:GEVr2dKq5A5CnejH@cluster0.rivcjo2.mongodb.net/client")
    .then(() => console.log('database connected')) // Success message if connected
    .catch((err) => console.log(err)); // Log any errors if connection fails

// Use the router for handling routes
app.use('/', router);

// Start the server and listen on port 8000
app.listen(8000, () => {
    console.log('server started on port: 8000');
});
