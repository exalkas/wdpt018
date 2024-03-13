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
export const handleDelete = async (req, res) => {
  try {
    console.log("this is delete comment", req.params);

    const post = await Post.findByIdAndUpdate(
      req.params.postID,
      {
        $pull: {
          comments: {
            _id: req.params.commentID,
          },
        },
      },
      { new: true }
    );
    console.log("🚀 ~ post:", post);

    res.send({ success: true, post });
  } catch (error) {
    console.log("🚀 ~ error in delete comment:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};

export const handleEdit = async (req, res) => {
  try {
    console.log("this is edit comment", req.body);

    const post = await Post.findById(req.body.postID);
    console.log("🚀 ~ post:", post);

    const index = post.comments.findIndex(
      (item) => item._id.toString() === req.body.commentID
    );
    console.log("🚀 ~ index:", index);

    post.comments[index].text = req.body.text;
    console.log("🚀 ~ post.comments[index]:", post.comments[index]);

    await post.save(); // save the new post to the db

    res.send({ success: true, post });
  } catch (error) {
    console.log("🚀 ~ error in edit comment:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};
