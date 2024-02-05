import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
export default function AddPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        import.meta.env.VITE_BASE_URL + "/posts/get/one?id=" + id
      );
      console.log("🚀 ~ response:", response);

      if (response.data.success) {
        setPost(response.data.post);
      }
    };

    fetchData();
  }, []);

  const [post, setPost] = useState({
    _id: "",
    title: "",
    content: "",
  });

  const handleSave = async () => {
    const response = await axios.put(
      import.meta.env.VITE_BASE_URL + "/posts/edit",
      {
        post,
      }
    );
    console.log("🚀 ~ response:", response);

    if (response.data.success) navigate("/home");
  };
  return (
    <div className="w-full md:w-3/4  lg:w-1/2 flex flex-col items-center bg-slate-50 rounded-md pt-12 mt-6">
      <div className="w-3/4 mb-6 text-slate-900">
        <input
          placeholder="Title"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
        />
      </div>
      <div className="w-3/4 mb-6 text-slate-900">
        <textarea
          placeholder="Content"
          className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
          value={post.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
        ></textarea>
      </div>
      <div className="w-3/4 mb-12">
        <button
          type="submit"
          className="py-4 bg-blue-500 w-full rounded text-blue-50 font-bold hover:bg-blue-700"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
}
