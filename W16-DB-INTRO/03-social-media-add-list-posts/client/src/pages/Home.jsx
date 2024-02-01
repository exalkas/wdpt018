import { useEffect, useState } from "react";
import Post from "../components/Post";

export default function Home() {
  const [posts, setPosts] = useState([]);

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
    <div>
      {posts.map((item) => (
        <Post key={item._id} data={item} />
      ))}
    </div>
  );
}
