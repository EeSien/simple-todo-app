import React from 'react'
import './App.css'
import { Todo } from './interface'
import { ToggleTodo } from './types'

interface Props {
  todo: Todo
  toggleTodo: ToggleTodo
}

const Items: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
   <div>
    <label
      style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
    >
      <input type="checkbox" checked={todo.complete} onClick={() => { toggleTodo(todo) }} />
     Task: {todo.text}
    </label>
    <br>
    </br>
    <label
      style={{
        textDecoration: todo.complete ? 'line-through' : undefined,
        paddingLeft: '20px'
      }}
    >
     Expected finish date: {todo.date}
    </label>
    </div>
  )
}

export default Items
