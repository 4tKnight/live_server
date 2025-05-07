const express = require("express");
require("dotenv").config();
const connectDB = require("./db");
const cors = require("cors");
const corsOptions = require("./corsConfig");

const app = express();

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

// PORT=9000
// MONGO_URL=mongodb+srv://user:password12345.@cluster0.kjkbhqn.mongodb.net/
// CORS_DOMAINS=http://localhost:9000,https://localhost:9000,https://live-server-dio0.onrender.com,http://live-server-dio0.onrender.com