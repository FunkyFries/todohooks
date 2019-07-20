import React, { useContext } from "react";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Form from "react-bootstrap/Form";
import FormCheck from "react-bootstrap/FormCheck";
import Button from "react-bootstrap/Button";
import useToggle from "../../hooks/useToggle";
import useInputState from "../../hooks/useInputState";
import { TodosContext } from "../../contexts/todos.context";

type P = {
  task: string;
  completed: boolean;
  id: string;
};

const TodoItem: React.FC<P> = ({ task, completed, id }) => {
  const { dispatch } = useContext(TodosContext);
  const [isEditing, toggleIsEditing] = useToggle(false);
  const [value, handleChange] = useInputState(task);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch({ type: "EDIT", newTask: value, id: id });
    toggleIsEditing();
  };
  return isEditing ? (
    <ListGroupItem>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          className="border-0"
          type="text"
          value={value}
          onChange={handleChange}
          autoFocus
          onBlur={toggleIsEditing}
        ></Form.Control>
      </Form>
    </ListGroupItem>
  ) : (
    <ListGroupItem className="d-flex align-items-baseline">
      <FormCheck
        type="checkbox"
        checked={completed}
        inline
        onChange={() => dispatch({ type: "TOGGLE", id })}
      />
      {completed ? <del>{task}</del> : task}
      <Button
        aria-label="edit"
        variant="outline-dark"
        className="ml-auto mr-2"
        onClick={toggleIsEditing}
      >
        <i className="fas fa-pen" aria-hidden></i>
      </Button>
      <Button
        aria-label="delete"
        variant="outline-dark"
        onClick={() => dispatch({ type: "REMOVE", id })}
      >
        <i className="fas fa-trash" aria-hidden></i>
      </Button>
    </ListGroupItem>
  );
};

export default TodoItem;
