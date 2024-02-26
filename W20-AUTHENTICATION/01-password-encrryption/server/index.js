import express from "express";
import connectDB from "./utils/dbConnect.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import dotenv from "dotenv/config";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(morgan("dev"));
app.use(express.json()); // to parse body from requests
app.use("/uploads", express.static("uploads"));

app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/posts/comments", commentRoutes);

connectDB();
app.listen(5000, () => console.log("Server is up and running!"));
