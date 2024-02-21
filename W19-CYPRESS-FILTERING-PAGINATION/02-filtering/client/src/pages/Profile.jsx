import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";

export default function Register() {
  const { user } = useContext(UserContext);

  const [imagePath, setImagePath] = useState(
    user.image ? import.meta.env.VITE_BASE_URL + "/" + user.image : "/noimg.png"
  );
  console.log("🚀 ~ imagePath:", imagePath);
  const [image, setImage] = useState(null);

  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);

  const handleChangeImage = (e) => {
    console.log("file selected", e.target.files[0]);

    setImage(e.target.files[0]);
    setImagePath(URL.createObjectURL(e.target.files[0]));
  };

  const handleSave = async () => {
    const formdata = new FormData();

    formdata.append("email", email);
    formdata.append("username", username);
    formdata.append("id", user._id);
    formdata.append("profileImage", image);

    console.log("🚀 ~ formdata:", formdata);

    for (let pair of formdata.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    const response = await axios.post(
      import.meta.env.VITE_BASE_URL + "/users/edit",
      formdata
    );
    console.log("🚀 ~ response:", response);
  };

  return (
    <div className="bg-blue-500 w-screen flex items-center justify-center h-[calc(100vh-80px)]  text-slate-800">
      <div className="flex justify-center container mx-auto my-auto   items-center flex-col">
        <div className="w-full md:w-3/4  lg:w-1/2 flex flex-col items-center bg-slate-50 rounded-md pt-12">
          <div className="w-3/4 mb-6">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
            />
          </div>

          <div className="w-3/4 mb-6">
            <input
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500  border-solid border-2 border-slate-300"
            />
          </div>
          <div className="w-3/4 mb-6">
            <label className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500  border-solid border-2 border-slate-300 text-slate-800">
              Select Image
              <input
                type="file"
                name="image"
                hidden
                onChange={handleChangeImage}
              />
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
      </div>
    </div>
  );
}
