import React from 'react';
import classnames from 'classnames';

const TableFooter = ({navigatePage, pageSize, totalRecords = 0, currentPage = 1}) => {
  return <div className="react-table-footer">
    <div className="footer-record-count">
      {totalRecords == 0 ? 0 : ((currentPage - 1) * pageSize) + 1} - {pageSize * currentPage >= totalRecords ? totalRecords : pageSize * currentPage} / {totalRecords} records
    </div>
    <div className="footer-pagination">
      <button className={classnames('page-left', {'is-active': currentPage > 1})} onClick={() => (currentPage > 1 ? navigatePage('previous') : undefined)}></button>
      <button className={classnames('page-right', {'is-active': currentPage < Math.ceil(totalRecords / pageSize)})} onClick={() => (currentPage < Math.ceil(totalRecords / pageSize) ? navigatePage('next') : undefined)}></button>
    </div>      
  </div>
}

export default TableFooter;