const update = require('./index');

test('update increments model by one', () => {
  expect(update('+', 3)).toBe(4);
});

test('update decrements model by one', () => {
  expect(update('-', 8)).toBe(7);
})

test('update return model by default', () => {
  expect(update('/', 5)).toBe(5);
})

test('msg should be + ', () => {
  const msg = '+';
  expect(msg).toMatch(/\+/);
});

test('msg should be - ', () => {
  const msg = '-';
  expect(msg).toMatch(/\-/);
});

