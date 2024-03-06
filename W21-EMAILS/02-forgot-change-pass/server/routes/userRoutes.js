import express from "express";
import {
  handleRegister,
  listAll,
  handleLogin,
  editProfile,
  logout,
  handleLoginNoCookie,
  handleEmailConfirm,
  handleForgotPass,
  handleChangePass,
} from "../controllers/userController.js";
import auth from "../middlewares/auth.js";

import upload from "../middlewares/multer-simple.js";
import uploadCloudinary from "../middlewares/multer-cloudinary.js";

const router = express.Router();

router.post("/register", handleRegister);
router.post("/login", handleLoginNoCookie);
router.get("/list/all", auth, listAll);
router.post(
  "/edit",
  auth,
  uploadCloudinary.single("profileImage"),
  editProfile
);
router.get("/logout", auth, logout);
router.get("/emailconfirm/:token", handleEmailConfirm);
router.post("/forgotPass", handleForgotPass);
router.post("/changePass", handleChangePass);

export default router;
