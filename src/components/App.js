import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Repo from './Repo'
import '../index.css'

const App = () => (
  <div className='container'>
    <h1>ToDo App</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <Repo />
  </div>
)

export default App