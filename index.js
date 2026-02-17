import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./db/db.js";
import authRoutes from "./routes/auth.routes.js";
import musicRoutes from "./routes/music.routes.js";

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/music", musicRoutes);

connectDB().then(() => {
  app.listen(2000, () => {
    console.log("Server running on port 2000");
  });
});
