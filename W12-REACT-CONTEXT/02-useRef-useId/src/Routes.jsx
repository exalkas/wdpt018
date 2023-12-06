import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Title from "./pages/Title";
import Recipes from "./pages/Recipes";
import Posts from "./pages/Posts";
import Weather from "./pages/Weather";
import HomeLayout from "./layouts/HomeLayout";
import Todos from "./pages/Todos";
import Profile from "./pages/Profile";
// import TitleLayout from "./layouts/TitleLayout";

export default function RoutesComp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/title" element={<Title />} />
          <Route path="/posts" element={<Posts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
