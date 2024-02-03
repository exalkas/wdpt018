import express from "express";
import {
  handleAddPost,
  handleGetAllPosts,
  handleGetOnePost,
  handleDeletePost,
  handleEditPost,
} from "../controllers/postController.js";

const router = express.Router();

router.post("/add", handleAddPost);
router.get("/get/all", handleGetAllPosts);
router.get("/get/one", handleGetOnePost);
router.delete("/delete/:id", handleDeletePost);
router.put("/edit", handleEditPost);

export default router;
