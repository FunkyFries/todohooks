import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import TodoItem from "../TodoItem";

type P = {
  todos: Array<{
    id: string;
    task: string;
    completed: boolean;
  }>;
  removeTodo: any;
  toggleCompletion: any;
};

const TodoList: React.FC<P> = ({ todos, removeTodo, toggleCompletion }) => {
  return (
    <ListGroup>
      {todos.map(todo => (
        <TodoItem
          task={todo.task}
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          removeTodo={removeTodo}
          toggleCompletion={toggleCompletion}
        />
      ))}
    </ListGroup>
  );
};

export default TodoList;
