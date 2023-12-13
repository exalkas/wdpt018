import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Twitter() {
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);

  const getData = async () => {
    const response = await fetch(
      `https://twitter-express-server.vercel.app/posts/list?api_key=002e042300&skip=${posts.length}&limit=10`
    );

    const data = await response.json();

    console.log("🚀 ~ data:", data);

    if (data.success) {
      setPosts([...posts, ...data.posts]);
      setTotal(data.total);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>The best tweets</title>
        </Helmet>
        {posts.map((item) => (
          <div key={item._id}>{item.text}</div>
        ))}
        {posts.length < total ? (
          <div>
            <hr />
            <button onClick={() => getData()}>Load more</button>
          </div>
        ) : null}
      </div>
    </HelmetProvider>
  );
}
