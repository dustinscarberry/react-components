import React from 'react'
import classnames from 'classnames';

const TableHead = ({headers, sortable, sortColumn, sortDirection, handleTableSort}) => {
  return <thead>
    <tr>
      {headers.map((header, i) => {
        const isSortable = sortable && ('sortable' in header && header.sortable != false || !('sortable' in header));

        return <th
          key={i}
          className={
            classnames({
              'is-active': i == sortColumn,
              'sort-asc': sortDirection == 'asc' && i == sortColumn,
              'sort-desc': sortDirection == 'desc' && i == sortColumn
            })
          }
          onClick={isSortable ? () => handleTableSort(i) : undefined}
        >
          {header.title}
          {isSortable &&
            <button className="sort-handle"></button>
          }
        </th>
      })}
    </tr>
  </thead>
}

export default TableHead;