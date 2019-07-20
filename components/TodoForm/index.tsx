import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import useInputState from "../../hooks/useInputState";
import { TodosContext } from "../../contexts/todos.context";

const TodoForm: React.FC = () => {
  const [value, handleChange, reset] = useInputState("");
  const { dispatch } = useContext(TodosContext);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch({ type: "ADD", task: value });
    reset();
  };
  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group controlId="todoForm">
        <Form.Label>Add a Todo</Form.Label>
        <Form.Control
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Todo"
          autoComplete="off"
        ></Form.Control>
      </Form.Group>
    </Form>
  );
};

export default TodoForm;
