import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import TodoList from "../TodoList";
import TodoForm from "../TodoForm";

const TodoApp: React.FC = () => {
  const seedTodos = [
    { id: "1", task: "Clean fish", completed: false },
    { id: "2", task: "Wash car", completed: true },
    { id: "3", task: "Grow beard", completed: false }
  ];
  const [todos, setTodos] = React.useState(seedTodos);
  const addTodo = (newTask: string) => {
    setTodos([...todos, { id: "4", task: newTask, completed: false }]);
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Todos With Hooks</Navbar.Brand>
      </Navbar>
      <Container>
        <Col xs={11} md={8} lg={6} className="mx-auto mt-3">
          <TodoForm addTodo={addTodo}></TodoForm>
          <TodoList todos={todos}></TodoList>
        </Col>
      </Container>
    </div>
  );
};

export default TodoApp;
