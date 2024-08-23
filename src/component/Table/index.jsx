import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import './styles.css';

const Table = ({headers, data, searchable = false, sortable = false, totalRecords, pageSize = 50, showLoader = false, fetchData}) => {
  const [search, setSearch] = useState('');
  const [sortColumn, setSortColumn] = useState(undefined);
  const [sortDirection, setSortDirection] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);

  const handleTableSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleTableSort = (column) => {
    setSortColumn(column);
    setSortDirection(sortDirection == 'asc' ? 'desc' : 'asc');
  }

  const handleNavigatePage = (direction) => {
    if (!fetchData) return;

    const args = {pageSize: pageSize, sortColumn: sortColumn, sortDirection: sortDirection};
    if (direction == 'previous') {
      fetchData(currentPage - 1, args);
      setCurrentPage(currentPage - 1);
    } else if (direction == 'next') {
      fetchData(currentPage + 1, args);
      setCurrentPage(currentPage + 1);
    }
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
    <TableFooter
      navigatePage={handleNavigatePage}
      currentPage={currentPage}
      pageSize={pageSize}
      totalRecords={totalRecords}
    />
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
  sortable: PropTypes.bool,
  /**
   * Total records in the table
   */
  totalRecords: PropTypes.number,
  /**
   * Page size of table records
   */
  pageSize: PropTypes.number,
  /**
   * Fetch data function for pagination
   */
  fetchData: PropTypes.func,
  /**
   * Show loader when paging between datasets
   */
  showLoader: PropTypes.bool
}

export default Table;