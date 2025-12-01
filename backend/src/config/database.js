import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
    console.log(`\n MOngoDB connected!!!
            ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    console.error("Full error:", error);
    process.exit(1);
  }
};

export default connectDB;
