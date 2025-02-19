const { flipCount } = require('../utils/flipCount');
const { priorityMove } = require('./priorityMove');

function getNextMove(player, board) {
    /**
     * Get the next move for the player
     * @param {number} player - The player number (1 or 2)
     * @param {Array} board - The game board (8x8 array)
     * @return {String} - The x and y coordinates of the next move as a string
     */
    let bestMove = [0, 0];
    let bestMoves = [];
    let bestScore = 0;
    let diskCount = 4;

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {

            const score = flipCount(player, board, i, j);

            if ( board[i][j] != 0) {
                diskCount++;
            }
            
            if (score > 0) {
                const newBoard = JSON.parse(JSON.stringify(board));
                newBoard[i][j] = player;
                
                if (score >= bestScore) {
                    bestMoves.push([i,j])
                    bestScore = score; 
                    bestMove = [i, j]; 
                }
            }
        }
        
    }


    return priorityMove(bestMoves);
    // return bestMove;
}

module.exports = { getNextMove };