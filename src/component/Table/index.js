import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TableHead from './TableHead';
import TableBody from './TableBody';
import './styles.css';

const Table = ({headers, data, searchable = false, sortable = false}) => {
  const [search, setSearch] = useState('');
  const [sortColumn, setSortColumn] = useState(undefined);
  const [sortDirection, setSortDirection] = useState('desc');

  const handleTableSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleTableSort = (column) => {
    setSortColumn(column);
    setSortDirection(sortDirection == 'asc' ? 'desc' : 'asc');
  }

  return <div className="react-table">
    <div className="table-toolbar">
      {searchable &&
        <div className="search-box">
          <label>Search:</label>
          <input type="text" name="search" value={search} onChange={handleTableSearch}/>
        </div>
      }
    </div>
    <table className="table-simple">
      <TableHead
        headers={headers}
        sortable={sortable}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
        handleTableSort={handleTableSort}
      />
      <TableBody
        headers={headers}
        data={data}
        searchable={searchable}
        search={search}
        sortable={sortable}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
      />
    </table>
  </div>
}

Table.propTypes = {
  /**
   * Table headers
  */
  headers: PropTypes.arrayOf(PropTypes.object),
  /**
   * Table data
   */
  data: PropTypes.arrayOf(PropTypes.object),
  /**
   * Is table searchable?
   */
  searchable: PropTypes.bool,
  /**
   * Is table sortable?
   */
  sortable: PropTypes.bool
}

export default Table;