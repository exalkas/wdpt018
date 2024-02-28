import express from "express";
import {
  handleAddPost,
  handleGetAllPosts,
  handleGetOnePost,
  handleDeletePost,
  handleEditPost,
  handleLikes,
} from "../controllers/postController.js";
import upload from "../middlewares/multer-local.js";
import uploadCloudinary from "../middlewares/multer-cloudinary.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/add", auth, uploadCloudinary.single("postImage"), handleAddPost);
router.get("/get/all", auth, handleGetAllPosts);
router.get("/get/one", handleGetOnePost);
router.delete("/delete/:id", auth, handleDeletePost);
router.put("/edit", auth, handleEditPost);
router.post("/handleLike", auth, handleLikes);

export default router;
