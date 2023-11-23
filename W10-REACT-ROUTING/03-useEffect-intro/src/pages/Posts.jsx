import { useEffect, useState } from "react";
import "../App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const data = await response.json();
      console.log("🚀 ~ data:", data);

      setPosts(data);
    }

    getData();
  }, []);

  return (
    <div>
      {posts.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}

export default App;
