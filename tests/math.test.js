const { add, divide } = require('../src/math');

describe('add()', () => {
  test('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(499);
  });
  test('handles negative numbers', () => {
    expect(add(-1, 1)).toBe(0);
  });
});

describe('divide()', () => {
  test('divides correctly', () => {
    expect(divide(10, 2)).toBe(5);
  });
  test('throws on divide by zero', () => {
    expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
  });
});