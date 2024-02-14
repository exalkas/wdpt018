import express from "express";
import { handleAdd } from "../controllers/commentController.js";

const router = express.Router();

router.post("/add", handleAdd);

export default router;
