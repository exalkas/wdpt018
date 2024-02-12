import express from "express";
import {
  handleRegister,
  listAll,
  handleLogin,
  editProfile,
} from "../controllers/userController.js";

import upload from "../middlewares/multer-simple.js";
import uploadCloudinary from "../middlewares/multer-cloudinary.js";

const router = express.Router();

router.post("/register", handleRegister);
router.post("/login", handleLogin);
router.get("/list/all", listAll);
router.post("/edit", uploadCloudinary.single("profileImage"), editProfile);

export default router;
