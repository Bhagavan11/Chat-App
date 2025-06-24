import express from "express";
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
const app = express();
const port = process.env.PORT || 5001;

console.log("🚀 App starting...");
app.use(express.json({ limit: "10mb" })); // Or more if needed
app.use(express.urlencoded({ extended: true, limit: "10mb" }));


app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.get("/", (req, res) => {
  console.log("🟢 GET / request received");
  res.send("hello world");
});

app.use("/api/auth", authRoutes);
app.use("/api/messages",messageRoutes)

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`✅ Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ DB Connection Failed:", err.message);
  });
