import express from "express";
import {
  handleRegister,
  listAll,
  handleLogin,
  editProfile,
  logout,
} from "../controllers/userController.js";
import auth from "../middlewares/auth.js";

import upload from "../middlewares/multer-simple.js";
import uploadCloudinary from "../middlewares/multer-cloudinary.js";

const router = express.Router();

router.post("/register", handleRegister);
router.post("/login", handleLogin);
router.get("/list/all", auth, listAll);
router.post(
  "/edit",
  auth,
  uploadCloudinary.single("profileImage"),
  editProfile
);
router.get("/logout", auth, logout);

export default router;
