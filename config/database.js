const mongoose = require("mongoose");

// Getting MONGO_URI environment variable from .env file
const { MONGO_URI } = process.env;

exports.connect = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Successfully connected to database");
  } catch (err) {
    console.log("Database connection failed. Exiting now...");
    console.error(err.message);
    process.exit(1);
  }
};
