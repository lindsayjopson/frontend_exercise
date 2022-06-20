import React from 'react';

import Todo from './Todo';
import VisibilityFilters from '../VisibilityFilters';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
const TodoItems = ({ filter, todos, toggleTodo }) => {
  const visibleTodos = getVisibleTodos(todos, filter)

  return (
    <ul>
      {visibleTodos.sort((a, b) => (a.text < b.text ? -1 : 0)).map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
        />
      )}
    </ul>
  )
}

export default TodoItems
