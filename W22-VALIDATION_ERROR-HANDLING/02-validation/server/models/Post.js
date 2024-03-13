import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: String,
  author: { type: Schema.Types.ObjectId, ref: "User" }, // reference to User model
  likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  comments: [
    {
      commenter: { type: Schema.Types.ObjectId, ref: "User" },
      text: { type: String, required: true },
      date: { type: Date, default: Date.now() },
    },
  ],
});

export default mongoose.model("Post", postSchema);
