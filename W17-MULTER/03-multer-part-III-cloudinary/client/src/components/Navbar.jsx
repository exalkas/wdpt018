import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function Navbar() {
  const { user } = useContext(UserContext);

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

      <img
        className="w-[50px] h-[50px] rounded-full"
        src={user.image || "/noimg.png"}
      />
    </nav>
  );
}
