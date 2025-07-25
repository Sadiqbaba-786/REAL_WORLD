import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionString = `${process.env.MONGODB_URI}${DB_NAME}`;
    const connectionInstance = await mongoose.connect(connectionString);
    console.log(
      `\n✅ MongoDB connected! DB HOST: ${connectionInstance.connection.host}`
    );
    console.log(`📁 Database Name: ${DB_NAME}`);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
