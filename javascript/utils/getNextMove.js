const { flipCount } = require('../utils/flipCount');




function getNextMove(player, board) {
    /**
     * Get the next move for the player
     * @param {number} player - The player number (1 or 2)
     * @param {Array} board - The game board (8x8 array)
     * @return {String} - The x and y coordinates of the next move as a string
     */
    let bestMove = [0, 0];
    let bestScore = 0;

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {

            const score = flipCount(player, board, i, j);
            
            if (score > 0) {
                const newBoard = JSON.parse(JSON.stringify(board));
                newBoard[i][j] = player;
                
                if (score > bestScore) {
                    bestScore = score; 
                    bestMove = [i, j]; 
                }
            }
        }
        
    }

    return bestMove;
    // const output = prepareResponse(bestMove); 
    // console.log("output: " + output);
    // return output;
}

module.exports = { getNextMove };