import Table from '../component/Table';
import React from 'react';

export default {
  title: 'Components/Table',
  component: Table,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
};

export const Basic = {
  args: {
    headers: [
      {title: 'First Name'},
      {title: 'Last Name'},
      {title: 'BirthDate'},
      {title: 'Age'},
      {title: 'Last Updated'},
      {title: '', searchable: false, sortable: false}
    ],
    data: [{
      rowData: [
        {
          value: 'Sam',
          searchValue: 'Sam',
          sortValue: 'Sam'
        },
        {
          value: 'Snaps',
          sortValue: 'Snaps'
        },
        {
          value: '01/01/1900',
          sortValue: '01/01/1900'
        },
        {
          value: '34'
        },
        {
          value: 'Today'
        },
        {
          value: <button>Update</button>
        }
      ],
      metaData: {}
    }, {
      rowData: [
        {
          value: 'Jane',
          searchValue: 'Jane',
          sortValue: 'Jane'
        },
        {
          value: 'Doe',
          sortValue: 'Doe'
        },
        {
          value: '01/06/1900',
          sortValue: '01/06/1900'
        },
        {
          value: '19'
        },
        {
          value: 'Yesterday'
        },
        {
          value: <button>Update</button>
        }
      ],
      metaData: {}
    }, {
      rowData: [
        {
          value: 'Sam',
          searchValue: 'Sam',
          sortValue: 'Sam'
        },
        {
          value: 'Snaps',
          sortValue: 'Snaps'
        },
        {
          value: '01/01/1900',
          sortValue: '01/01/1900'
        },
        {
          value: '34'
        },
        {
          value: 'Today'
        },
        {
          value: <button>Update</button>
        }
      ],
      metaData: {}
    }, {
      rowData: [
        {
          value: 'Sam',
          searchValue: 'Sam',
          sortValue: 'Sam'
        },
        {
          value: 'Snaps',
          sortValue: 'Snaps'
        },
        {
          value: '01/01/1900',
          sortValue: '01/01/1900'
        },
        {
          value: '34'
        },
        {
          value: 'Today'
        },
        {
          value: <button>Update</button>
        }
      ],
      metaData: {}
    }],
    searchable: true,
    sortable: true
  }
};