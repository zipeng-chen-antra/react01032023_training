import React from 'react'
import { TodoType } from '../types/todo'

type TodoProps = {
    todo: TodoType
}


export default function Todo({ todo }: TodoProps) {
    const { title } = todo;
    return (
        <div>
            <h3>{title}</h3>
        </div>
    )
}
