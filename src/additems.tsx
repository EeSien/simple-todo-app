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
        <div>
          <label style={{ paddingRight: '5px' }}>
            Task :
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
            required = {true}
          />
        </div>
        <div>
          <label style={{ paddingRight: '5px' }}>
            Expected finish date :
          </label>
            <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value)
            }}
            required ={true}
          />
        </div>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            addTodo(text, date)
            setText('')
            setDate('')
          }}
        >
          Add
        </button>
      </form>
  )
}
