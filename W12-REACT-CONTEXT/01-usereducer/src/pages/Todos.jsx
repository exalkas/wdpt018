import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoProvider";
import { FaEdit } from "react-icons/fa";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  color: "black",
  p: 4,
};

function Todos() {
  const { state, dispatch } = useContext(TodoContext);

  const [open, setOpen] = useState(false);
  const handleOpen = (id) => {
    setTaskToEdit(id);
    setEditText(state[id]);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [taskToEdit, setTaskToEdit] = useState(null);

  const [editText, setEditText] = useState("");

  const [text, setText] = useState("");

  const handleSave = () => {
    dispatch({ type: "EDIT", payload: editText, id: taskToEdit });
    setOpen(false);
  };

  return (
    <div>
      <p>
        <input value={text} onChange={(e) => setText(e.target.value)} />{" "}
        <button onClick={() => dispatch({ type: "ADD", payload: text })}>
          Add
        </button>
      </p>
      <hr />
      <ul>
        {state.map((item, idx) => (
          <div
            className="flex justify-center items-center gap-[10px]"
            key={idx}
          >
            {item}{" "}
            <FaEdit
              className="cursor-pointer"
              onClick={() => handleOpen(idx)}
            />
            <button onClick={() => dispatch({ type: "DELETE", payload: idx })}>
              X
            </button>
          </div>
        ))}
      </ul>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit task
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <input
              style={{
                color: "white",
              }}
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          </Typography>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save task</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Todos;
