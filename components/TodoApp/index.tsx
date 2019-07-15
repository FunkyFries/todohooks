import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import TodoList from "../TodoList";
import TodoForm from "../TodoForm";
import uuid from "uuid/v4";

const TodoApp: React.FC = () => {
  const seedTodos = [
    { id: "1", task: "Clean fish", completed: false },
    { id: "2", task: "Wash car", completed: true },
    { id: "3", task: "Grow beard", completed: false }
  ];
  const [todos, setTodos] = React.useState(seedTodos);

  const addTodo = (newTask: string) => {
    setTodos([...todos, { id: uuid(), task: newTask, completed: false }]);
  };

  const removeTodo = (todoId: string) => {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const toggleCompletion = (todoId: string) => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Todos With Hooks</Navbar.Brand>
      </Navbar>
      <Container>
        <Col xs={11} md={8} lg={6} className="mx-auto mt-3">
          <TodoForm addTodo={addTodo}></TodoForm>
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleCompletion={toggleCompletion}
          />
        </Col>
      </Container>
    </div>
  );
};

export default TodoApp;
