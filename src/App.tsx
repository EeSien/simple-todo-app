/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'
import { Todo } from './interface'
import { TodoList } from './todolist'
import { AddTodoForm } from './additems'
import { AddTodo } from './types'

const initialData: Todo[] = [
  {
    text: 'Write the code',
    complete: true,
    date: '2022-02-02'
  },
  {
    text: 'Clean up the code',
    complete: false,
    date: '2022-02-02'
  }
]

function App () {
  const [todos, setTodos] = useState(initialData)

  const toggleTodo = (selectedTodo: Todo) => {
    // To map the data and check if it is done
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete // To uncheck
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const addTodo: AddTodo = (text: string, date: string) => {
    const newTodo = { text, complete: false, date }
    setTodos([...todos, newTodo])
  }

  return (
  <>
    <TodoList todos={todos} toggleTodo={toggleTodo} />
    <AddTodoForm addTodo={addTodo} />
  </>
  )
}

export default App
