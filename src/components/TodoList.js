import React, { useState } from 'react';
import AddTodo from './AddTodo';
import Filter from './Filter';
import TodoItems from './TodoItems';
import VisibilityFilters from '../VisibilityFilters';

let nextTodoId = 0

const TodoList = () => {
  const [visibilityFilter, setVisibilityFilter] = useState(VisibilityFilters.SHOW_ALL)
  const [todos, updateTodos] = useState([])
  const addTodo = (todo) => {
    updateTodos((current) => {
      return [
        ...current,
        {
          id: nextTodoId++,
          text: todo,
          completed: false
        }
      ]
    })
  }
  const toggleTodo = (todoId) => {
    updateTodos((current) => {
      return current.map(todo =>
        (todo.id === todoId) ? {...todo, completed: !todo.completed} : todo
      )
    })
  }

  return (
    <div>
      <AddTodo addTodo={addTodo}/>
      <Filter currentFilter={visibilityFilter} updateFilter={setVisibilityFilter} />
      <TodoItems todos={todos} filter={visibilityFilter} toggleTodo={toggleTodo} />
    </div>
  )
}

export default TodoList
