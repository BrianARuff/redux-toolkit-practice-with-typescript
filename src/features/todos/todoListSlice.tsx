import {
    createSlice, PayloadAction, Draft
} from "@reduxjs/toolkit";

export const todoSlice =
  createSlice({
    name: "todos",
    initialState: {
      users: [
        { name: "Brian", age: 32, id: 0 },
        { name: "Shawn", age: 40, id: 1 },
        { name: "Doris", age: 65, id: 2 },
      ],
    },
      reducers: {
        addTodo: (state: Draft<any>, action: PayloadAction<any>) => {
            console.log(state.users.push(action.payload));
        }
      }
  });

// @ts-ignore
export const { addTodo } = todoSlice.actions;

// @ts-ignore
export const selectTodos = state => state.todos.users;

export default todoSlice.reducer;