const express = require("express");
require("dotenv").config();
const connectDB = require("./db");
const cors = require("cors");
const corsOptions = require("./corsConfig");

const app = express();
//https://live-server-dio0.onrender.com

//MIDDLEWARE
app.use(express.json());
app.use(cors(corsOptions));


// Database connection
connectDB();

//ROUTES
app.use("/auth", require("./auth_route"));


const PORT = process.env.PORT || 4000
//SERVER
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})