// const mongoose = require("mongoose");
// require("dotenv").config()
// mongoose.connect(process.env.connectionString)
// .then(()=>{
//     console.log("mongodb is connected");  
// })
// .catch((err)=>{
//     console.log("mongodb connection error:", err.message);  
// })
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("ENV VALUE:", process.env.connectionString);

    await mongoose.connect(process.env.connectionString, {
      serverSelectionTimeoutMS: 5000
    });

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};

export default connectDB;