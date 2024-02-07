import express from "express";
import {
  handleRegister,
  listAll,
  handleLogin,
  editProfile,
} from "../controllers/userController.js";

import upload from "../middlewares/multer-simple.js";

const router = express.Router();

router.post("/register", handleRegister);
router.post("/login", handleLogin);
router.get("/list/all", listAll);
router.post("/edit", upload.single("profileImage"), editProfile);

export default router;
