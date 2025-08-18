import React from 'react';

const TableBody = ({headers, data, searchable, search, sortable, sortColumn, sortDirection, noRecordsText}) => {
  const filterAndSortData = (data) => {
    let filteredAndSortedData = [...data];

    // search filter
    if (searchable && search != '') {
      filteredAndSortedData = filteredAndSortedData.filter(item => { 
        const lowercaseSearch = search.toLowerCase();

        return item.rowData.some((s, index) => {
          // bypass search for non searchable columns
          if ('searchable' in headers[index] && headers[index].searchable == false)
            return false;
      
          // use search value if specified
          if ('searchValue' in s)
            return s.searchValue.toLowerCase().includes(lowercaseSearch);
          
          // search on base data
          return s.value.toLowerCase().includes(lowercaseSearch);
        });
      });
    }

    // sort filter
    if (sortable && sortColumn != undefined) {
      filteredAndSortedData.sort(function(a, b) {
        const aValue = 'sortValue' in a.rowData[sortColumn]
          ? a.rowData[sortColumn].sortValue
          : a.rowData[sortColumn].value;
        const bValue = 'sortValue' in b.rowData[sortColumn]
          ? b.rowData[sortColumn].sortValue
          : b.rowData[sortColumn].value;

        if (aValue < bValue) {
          if (sortDirection == 'asc') return -1;
          if (sortDirection == 'desc') return 1;
        }
        else {
          if (sortDirection == 'asc') return 1;
          if (sortDirection == 'desc') return -1; 
        }
      });
    }

    return filteredAndSortedData;
  }

  const filteredAndSortedData = filterAndSortData(data);

  if (filteredAndSortedData.length == 0)
    return <tbody>
      <tr>
        <td colspan="100%" style={{textAlign: 'center'}}>{noRecordsText}</td>
      </tr>
    </tbody>

  return <tbody>
    {filteredAndSortedData.map((row, i) => {    
      return <tr key={i}>
        {row.rowData.map((item, j) => {
          return <td key={j}>{item.value}</td>
        })}
      </tr>
    })}
  </tbody>
}

export default TableBody;