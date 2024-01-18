import express from "express";
import {
  register,
  login,
  listAll,
  deleteOne,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/list/all", listAll);
router.delete("/delete/one", deleteOne);

export default router;
