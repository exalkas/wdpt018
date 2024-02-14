import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imagePath, setImagePath] = useState("/noimg.png");
  const [image, setImage] = useState(null);

  const { user } = useContext(UserContext);

  const handleSave = async () => {
    const formdata = new FormData();

    formdata.append("title", title);
    formdata.append("content", content);
    formdata.append("author", user._id);

    if (image) formdata.append("postImage", image);

    const response = await axios.post(
      import.meta.env.VITE_BASE_URL + "/posts/add",
      formdata
    );
    console.log("🚀 ~ response:", response);

    if (response.data.success) alert("Post added successfully");
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setImagePath(URL.createObjectURL(e.target.files[0]));
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
      <div className="w-3/4 mb-6 text-slate-900">
        <label className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500  border-solid border-2 border-slate-300 text-slate-800">
          Select Image
          <input type="file" name="image" hidden onChange={handleImageChange} />
        </label>
        <img src={imagePath} className="w-[250px] h-[250px] object-cover" />
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
