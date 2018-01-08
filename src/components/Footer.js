import React from 'react'
import FilterLink from '../containers/FilterLink'

//where the user can change currently visible todos
const Footer = () => (
  <p>
    Show:
    {/* add space between strings */}
    {' '}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
)

export default Footer