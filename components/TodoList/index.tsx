import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import TodoItem from "../TodoItem";

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
    <ListGroup>
      {todos.map(todo => (
        <TodoItem task={todo.task} key={todo.id} completed={todo.completed} />
      ))}
    </ListGroup>
  );
};

export default TodoList;
