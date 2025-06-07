import TodoInputField from "./TodoInputField";
import TodoItemDisplay from "./TodoItemDisplay";
import style from "./Todo.module.css";
import { useState,useEffect } from "react";

const Todo = () => {

    let [todo, setTodo] = useState(JSON.parse(localStorage.getItem("todo")) || []);


    function random() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';

        for (let i = 0; i < 10; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
        return result
    }

    const onDeleteTask = (index) => {
        let newtodo = [...todo];
        newtodo.splice(index, 1)
        setTodo(newtodo);
        localStorage.setItem("todo",JSON.stringify(newtodo));
    }

    const addTask = (task, date) => {
        let newItem = { id: random(), task: task, date: date };
        let newtodo = [...todo, newItem];
        setTodo(newtodo);
        localStorage.setItem("todo",JSON.stringify(newtodo));
    }

    return <div className={style["todo-app"]}>

        <h1>Todo App</h1>
        <TodoInputField addTask={(task, date) => addTask(task, date)} />
        {todo.map((data, index) => <TodoItemDisplay key={data.id} data={data} index={index} onDelete={(indx) => onDeleteTask(indx)} />)}
    </div>
}

export default Todo;