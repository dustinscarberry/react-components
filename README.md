# react-components
An assortment of React form components and other helpers.

## Development Status
Currently in alpha.

## Website
[https://www.dscarberry.com/react-components/](https://www.dscarberry.com/react-components/)

## Installation
```bash
yarn add @dustinscarberry/react-components
```

## Example
```jsx static
import React from 'react';
import { SelectBox } from '@dustinscarberry/react-components';
import '@dustinscarberry/react-components/dist/index.css';

const App = () => {
  return <SelectBox
    name="inputName"
    value={1}
    options={[
      {key: 1, value: 'One'},
      {key: 2, value: 'Two'},
      {key: 3, value: 'Three'}
    ]}
    includeBlank={true}
    onChange={undefined}
  />
}
```