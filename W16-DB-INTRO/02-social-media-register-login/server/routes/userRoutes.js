import express from "express";
import {
  handleRegister,
  listAll,
  handleLogin,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", handleRegister);
router.post("/login", handleLogin);
router.get("/list/all", listAll);

export default router;
