import React, { createContext, useReducer, useEffect } from "react";
import todoReducer from "../reducers/todo.reducer";

export const TodosContext = createContext([]);
export const DispatchContext = createContext({});

export const TodosProvider = (props: any) => {
  const [todos, dispatch] = useReducer(todoReducer, [
    { id: "", task: "", completed: false }
  ]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    dispatch({
      type: "SET",
      storedTodos: storedTodos !== null ? JSON.parse(storedTodos) : []
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
};
