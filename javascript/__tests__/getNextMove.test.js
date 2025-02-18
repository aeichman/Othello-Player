const { getNextMove } = require('../utils/getNextMove.js');

test('Returns the row and column of the best possible move (1)', () => {
    const board = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 2, 0, 0, 0],
        [0, 0, 0, 2, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ];

    const expectedResults = [
        [2,4],
        [3,5],
        [4,2],
      ];
    const result = getNextMove(1, board);
    expect(expectedResults).toContainEqual(result);
});


test('Returns the row and column of the best possible move (2)', () => {
    const board = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 2, 0, 0, 0],
        [0, 0, 1, 1, 2, 0, 0, 0],
        [0, 0, 2, 2, 2, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ];

    const result = getNextMove(2, board);
    expect(result).toStrictEqual([3,2]);
});


test('Returns the row and column of the best possible move (3)', () => {
    const board = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 2, 2, 0, 0, 0],
        [0, 0, 2, 2, 1, 1, 0, 0],
        [0, 0, 2, 2, 2, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ];

    const result = getNextMove(1, board);
    expect(result).toStrictEqual([4,1]);
});
