// Import mongoose for interacting with MongoDB
import mongoose from 'mongoose';

// Define a schema for the 'client' collection in MongoDB
const clientSchema = new mongoose.Schema({
  // Define properties for the client data
  name: String,  // Name of the client (type: String)
  password: String, // Client's password (type: String)
  phone: String,  // Client's phone number (type: String)
  email: String,  // Client's email address (type: String)
}, {
  // Enable timestamps for automatic creation and update timestamps
  timestamps: true
});

// Create a mongoose model named 'client' based on the defined schema
export default mongoose.model('client', clientSchema);
