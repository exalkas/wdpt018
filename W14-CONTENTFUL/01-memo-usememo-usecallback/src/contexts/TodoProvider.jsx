import { createContext, useReducer, useState } from "react";

export const TodoContext = createContext();

export default function TodoProvider({ children }) {
  // const [todos, setTodos] = useState([])

  const reducer = (currentState, action) => {
    switch (action.type) {
      case "ADD":
        return [...currentState, action.payload];

      case "DELETE":
        console.log(action);
        {
          //   const oldArray = [...currentState];
          //   oldArray.splice(action.payload, 1);
          //   console.log("🚀 ~ oldArray:", oldArray);

          return currentState.filter((item, idx) => idx !== action.payload);
        }

      case "EDIT":
        currentState[action.id] = action.payload;

        return currentState;
      default:
        currentState;
    }
  };

  const [state, dispatch] = useReducer(reducer, []);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
