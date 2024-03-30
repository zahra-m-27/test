import { useState } from "react";
import TodosList from "./TodoList";
import { Button } from "react-bootstrap";
import classes from "./styles.module.css";
import { useNavigate } from "react-router-dom";

function TodosListPage() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy Grocery", completed: false },
    { id: 2, text: "Send Email", completed: false },
  ]);
  const navigate = useNavigate();

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEdit = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todos List</h1>
      <TodosList
        todos={todos}
        handleToggle={handleToggle}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <Button
        className={classes.btn}
        variant="primary"
        onClick={() => navigate("/add")}
      >
        Add Task
      </Button>
    </div>
  );
}

export default TodosListPage;
