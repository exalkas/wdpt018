import { useState } from "react";
import { GoKebabHorizontal } from "react-icons/go";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Popover from "@mui/material/Popover";
import axios from "axios";
import { Link } from "react-router-dom";
import CommentAdd from "./CommentAdd";
import Comment from "./Comment";

export default function Post({
  data = {
    title: "",
    content: "",
    _id: "",
    author: {
      image: "/noimg.png",
      username: "",
    },
    likes: [],
  },
  deletePost = function () {},
  handleUpdateLikes = function () {},
  handleComments = function () {},
  user,
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

  const handleLike = async () => {
    const token = localStorage.getItem("socialToken");

    const response = await axios.post(
      import.meta.env.VITE_BASE_URL + "/posts/handleLike",
      {
        postID: data._id,
        userID: user,
      },
      {
        headers: {
          Authorization: `Bears ${token}`,
        },
        // withCredentials: true
      }
    );
    console.log("🚀 ~ response:", response);

    if (response.data.success) {
      handleUpdateLikes(response.data.post);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-[20px] w-[400px] border-white border-2 rounded-md p-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center w-full cursor-pointer">
        <div>
          <img
            src={data.author.image}
            className="w-[30px] h-[30px] rounded-full"
          />
          <span className="text-sm font-medium">{data.author.username}</span>
        </div>
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
            {user === data.author._id ? (
              <Link to={`/editPost/${data._id}`}>Edit post</Link>
            ) : (
              <Link to="">Edit post</Link>
            )}
          </div>
          <div
            className="p-4 cursor-pointer hover:bg-slate-400"
            onClick={user === data.author._id ? handleDeletePost : null}
          >
            Delete post
          </div>
        </Popover>
      </div>
      <h4>{data.title}</h4>
      <p>{data.content}</p>
      {data.image && (
        <img src={data.image} className="w-[250px] h-[250px] object-cover" />
      )}
      <hr className="text-white w-full border-white border-solid" />
      <p>
        {data.likes.includes(user) ? (
          <FaHeart
            className="text-red-500 text-xl cursor-pointer"
            onClick={handleLike}
          />
        ) : (
          <FaRegHeart
            className="text-red-500 text-xl cursor-pointer"
            onClick={handleLike}
          />
        )}
        {data.likes.length > 0 ? data.likes.length : null}
      </p>
      <hr className="text-white w-full border-white border-solid" />
      <CommentAdd
        postID={data._id}
        userID={user}
        handleAddComment={handleComments}
      />
      <hr className="text-white w-full border-white border-solid" />
      {data.comments.length > 0
        ? data.comments.map((item) => (
            <Comment
              data={item}
              key={item._id}
              postID={data._id}
              handleComments={handleComments}
            />
          ))
        : null}
    </div>
  );
}
