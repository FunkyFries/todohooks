import React from "react";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import FormCheck from "react-bootstrap/FormCheck";
import Button from "react-bootstrap/Button";

type P = {
  task: string;
  completed: boolean;
};

const TodoItem: React.FC<P> = ({ task, completed }) => {
  return (
    <ListGroupItem className="d-flex align-items-baseline">
      <FormCheck type="checkbox" checked={completed} inline />
      {completed ? <del>{task}</del> : task}
      <Button aria-label="edit" variant="outline-dark" className="ml-auto mr-2">
        <i className="fas fa-pen" aria-hidden></i>
      </Button>
      <Button aria-label="delete" variant="outline-dark">
        <i className="fas fa-trash" aria-hidden></i>
      </Button>
    </ListGroupItem>
  );
};

export default TodoItem;
