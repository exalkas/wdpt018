import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Title from "./pages/Title";
import Recipes from "./pages/Recipes";
import Posts from "./pages/Posts";

export default function RoutesComp() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/title" element={<Title />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}
