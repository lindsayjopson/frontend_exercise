import React from 'react';
import Link from './Link';
import VisibilityFilters from '../VisibilityFilters';

const Filter = ({ currentFilter, updateFilter }) => {
  return (
    <div>
      <span>Show: </span>
      <Link
        active={currentFilter === VisibilityFilters.SHOW_ALL}
        onClick={() => updateFilter(VisibilityFilters.SHOW_ALL)}>
        All
      </Link>
      <Link
        active={currentFilter === VisibilityFilters.SHOW_ACTIVE}
        onClick={() => updateFilter(VisibilityFilters.SHOW_ACTIVE)}>
        Active
      </Link>
      <Link
        active={currentFilter === VisibilityFilters.SHOW_COMPLETED}
        onClick={() => updateFilter(VisibilityFilters.SHOW_COMPLETED)}>
        Completed
      </Link>
    </div>
  )
}

export default Filter
