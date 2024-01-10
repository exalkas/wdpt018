### Text Editor Undo/Redo Exercise

**Objective**: Build a simple text editor with undo and redo functionality using `useReducer` and the Context API.

#### Setup:

1. Create a new React application using `create-react-app` or `vite`.

#### Task Steps:

1. **Creating Context**:

   1. In a folder named `contexts`, create a file `EditorContext.js`.
   2. Use `createContext()` to create an Editor context and export it.

2. **Creating Reducer**:

   1. Inside `EditorContext.js`, define an initial state with properties for the current text, and stacks for undo and redo operations.
   2. Create an `editorReducer` function that handles `EDIT`, `UNDO`, and `REDO` actions.
   3. Export the `editorReducer` function.

3. **Creating Context Provider**:

   1. In `EditorContext.js`, create an `EditorProvider` component.
   2. Utilize the `useReducer` hook to manage the editor state based on the `editorReducer`.
   3. Provide the editor state and dispatch function to the context's children using `EditorContext.Provider`.

4. **Creating Text Editor Components**:

   1. Create a new component `TextEditor.js`.
   2. Inside `TextEditor.js`, use `useContext` to consume `EditorContext`.
   3. Display a textarea for text input and buttons for undo and redo operations.

5. **Integrating Components**:

   1. In `App.js`, import `EditorProvider` and `TextEditor`.
   2. Wrap your application with `EditorProvider`.
   3. Include `TextEditor` inside `EditorProvider` to provide text editing functionality.
