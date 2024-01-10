import React, { useContext } from "react";
import { EditorContext } from "../contexts/EditorContext";

export default function Editor() {
  const { editorState, editorDispatch } = useContext(EditorContext);

  console.log("editorstate is:", editorState);
  return (
    <div>
      <textarea
        value={editorState.text}
        onChange={(e) =>
          editorDispatch({ type: "EDIT", payload: e.target.value })
        }
        placeholder="type your text"
      ></textarea>
      <div>
        <button onClick={() => editorDispatch({ type: "UNDO" })}>Undo</button>
        <button onClick={() => editorDispatch({ type: "REDO" })}>Redo</button>
      </div>
    </div>
  );
}
