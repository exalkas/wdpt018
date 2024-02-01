import Post from "../models/Post.js";

export const handleAddPost = async (req, res) => {
  try {
    console.log("this is add post", req.body);

    const post = await Post.create(req.body);
    console.log("🚀 ~ post:", post);

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ error in add post:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};

export const handleGetAllPosts = async (req, res) => {
  try {
    console.log("this is get all posts");

    const posts = await Post.find();
    console.log("🚀 ~ posts:", posts);

    res.send({ success: true, posts });
  } catch (error) {
    console.log("🚀 ~ error in get all posts:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};
