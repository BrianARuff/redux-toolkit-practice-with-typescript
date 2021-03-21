import * as React from "react";
import { useSelector, useDispatch} from "react-redux";
import {addTodo, selectTodos} from "./todoListSlice";
import {AddUser} from "./AddUser";

export function TodoList() {
    const todos = useSelector(selectTodos);
    return (
        <>
            {todos.map((todo:{id: number, name: string, age: number}) => (
                <li key={todo.id}>{todo.name}-{todo.age}</li>
            ))}
            <AddUser />
        </>
    )
}