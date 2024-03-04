import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function Register() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const [emailOrUsername, setEmailOrUsername] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = async () => {
    console.log(emailOrUsername, password);

    if (!emailOrUsername)
      return setError("Please enter your username or email address");

    if (!password) return setError("Please enter your password");

    const response = await axios.post(
      "http://localhost:5000/users/login",
      {
        emailOrUsername,
        password,
      },
      { withCredentials: true }
    );
    console.log("🚀 ~ response:", response);

    if (response.data.success) {
      setUser(response.data.user);
      localStorage.setItem("socialUser", JSON.stringify(response.data.user));
      localStorage.setItem("socialToken", response.data.token);
      navigate("/home");
    } else {
      if (response.data.error.includes("verified")) {
        setError("User is not verified");
      } else {
        setError("Email or password are not correct. Please try again.");
      }
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
          <div className="text-center pb-3">Welcome at social app!</div>
        </div>

        <div className="w-full md:w-3/4  lg:w-1/2 flex flex-col items-center bg-slate-50 rounded-md pt-12">
          <div className="w-3/4 mb-6">
            <input
              type="email"
              name="email"
              id="email"
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
              placeholder="Email or Username"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
            />
          </div>

          <div className="w-3/4 mb-6">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-slate-500  border-solid border-2 border-slate-300"
            />
            <p className="text-red-500 h-[20px]">{error}</p>
          </div>
          <div className="w-3/4 mb-12">
            <button
              type="submit"
              className="py-4 bg-blue-500 w-full rounded text-blue-50 font-bold hover:bg-blue-700"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
