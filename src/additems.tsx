import React, { useState } from 'react'
import { AddTodo } from './types'

interface Props {
  addTodo: AddTodo
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('')
  const [date, setDate] = useState('')
  return (
      <form>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
        />
          <input
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value)
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            addTodo(text, date)
            setText('')
            setDate('')
          }}
        >
          Add Todo
        </button>
      </form>
  )
}
