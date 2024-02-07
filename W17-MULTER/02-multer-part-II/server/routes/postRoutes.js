import express from "express";
import {
  handleAddPost,
  handleGetAllPosts,
  handleGetOnePost,
  handleDeletePost,
  handleEditPost,
} from "../controllers/postController.js";
import upload from "../middlewares/multer-local.js";

const router = express.Router();

router.post("/add", upload.single("postImage"), handleAddPost);
router.get("/get/all", handleGetAllPosts);
router.get("/get/one", handleGetOnePost);
router.delete("/delete/:id", handleDeletePost);
router.put("/edit", handleEditPost);

export default router;
