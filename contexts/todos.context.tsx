import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers/todo.reducer";

export const TodosContext = createContext();

export const TodosProvider = (props: any) => {
  const [todos, dispatch] = useReducer(todoReducer, [
    { id: "", task: "", completed: false }
  ]);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
};
