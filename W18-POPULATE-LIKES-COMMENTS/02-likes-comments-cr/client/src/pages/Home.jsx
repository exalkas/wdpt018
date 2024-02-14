import { useContext, useEffect, useState } from "react";
import Post from "../components/Post";
import { UserContext } from "../contexts/UserContext";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(UserContext);

  const deletePost = (id) => {
    const filteredPosts = posts.filter((item) => item._id !== id);

    setPosts(filteredPosts);
  };

  const handleUpdateLikes = (newPost) => {
    let postIndex = posts.findIndex((item) => item._id === newPost._id);

    const oldPosts = [...posts];

    oldPosts[postIndex].likes = [...newPost.likes];

    setPosts(oldPosts);
  };

  const handleAddComment = (newPost) => {
    const index = posts.findIndex((item) => item._id === newPost._id);

    const oldPosts = [...posts];

    oldPosts[index].comments = [...newPost.comments];

    setPosts(oldPosts);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/posts/get/all");

      const data = await response.json();
      console.log("🚀 ~ data:", data);

      if (data.success) setPosts([...data.posts]);
    };

    fetchData();
  }, []);

  return (
    <div className="mt-6 flex flex-col items-center gap-[20px]">
      {posts.map((item) => (
        <Post
          key={item._id}
          data={item}
          deletePost={deletePost}
          handleUpdateLikes={handleUpdateLikes}
          user={user._id}
          handleAddComment={handleAddComment}
        />
      ))}
    </div>
  );
}
