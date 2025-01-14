import {TodoComponent} from "./TodoComponent.tsx";
import {useEffect, useState} from "react";
import {ITodo} from "../models/ITodo.ts";

export const TodoComponents = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(value => value.json())
            .then((data: ITodo[]) => setTodos(data));
    }, []);

    return (
        <div className="todo-container">
            {todos.map(todo => <TodoComponent key={todo.id} item={todo} />)}
        </div>
    );
};
