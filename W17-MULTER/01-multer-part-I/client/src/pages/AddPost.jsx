import axios from "axios";
import { useState } from "react";
export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = async () => {
    const response = await axios.post(
      import.meta.env.VITE_BASE_URL + "/posts/add",
      {
        title,
        content,
      }
    );
    console.log("🚀 ~ response:", response);
  };
  return (
    <div className="w-full md:w-3/4  lg:w-1/2 flex flex-col items-center bg-slate-50 rounded-md pt-12 mt-6">
      <div className="w-3/4 mb-6 text-slate-900">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
        />
      </div>
      <div className="w-3/4 mb-6 text-slate-900">
        <textarea
          placeholder="Content"
          className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
          value={content}
          onChange={(e) => setContent(e.target.value)}
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
