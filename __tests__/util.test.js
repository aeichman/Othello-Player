const { getNextMove } = require('./utils/getNextMove');

test('returns a valid response', () => {
  expect(util.prepareResponse([2, 3])).toEqual(`[2,3]\n`);
});
