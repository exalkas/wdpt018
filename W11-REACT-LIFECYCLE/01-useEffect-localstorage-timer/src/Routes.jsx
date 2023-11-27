import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Title from "./pages/Title";
import Recipes from "./pages/Recipes";
import Posts from "./pages/Posts";
import Weather from "./pages/Weather";

import HomeLayout from "./layouts/HomeLayout";
import TitleLayout from "./layouts/TitleLayout";
import MouseTracker from "./pages/MouseTracker";
import Timer from "./pages/Timer";
import Localstorage from "./pages/Localstorage";

export default function RoutesComp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/mousetracker" element={<MouseTracker />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/localstorage" element={<Localstorage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route element={<TitleLayout />}>
          <Route path="/title" element={<Title />} />
        </Route>
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

function NotFound() {
  return <div>Page not found</div>;
}
