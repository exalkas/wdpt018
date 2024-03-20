import { useContext, useEffect, useState } from "react";
import Post from "../components/Post";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
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

  const handleComments = (newPost) => {
    const index = posts.findIndex((item) => item._id === newPost._id);

    const oldPosts = [...posts];

    oldPosts[index].comments = [...newPost.comments];

    setPosts(oldPosts);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("socialToken");

        const response = await fetch("http://localhost:5000/posts/get/all", {
          // fetch setup for sending/receiving cookies
          method: "GET",
          headers: {
            Authorization: `Bearer ${token} `,
          },
        });

        const data = await response.json();
        console.log("🚀 ~ data:", data);

        if (!response.ok) {
          alert(data.error);
          console.log(response);
        }

        if (data.success) {
          setPosts([...data.posts]);
        }
        // if (data.success) {
        //   setPosts([...data.posts]);
        // } else {
        //   navigate("/");
        // }
      } catch (error) {
        console.log("🚀 ~ error:", error);
      }
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
          handleComments={handleComments}
        />
      ))}
    </div>
  );
}
