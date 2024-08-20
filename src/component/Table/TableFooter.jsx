import React from 'react'

const TableFooter = ({navigateNextPage, navigatePreviousPage, pageSize, totalRecords, currentPage = 1}) => {
  return <div className="react-table-footer">
    <div className="footer-record-count">
      1 - 50 / {totalRecords} records
    </div>
    <div className="footer-pagination">
      <button className="page-left" onClick={() => (currentPage > 1 ? navigatePreviousPage(currentPage - 1, 1) : undefined)}></button>
      <button className="page-right" onClick={() => (currentPage < Math.ceil(totalRecords / pageSize) ? navigateNextPage(currentPage + 1, 1) : undefined)}></button>
    </div>      
  </div>
}

export default TableFooter;