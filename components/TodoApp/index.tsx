import React from "react";
import Navbar from "react-bootstrap/Navbar";
import TodoList from "../TodoList";

const TodoApp: React.FC = () => {
  const seedTodos = [
    { id: "1", task: "Clean fish", completed: false },
    { id: "2", task: "Wash car", completed: false },
    { id: "3", task: "Grow beard", completed: false }
  ];
  const [todos, setTodos] = React.useState(seedTodos);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Todos With Hooks</Navbar.Brand>
      </Navbar>
      <TodoList todos={todos}></TodoList>
    </div>
  );
};

export default TodoApp;
