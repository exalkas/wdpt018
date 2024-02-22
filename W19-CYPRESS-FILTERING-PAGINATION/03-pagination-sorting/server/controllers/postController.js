import Post from "../models/Post.js";

export const handleAddPost = async (req, res) => {
  try {
    console.log("this is add post", req.body);
    console.log("this is add post file", req.file);

    if (req.body.file) req.body.image = req.file.path;

    // Another way to add a document and then populate it
    // const post = new Post(req.body);
    // await post.save();
    // await post.populate("author", "username email image");

    // More complicated way to add a document and populate it
    const post = await (
      await Post.create(req.body)
    ).populate("author", "username email image");

    console.log("🚀 ~ post:", post);

    // const post = (await Post.create(req.body)).populate(
    //   "author",
    //   "username email image"
    // );

    console.log("🚀 ~ post:", post);

    res.send({ success: true, post });
  } catch (error) {
    console.log("🚀 ~ error in add post:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};

export const handleGetAllPosts = async (req, res) => {
  try {
    console.log("this is get all posts");

    const posts = await Post.find().populate("author", "username image email");
    console.log("🚀 ~ posts:", posts);

    res.send({ success: true, posts });
  } catch (error) {
    console.log("🚀 ~ error in get all posts:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};
export const handleGetOnePost = async (req, res) => {
  try {
    console.log("this is get one post", req.query);

    const post = await Post.findById(req.query.id);
    console.log("🚀 ~ post:", post);

    res.send({ success: true, post });
  } catch (error) {
    console.log("🚀 ~ error in get one post:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};

export const handleDeletePost = async (req, res) => {
  try {
    console.log("this is delete post", req.params);

    const post = await Post.findByIdAndDelete(req.params.id);
    console.log("🚀 ~ post:", post);

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ error in delete post:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};

export const handleEditPost = async (req, res) => {
  try {
    console.log("this is edit post", req.body);

    const post = await Post.findByIdAndUpdate(
      req.body.post._id,
      {
        ...req.body.post,
      },
      { new: true }
    );
    console.log("🚀 ~ post:", post);

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ error in edit post:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};

export const handleLikes = async (req, res) => {
  try {
    console.log("this is handle like", req.body);

    const post = await Post.findOne({
      _id: req.body.postID,
      likes: req.body.userID,
    });
    console.log("🚀 ~ post:", post);

    let newPost = {};

    if (post) {
      // User has liked the post
      newPost = await Post.findByIdAndUpdate(
        req.body.postID,
        {
          $pull: { likes: req.body.userID }, // removes the user (it will delete all instances) from the likes array
        },
        { new: true }
      );
      console.log("🚀 ~ newPost:", newPost);
    } else {
      // User has not liked the post

      newPost = await Post.findByIdAndUpdate(
        req.body.postID,
        {
          $addToSet: { likes: req.body.userID }, // adds the userid to the likes array ONLY IF IT'S NOT THERE
        },
        { new: true }
      );
      console.log("🚀 ~ newPost:", newPost);
    }

    res.send({ success: true, post: newPost });
  } catch (error) {
    console.log("🚀 ~ error in handle like:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};
