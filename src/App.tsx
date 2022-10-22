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
    if (text !== '' && date !== '') {
      const newTodo = { text, complete: false, date }
      setTodos([...todos, newTodo])
    } else {
      alert('Please insert task name an date')
    }
  }

  return (
    <>
      <div id="container">
        <div className="flex" style={{ width: '25%' }}>
          <TodoList todos={todos} toggleTodo={toggleTodo} />
        </div>
        <div className="flex" style={{ width: '50%' }}>
          <AddTodoForm addTodo={addTodo} />
        </div>
      </div>
    </>
  )
}

export default App
