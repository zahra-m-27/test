import { Button, ListGroup, Form } from "react-bootstrap";
import classes from "./styles.module.css";
import { useState } from "react";

function TodosList({ todos, handleToggle, onEdit, onDelete }) {
  const [newText, setNewText] = useState("");
  const [editingId, setEditingId] = useState(null);

  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListGroup.Item key={todo.id}>
          {editingId && todo.id === editingId ? (
            <Form.Control
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
          ) : (
            <Form.Check
              checked={todo.completed}
              type="checkbox"
              onChange={() => handleToggle(todo.id)}
              id={todo.id}
              label={todo.text}
              className={todo.completed ? classes.checked : null}
            />
          )}
          <Button
            variant="warning"
            onClick={
              editingId && todo.id === editingId
                ? () => {
                    onEdit(editingId, newText);
                    setEditingId(null);
                    setNewText("");
                  }
                : () => setEditingId(todo.id)
            }
          >
            {editingId && todo.id === editingId ? "Save" : "Edit"}
          </Button>
          <Button variant="danger" onClick={() => onDelete(todo.id)}>
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TodosList;
