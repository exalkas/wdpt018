import Post from "../models/Post.js";

export const handleAdd = async (req, res) => {
  try {
    console.log("this is add comment", req.body);

    const newComment = await Post.findByIdAndUpdate(
      req.body.postID,
      {
        $push: {
          comments: {
            text: req.body.text,
            commenter: req.body.useID,
          },
        },
      },
      { new: true }
    );
    console.log("🚀 ~ newComment:", newComment);

    res.send({ success: true, post: newComment });
  } catch (error) {
    console.log("🚀 ~ error in add comment:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};
