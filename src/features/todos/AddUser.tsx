import * as React from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "./todoListSlice";
import {useState} from "react";

export const AddUser = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({name: null, age: null, id: Math.random() * 1000})
    const handInputChange = (e: React.BaseSyntheticEvent) => {
        setFormData(({...formData, [e.target.name]: e.target.value}));
    }
    const handleAddUser = (e: React.BaseSyntheticEvent) => {
        console.log(addTodo);
        e.preventDefault();
        dispatch(addTodo(formData));
    }
    return (
        <form>
            <div>
                <label htmlFor="name">Name </label>
                <input onChange={handInputChange} type="text" name="name" id="name" />
            </div>
            <div>
                <label htmlFor="age">Age </label>
                <input onChange={handInputChange} type="number" name="age" id="age" />
            </div>
            <button onClick={handleAddUser}>Add User</button>
        </form>
    )
}