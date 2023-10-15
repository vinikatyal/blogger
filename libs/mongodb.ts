import mongoose from "mongoose";


const MONGO_URI = process.env.MONGODB_URI as string; // your mongodb connection string

const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
