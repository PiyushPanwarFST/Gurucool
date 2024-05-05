// Import login and register functions from the clientController.mjs file
import { login, register } from '../controllers/clientController.mjs';

// Import express for building web applications and routing
import express from 'express';

// Create an Express router instance
const router = express.Router();

// Define routes for login and registration using the imported functions
router.post('/api/login', login);  // POST request to /api/login endpoint handled by the login function
router.post('/api/register', register); // POST request to /api/register endpoint handled by the register function

// Export the router for use in the main application
export default router;
