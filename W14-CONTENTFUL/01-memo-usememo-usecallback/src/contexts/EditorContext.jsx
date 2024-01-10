import { createContext, useReducer } from "react";

export const EditorContext = createContext();

export default function EditorProvider({ children }) {
  const editorReducer = (currentState, action) => {
    switch (action.type) {
      case "EDIT":
        console.log("edit here", action.payload);
        return {
          ...currentState,
          text: action.payload,
          undoArray: [currentState.text, ...currentState.undoArray],
        };
      case "UNDO": {
        if (currentState.undoArray.length === 0) return currentState;
        // const [,...restUndo] = currentState.undoArray
        // const newUndo = [...currentState.undoArray];

        // const newItem = newUndo.shift();
        const [newText, ...newUndo] = currentState.undoArray;
        return {
          ...currentState,
          //   put the first in the text
          text: newText,
          //   remove the first from undo and add it to redo
          undoArray: [...newUndo],
          redoArray: [currentState.text, ...currentState.redoArray],
        };
      }
      case "REDO": {
        if (currentState.redoArray.length === 0) return currentState;

        const [redoText, ...newRedo] = currentState.redoArray;
        // const [, ...newRedo] = [...currentState.redoArray];

        // const newItem =
        console.log("🚀 ~ newRedo:", newRedo);

        return {
          ...currentState,
          //   put the first in the text
          text: redoText,
          undoArray: [currentState.text, ...currentState.undoArray],

          redoArray: [...newRedo],
        };
      }

      default:
        return currentState;
    }
  };

  const [editorState, editorDispatch] = useReducer(editorReducer, {
    text: "",
    undoArray: [],
    redoArray: [],
  });
  return (
    <EditorContext.Provider value={{ editorState, editorDispatch }}>
      {children}
    </EditorContext.Provider>
  );
}
