import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Connected to Database: ${conn.connection.host}`);
    } catch (error) {
        console.error("Error while connecting to database:", error);
        process.exit(1); // Optional: stop the app if DB connection fails
    }
};
