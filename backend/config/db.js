const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
         
        });
        console.log('Connected to Database');
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1); // Exit the process with a failure status
    }
}

module.exports = connectToDB;
