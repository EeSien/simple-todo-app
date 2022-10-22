import React from 'react'
import Items from './todolistitem'
import { Todo } from './interface'
import { ToggleTodo } from './types'

interface Props {
  todos: Todo[]
  toggleTodo: ToggleTodo
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Items key={todo.text} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  )
}
