import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from "../features/todos/todoListSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer
  },
});