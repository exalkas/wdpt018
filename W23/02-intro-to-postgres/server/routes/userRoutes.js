import express from "express";
import { body } from "express-validator";
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
  handleRegisterPostgres,
  handleLoginNoCookiePG,
} from "../controllers/userController.js";
import auth from "../middlewares/auth.js";

import upload from "../middlewares/multer-simple.js";
import uploadCloudinary from "../middlewares/multer-cloudinary.js";

const router = express.Router();

router.post(
  "/registermongoose",
  body("email")
    .notEmpty()
    .withMessage("Email is empty")
    .isEmail()
    .withMessage("Email is mandatory"),
  body("username")
    .trim()
    .escape()
    .notEmpty()
    .isLength({ min: 4 })
    .withMessage("Username should be at least 4 characters"),
  handleRegisterPostgres
);
router.post(
  "/register",
  body("email")
    .notEmpty()
    .withMessage("Email is empty")
    .isEmail()
    .withMessage("Email is mandatory"),
  body("username")
    .trim()
    .escape()
    .notEmpty()
    .isLength({ min: 4 })
    .withMessage("Username should be at least 4 characters"),
  handleRegisterPostgres
);
router.post("/login", handleLoginNoCookiePG);
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
