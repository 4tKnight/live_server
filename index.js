const express = require("express");
require("dotenv").config();
const connectDB = require("./db");

const app = express();

//MIDDLEWARE
app.use(express.json());

// Database connection
connectDB();

//ROUTES
//to be added later

const PORT = process.env.PORT || 4000
//SERVER
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})