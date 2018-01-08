import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

//todoApp from combineReducers
const store = createStore(todoApp)

render(
  //Provider makes store available to every component (App)
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)