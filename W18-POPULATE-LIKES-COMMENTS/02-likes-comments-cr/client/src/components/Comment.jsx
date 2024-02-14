import { useState } from "react";
import Popover from "@mui/material/Popover";
import { GoKebabHorizontal } from "react-icons/go";
export default function Comment({ data }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  return (
    <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 w-full">
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
            <p className="p-4 cursor-pointer hover:bg-slate-400">
              Edit comment
            </p>
            <p className="p-4 cursor-pointer hover:bg-slate-400">
              Delete comment
            </p>
          </Popover>
        </button>
      </div>
    </div>
  );
}
