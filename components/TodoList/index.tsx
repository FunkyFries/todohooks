import React, { useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import TodoItem from "../TodoItem";
import { TodosContext } from "../../contexts/todos.context";

const TodoList: React.FC = () => {
  const { todos } = useContext(TodosContext);
  return (
    <ListGroup>
      {todos.map((todo: any) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ListGroup>
  );
};

export default TodoList;
