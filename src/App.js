import { useState } from 'react';
import Header from "./components/Headers/Header";
import './app.scss';
import Form from "./components/Form/Form";
import Todolist from "./components/TodoList/Todolist";

export default function App() {
  const [todos, setTodos] = useState([]);
  return (
    <section className="todo">
      <Header text="New task" />
      <Form setTodos={setTodos} todos={todos} />
      <Header text="List tasks" />
      <Todolist setTodos={setTodos} todos={todos} />
    </section>
  )
}