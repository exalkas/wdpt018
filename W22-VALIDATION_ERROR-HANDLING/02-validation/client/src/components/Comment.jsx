import { useState } from "react";
import Popover from "@mui/material/Popover";
import { GoKebabHorizontal } from "react-icons/go";
import axios from "axios";
export default function Comment({
  data = {
    text: "",
    _id: "",
  },
  postID,
  handleComments = () => {},
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [editable, setEditable] = useState(false);
  const [text, setText] = useState(data.text);

  const handleDeleteComment = async () => {
    const response = await axios.delete(
      import.meta.env.VITE_BASE_URL +
        `/posts/comments/delete/${postID}/${data._id}`
    );

    console.log("🚀 ~ response:", response);

    if (response.data.success) handleComments(response.data.post);
  };

  const handleSaveComment = async () => {
    const response = await axios.patch(
      import.meta.env.VITE_BASE_URL + `/posts/comments/edit`,
      {
        postID,
        commentID: data._id,
        text,
      }
    );

    console.log("🚀 ~ response:", response);
    if (response.data.success) {
      handleComments(response.data.post);
      setEditable(false);
      setAnchorEl(null);
    }
  };
  return (
    <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 w-full">
      {editable ? (
        <>
          <textarea
            id="chat"
            rows="1"
            className="resize-none block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          <button
            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
            onClick={() => setEditable(false)}
          >
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.348 4.651a1 1 0 00-1.414-1.414L10 6.171 7.066 3.237a1 1 0 10-1.414 1.414L8.586 7.585 5.652 10.52a1 1 0 101.414 1.414L10 8.999l2.934 2.935a1 1 0 001.414-1.414L11.414 7.585l2.934-2.934z" />
            </svg>
          </button>
          {/* Save button */}
          <button
            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
            onClick={handleSaveComment}
          >
            <svg
              aria-hidden="true"
              className="w-6 h-6 rotate-90"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
            <span className="sr-only">Send message</span>
          </button>
        </>
      ) : (
        <>
          <textarea
            id="chat"
            rows="1"
            disabled
            value={data.text}
            className="block resize-none mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="This is a comment..."
          ></textarea>
          <div className="grow flex justify-end">
            <button className="cursor-pointer">
              <GoKebabHorizontal
                onClick={(e) => setAnchorEl(e.currentTarget)}
                className="text-slate-500"
              />
              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <p
                  className="p-4 cursor-pointer hover:bg-slate-400"
                  onClick={() => setEditable(true)}
                >
                  Edit comment
                </p>
                <p
                  className="p-4 cursor-pointer hover:bg-slate-400"
                  onClick={handleDeleteComment}
                >
                  Delete comment
                </p>
              </Popover>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
