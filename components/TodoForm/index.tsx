import React from "react";
import Form from "react-bootstrap/Form";
import useInputState from "../../hooks/useInputState";

const TodoForm: React.FC<{ addTodo: any }> = ({ addTodo }) => {
  const [value, handleChange, reset] = useInputState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    addTodo(value);
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
        ></Form.Control>
      </Form.Group>
    </Form>
  );
};

export default TodoForm;
