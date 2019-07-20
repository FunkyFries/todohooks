import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import TodoList from "../TodoList";
import TodoForm from "../TodoForm";
import { TodosProvider } from "../../contexts/todos.context";

const TodoApp: React.FC = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Todos With Hooks</Navbar.Brand>
      </Navbar>
      <Container>
        <Col xs={11} md={8} lg={6} className="mx-auto mt-3">
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Col>
      </Container>
    </div>
  );
};

export default TodoApp;
