const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);

    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected successfully");

    mongoose.connection.on("error", (error) => {
      console.log("MongoDB connection error: ", error);
    });
  } catch (error) {
    console.log("MongoDB connection error: ", error);
    process.exit(1);
  }
};

module.exports = connectDB;