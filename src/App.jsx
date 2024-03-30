//   const addTodo = (text) => {
//     const newTodo = {
//       id: Date.now(),
//       text: text,
//       completed: false,
//     };
//     setTodos([...todos, newTodo]);
//   };

import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodosListPage from "./components/TodosListPage";
import AddTodoPage from "./components/AddTodoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodosListPage />} />
        <Route path="/add" element={<AddTodoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
