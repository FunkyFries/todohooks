import { useState, useEffect } from "react";
import uuid from "uuid/v4";

export default () => {
  const [todos, setTodos] = useState([{ id: "", task: "", completed: false }]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    setTodos(storedTodos !== null ? JSON.parse(storedTodos) : []);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    setTodos,
    addTodo: (newTask: string) => {
      setTodos([...todos, { id: uuid(), task: newTask, completed: false }]);
    },
    removeTodo: (todoId: string) => {
      const updatedTodos = todos.filter((todo: any) => todo.id !== todoId);
      setTodos(updatedTodos);
    },
    toggleCompletion: (todoId: string) => {
      const updatedTodos = todos.map((todo: any) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    },
    editTodo: (todoId: string, newTask: string) => {
      const updatedTodos = todos.map((todo: any) =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
      setTodos(updatedTodos);
    }
  };
};
