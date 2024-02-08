import { useState } from "react";
import { GoKebabHorizontal } from "react-icons/go";
import Popover from "@mui/material/Popover";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Post({
  data = {
    title: "",
    content: "",
    _id: "",
  },
  deletePost = function () {},
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleDeletePost = async () => {
    const response = await axios.delete(
      import.meta.env.VITE_BASE_URL + "/posts/delete/" + data._id
    );
    console.log("🚀 ~ response:", response);

    if (response.data.success) {
      deletePost(data._id);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-[20px] w-[400px] border-white border-2 rounded-md p-4">
      <div className="max-w-4xl mx-auto flex justify-end w-full cursor-pointer">
        <GoKebabHorizontal onClick={handleOpenPopover} />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <div className="p-4 cursor-pointer hover:bg-slate-400">
            <Link to={`/editPost/${data._id}`}>Edit post</Link>
          </div>
          <div
            className="p-4 cursor-pointer hover:bg-slate-400"
            onClick={handleDeletePost}
          >
            Delete post
          </div>
        </Popover>
      </div>
      <h4>{data.title}</h4>
      <p>{data.content}</p>
      {data.image && (
        <img
          // src={`${import.meta.env.VITE_BASE_URL}/${data.image}`}
          src={data.image}
          className="w-[250px] h-[250px] object-cover"
        />
      )}
    </div>
  );
}
