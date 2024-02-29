import express from "express";
import {
  handleAdd,
  handleDelete,
  handleEdit,
} from "../controllers/commentController.js";

const router = express.Router();

router.post("/add", handleAdd);
router.delete("/delete/:postID/:commentID", handleDelete);
router.patch("/edit", handleEdit);

export default router;
