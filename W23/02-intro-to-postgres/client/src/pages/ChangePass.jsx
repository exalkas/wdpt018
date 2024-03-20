import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const { token } = useParams();
  const [password, setPassword] = useState("");

  const handleSend = async () => {
    const response = await axios.post(
      import.meta.env.VITE_BASE_URL + "/users/changePass",
      { password, token }
    );

    console.log("🚀 ~ response:", response);

    if (response.data.success) {
      alert(
        "Password changed successfully. In few seconds you will be redirected to the login page"
      );

      setTimeout(() => navigate("/"), 3000); // Redirect after
    }
  };

  return (
    <div className="bg-blue-500 w-screen flex items-center justify-center h-[calc(100vh-80px)] ">
      <div className="flex justify-center container mx-auto my-auto   items-center flex-col">
        <div className="text-slate-100 items-center">
          <svg
            className="w-10 h-10 mx-auto pb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          <div className="text-center pb-3">Change your pass</div>
        </div>
        <p>{token}</p>
        <div className="w-full md:w-3/4  lg:w-1/2 flex flex-col items-center bg-slate-50 rounded-md pt-12">
          <div className="w-3/4 mb-6">
            <input
              type="email"
              name="email"
              id="email"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Type your new password"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
            />
          </div>

          <div className="w-3/4 mb-12">
            <button
              type="submit"
              className="py-4 bg-blue-500 w-full rounded text-blue-50 font-bold hover:bg-blue-700"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
