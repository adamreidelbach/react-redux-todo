//VisibleTodoList Component
//default state is []

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        //object spread syntax - create copies of objects with new or updated values.
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id) 
          //if condition is true, todo.completed is not false anymore (now true)
          ? {...todo, completed: !todo.completed}
          //else
          : todo
      )
    default:
      return state
  }
}

export default todos