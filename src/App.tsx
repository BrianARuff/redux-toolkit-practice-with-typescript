import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { TodoList } from "./features/todos/TodoList";
import './App.css';

function App() {
  return (
    <div>
      <TodoList />
    </div>
  );
}

export default App;
