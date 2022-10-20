# suffix-array

[![NPM version](https://img.shields.io/npm/v/suffix-array.svg)](https://www.npmjs.com/package/suffix-array)
[![NPM monthly download](https://img.shields.io/npm/dm/suffix-array.svg)](https://www.npmjs.com/package/suffix-array)

> Rename duplicates in an array object

## Installation

```bash
npm install suffix-array
```

### Example

```ts
import {suffixArrayObject} from 'suffix-array';

const arr = [
  {
    name: 'John',
    age: 17,
  },
  {
    name: 'Rudy',
    age: 18,
  },
  {
    name: 'Stella',
    age: 19,
  },
  {
    name: 'Rudy',
    age: 20,
  },
  {
    name: 'John',
    age: 21,
  },
  {
    name: 'Rudy',
    age: 22,
  },
  {
    name: 'Rudy',
    age: 23,
  },
];

suffixArrayObject(arr, 'name', '_{holder}');
```

#### Result

```json
[
  {
    "name": "John",
    "age": 17
  },
  {
    "name": "Rudy",
    "age": 18
  },
  {
    "name": "Stella",
    "age": 19
  },
  {
    "name": "Rudy_1",
    "age": 20
  },
  {
    "name": "John_1",
    "age": 21
  },
  {
    "name": "Rudy_2",
    "age": 22
  },
  {
    "name": "Rudy_3",
    "age": 23
  }
]
```

## License

MIT
