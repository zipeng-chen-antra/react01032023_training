import React, { ChangeEvent, ChangeEventHandler, FormEvent, MouseEvent, MouseEventHandler, useEffect, useState } from 'react'
import { TodoType } from '../types/todo';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';


export default function Todolist(): JSX.Element {
    const [todos, setTodos] = useState<TodoType[]>([]);
    const [inputTitle, setInputTitle] = useState<string>("");


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then((data: TodoType[]) => {
                setTodos(data.slice(0, 5))
            });
    }, [])

    function handleClick(e:MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setTodos(prev => [...prev, { title: inputTitle, userId: 1, completed: false, id: uuidv4() }])
    }

    // const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    //     e.preventDefault();
    //     setTodos(prev => [...prev, { title: inputTitle, userId: 1, completed: false, id: uuidv4() }])
    // }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setInputTitle(e.target.value);
    }

    // function handleSubmit(e: FormEvent<HTMLFormElement>) {
    //     setTodos(prev => [...prev, { title: inputTitle, userId: 1, completed: false, id: uuidv4() }])
    // }

    return (
        <div>
            <h1>TodoList</h1>
            <form>
                <input value={inputTitle} onChange={handleChange} />
                {/* <button>ADD Todo</button> */}
                <button onClick={handleClick}>ADD Todo</button>
            </form>
            <div className='todos'>
                {todos.map(todo =>
                    <Todo key={todo.id} todo={todo} />
                )}
            </div>
        </div>
    )
}
