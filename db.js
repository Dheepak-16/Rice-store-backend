const mongoose = require("mongoose");
require("dotenv").config()
mongoose.connect(process.env.connectionString)
.then(()=>{
    console.log("mongodb is connected");  
})
.catch((err)=>{
    console.log("mongodb connection error:", err.message);  
})
