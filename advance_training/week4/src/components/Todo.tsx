import React from 'react'
import { TodoType } from '../types/todo'

type TodoProps = {
    todo: TodoType
}


export default function Todo({ todo }: TodoProps) {
    const { title, id } = todo;
    return (
        <div>
            <h3>{id} {title}</h3>
        </div>
    )
}
