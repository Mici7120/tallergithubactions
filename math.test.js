const {mul, div} = require('./math');

test('mult two numbers', () => {
  expect(mul(4, 2, 7)).toBe(3);
});

test('div two numbers', () => {
  expect(div(14, 2)).toBe(3);
});