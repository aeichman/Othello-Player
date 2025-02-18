function flipCount(player, board, row, col) {
    /**
     * Checks all possible moves at a certain position and returns the count of best 
     * If flipCount is greater than 0, the move is valid
     * @param {number} player - The player number (1 or 2)
     * @param {Array} board - The game board (8x8 array)
     * @param {number} row - The x coordinate of the move 
     * @param {number} col - The y coordinate of the move
     * @return {number} - The number of pieces that would be flipped if the move is played
     */

    const directions = [ [1, 0], [0, 1], [1, 1], [-1, 0], [0, -1], [-1, -1], [-1, 1], [1, -1] ];

    if (board[row][col] !== 0) {
        return 0;
    }

    const opponent = 3 - player; 
    let totalFlipped = 0;

    for (let [dx, dy] of directions) {
        let i = row + dx;
        let j = col + dy;
        let flipped = 0;
         
        while (i >= 0 && i < 8 && j >= 0 && j < 8) { 
            if (board[i][j] === opponent) {
                flipped++;
            } else if (board[i][j] === player) {
                totalFlipped += flipped;
                break;
            } else {
                break;
            }
            i += dx;
            j += dy;

        }
    }

    return totalFlipped;
}
module.exports = { flipCount };