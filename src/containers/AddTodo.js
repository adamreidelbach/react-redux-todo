import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

//an input field with an "Add" button
let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className='addTodo'>
      <form
        onSubmit={e => {
          e.preventDefault()
          //remove white space inside of string
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input
          className='input'
          //ref returns the node we are referencing 
          ref={node => {
            input = node
          }}
        />
        <button className='input' type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo