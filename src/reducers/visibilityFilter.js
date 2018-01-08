//Footer Component
//default state is 'SHOW_ALL'

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      //filter is either 'SHOW_COMPLETED', 'SHOW_ACTIVE', or 'SHOW_ALL'
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter