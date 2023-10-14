import mongoose from "mongoose";

const MONGO_URI: string = process.env.MONGODB_URI || "";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
