import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

type P = {
  todos: Array<{
    id: string;
    task: string;
    completed: boolean;
  }>;
};

const TodoList: React.FC<P> = props => {
  const { todos } = props;
  return (
    <Container>
      <ListGroup>
        {todos.map(todo => (
          <ListGroup.Item key={todo.id}>{todo.task}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default TodoList;
