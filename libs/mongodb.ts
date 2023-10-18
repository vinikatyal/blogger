import mongoose from "mongoose";

const MONGO_URI: string = process.env.MONGODB_URI || "";

const connectMongoDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Connected to MongoDB.");
    } else {
      await mongoose.connect(MONGO_URI);
    }

    const { db } = mongoose.connection;
    return db;
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
