import React, { useEffect, useState } from 'react'
import { TodoType } from '../types/todo';
import Todo from './Todo';

function isTodo(todo: any) {
    console.log(typeof todo.completed);

    return typeof todo === 'object' && todo !== null
        && typeof todo.userId === "number" && typeof todo.id === 'number'
        && typeof todo.title === "string" && typeof todo.completed === "boolean"
}

export default function Todolist(): JSX.Element {
    const [todos, setTodos] = useState<TodoType[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then((data: TodoType[]) => {
                setTodos(data)
            });
    }, [])


    return (
        <div>
            <h1>TodoList</h1>
            <form>
                <input />
                <button>ADD Todo</button>
            </form>
            <div className='todos'>
                {todos.map(todo =>
                    <Todo key={todo.id} todo={todo} />
                )}
            </div>
        </div>
    )
}
