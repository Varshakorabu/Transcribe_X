import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import ieeeRoutes from "./routes/ieeeRoutes.js";
import pptRoutes from "./routes/pptRoutes.js";
import mcqRoutes from "./routes/mcqRoutes.js";
import summaryRoutes from "./routes/summaryRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/ieee", ieeeRoutes);
app.use("/api/ppt", pptRoutes);
app.use("/api/mcq", mcqRoutes);
app.use("/api/summary", summaryRoutes);

// Start server
app.listen(8000, () => console.log("🚀 Server running on port 8000"));
