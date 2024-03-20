import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    localStorage.removeItem("socialUser");

    setUser({
      email: "",
      _id: "",
      username: "",
      image: "",
    });

    navigate("/");

    const response = await axios.get(
      import.meta.env.VITE_BASE_URL + "/users/logout",
      {
        withCredentials: true,
      }
    );
    console.log("🚀 ~ response:", response);

    if (response.data.success) {
    }
  };

  const correctedImagePath = user?.image?.replace(/\\/g, "/");
  return (
    <nav className="bg-slate-500 w-[100%] top-0 z-50 left-0 flex flex-wrap items-center justify-center p-4 gap-[20px] h-[80px]">
      <Link to="/" className="text-white">
        Login
      </Link>
      <Link to="/register" className="text-white">
        Register
      </Link>
      <Link to="/home" className="text-white">
        Home
      </Link>
      <Link to="/addPost" className="text-white">
        Add post
      </Link>
      <Link to="/profile" className="text-white">
        Profile
      </Link>
      <Link to="/users" className="text-white">
        Users
      </Link>

      <img
        className="w-[50px] h-[50px] rounded-full"
        src={user.image || "/noimg.png"}
      />
      {user._id && <div onClick={handleLogout}>Logout</div>}
    </nav>
  );
}
