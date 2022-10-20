const {suffixArrayObject} = require('./index');

test('just works', () => {
  expect(
    suffixArrayObject(
      [
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
      ],
      'name',
      '__{holder}'
    )
  ).toMatchObject([
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
      name: 'Rudy__1',
      age: 20,
    },
    {
      name: 'John__1',
      age: 21,
    },
    {
      name: 'Rudy__2',
      age: 22,
    },
    {
      name: 'Rudy__3',
      age: 23,
    },
  ]);
});
