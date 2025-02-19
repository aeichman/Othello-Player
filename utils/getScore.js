function getScore(player, board) {
    /**
     * Gets the score of the player
     * Added for possible functionality of predicting opponent's next move
     * @param {number} player - The player number (1 or 2)
     * @param {Array} board - The game board (8x8 array)
     * @return {number} - The score of the player
     */
    let score = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] === player) {
                score += 1;
            }
            else if (board[i][j] === (3 - player)) {
                score -= 1;
            }
        }
    }
    return score;
}

module.exports = { getScore };