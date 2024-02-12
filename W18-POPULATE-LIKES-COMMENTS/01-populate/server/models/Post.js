import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: String,
  author: { type: Schema.Types.ObjectId, ref: "User" }, // reference to User model
});

export default mongoose.model("Post", postSchema);
