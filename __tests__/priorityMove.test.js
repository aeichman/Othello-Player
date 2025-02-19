const { priorityMove } = require('../utils/priorityMove');

test('Returns the row and column of the best move out of similar moves', () => {
    const board = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 2, 2, 0, 0, 0],
        [0, 2, 2, 1, 1, 1, 0, 0],
        [0, 1, 2, 1, 2, 1, 0, 0],
        [0, 0, 2, 2, 2, 0, 0, 0],
        [0, 0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ];

    const result = priorityMove([[0,0], [3,0], [7,3]]);
    expect(result).toStrictEqual([0,0]);
});


test('Returns the row and column of the best move out of similar moves', () => {
    const board = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 2, 2, 0, 0, 0],
        [0, 2, 2, 1, 2, 1, 0, 0],
        [0, 1, 2, 1, 2, 1, 0, 0],
        [0, 0, 2, 2, 2, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ];

    const result = priorityMove([[3,0], [6,3], [6,5]]);
    expect(result).toStrictEqual([3,0]);
});

test('Returns the row and column of the best move out of similar moves', () => {
    const board = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 2, 2, 1, 1, 0, 0, 0],
        [0, 1, 2, 2, 1, 2, 0, 0],
        [0, 2, 1, 2, 1, 2, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ];

    // const result = priorityMove([[1,0], [1,2], [1,5], [6,5], [6,4], [5,1], [6,1]]);
    const result = priorityMove([[1,0], [1,1], [3,6]]);
    expect(result).toStrictEqual([1,1]);
});

test('Returns the row and column of the best move out of similar moves', () => {
    const board = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 1, 0, 0, 0],
        [0, 0, 2, 2, 1, 0, 0, 0],
        [0, 2, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ];

    const result = priorityMove([[3,2], [2,2], [4,2]]);
    expect(result).toStrictEqual([3,2]);
});


test('Returns the row and column of the best possible move', () => {
    const board = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 2, 1, 0, 2, 0, 0, 0],
        [0, 2, 2, 2, 2, 2, 0, 0],
        [0, 2, 1, 1, 1, 0, 0, 0],
        [0, 2, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ];

    const result = priorityMove([[1,4], [1,0]]);
    expect(result).toStrictEqual([1,4]);
});
