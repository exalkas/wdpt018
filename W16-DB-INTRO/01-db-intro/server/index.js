import express from "express";
import connectDB from "./utils/dbConnect.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

connectDB();
app.listen(5000, () => console.log("Server is up and running!"));
