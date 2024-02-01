import express from "express";
import {
  handleAddPost,
  handleGetAllPosts,
} from "../controllers/postController.js";

const router = express.Router();

router.post("/add", handleAddPost);
router.get("/get/all", handleGetAllPosts);

export default router;
