const updateValue = require('./index');

test('updateValue increments initial value by one', () => {
  expect(updateValue('+', 3)).toBe(4);
});

test('updateValue decrements initial value by one', () => {
  expect(updateValue('-', 8)).toBe(7);
})

test('updateValue return initial value by default', () => {
  expect(updateValue('/', 5)).toBe(5);
})

test('msg should be + ', () => {
  const msg = '+';
  expect(msg).toMatch(/\+/);
});

test('msg should be - ', () => {
  const msg = '-';
  expect(msg).toMatch(/\-/);
});

