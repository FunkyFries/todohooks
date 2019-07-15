import React from "react";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import FormCheck from "react-bootstrap/FormCheck";
import Button from "react-bootstrap/Button";

type P = {
  task: string;
  completed: boolean;
  id: string;
  removeTodo: any;
  toggleCompletion: any;
};

const TodoItem: React.FC<P> = ({
  task,
  completed,
  id,
  removeTodo,
  toggleCompletion
}) => {
  return (
    <ListGroupItem className="d-flex align-items-baseline">
      <FormCheck
        type="checkbox"
        checked={completed}
        inline
        onChange={() => toggleCompletion(id)}
      />
      {completed ? <del>{task}</del> : task}
      <Button aria-label="edit" variant="outline-dark" className="ml-auto mr-2">
        <i className="fas fa-pen" aria-hidden></i>
      </Button>
      <Button
        aria-label="delete"
        variant="outline-dark"
        onClick={() => removeTodo(id)}
      >
        <i className="fas fa-trash" aria-hidden></i>
      </Button>
    </ListGroupItem>
  );
};

export default TodoItem;
