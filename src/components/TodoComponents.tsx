import {TodoComponent} from "./TodoComponent.tsx";
import {useEffect, useState} from "react";
import {ITodo} from "../models/ITodo.ts";
import { getAllTodos } from "../../services/api.service.ts";
import './Todo.css';



export const TodoComponents = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        getAllTodos().then(({todos}) => setTodos(todos))

    }, []);

    return (
        <div className="todo-container">
            {todos.map(todo => <TodoComponent key={todo.id} item={todo} />)}
        </div>
    );
};

