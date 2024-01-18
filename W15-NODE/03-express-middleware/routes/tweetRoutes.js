import express from "express";
import {
  addTweet,
  listAll,
  listOne,
  deleteOne,
  editTweet,
} from "../controllers/tweetController.js";

const router = express.Router();

router.post("/add", addTweet);
router.get("/list/all", listAll);
router.get("/list/one", listOne);
router.delete("/delete/one", deleteOne);
router.put("/edit", editTweet);

export default router;
