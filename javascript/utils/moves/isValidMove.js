function isValidMove(player, board, row, col) {
    /**
     * Checks if the move is valid and would benifit the players score
     * @param {number} player - The player number (1 or 2)
     * @param {Array} board - The game board (8x8 array)
     * @param {number} row - The x coordinate of the move 
     * @param {number} col - The y coordinate of the move
     */

    const directions = [ [1, 0], [0, 1], [1, 1], [-1, 0], [0, -1], [-1, -1], [-1, 1], [1, -1] ];

    if (board[row][col] !== 0) {
        return false;
    }

    const opponent = 3 - player; 

    for (let [dx, dy] of directions) {
        let i = row + dx;
        let j = col + dy;
        let hasOpponentBetween = false;         // Only true if move would increase player's score

        
        while (i >= 0 && i < 8 && j >= 0 && j < 8) { 
            if (board[i][j] === opponent) {
                hasOpponentBetween = true;
            } else if (board[i][j] === player && hasOpponentBetween) {
                return true;
            } else {
                break;
            }
            i += dx;
            j += dy;
        }
    }

    return false;
}
module.exports = { isValidMove };