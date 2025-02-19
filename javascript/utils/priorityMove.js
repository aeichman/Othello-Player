function priorityMove(moves) {
    /**
     *  Finds best move out of a series of similar moves by finding if the move would take a corner or edge
     *  Placing a disk in an area left, right, above or below a corner increases chances of opponent taking a corner
     *  Avoid these "bad" areas by assigning them a 0 out of 2
     *  @param {array} moves - An array of all moves that would yeild the same amount of flipped disks
     *  @return {array} - Most optimal move out of the array
     */

    if (moves.length === 0) return null;

    const badMoves = [[0,1], [1,0], [0,6], [1,7], [6,0], [6,7], [7,1], [7,6]];
    
    let goodMoves = [];
    let badMove = null;
    let bestScore = -1;

    for (const [x, y] of moves) {
        let score = (x === 0 || x === 7) && (y === 0 || y === 7) ? 2  // Corner
                   : (x === 0 || x === 7 || y === 0 || y === 7) ? 1   // Edge
                   : 0; 

        if (badMoves.some(move => move[0] === x && move[1] === y)) {  // If the move is a badMove 
            if (!badMove || score > bestScore) {                      
                bestScore = score;                                    // If no good moves are found, stores best "bad move"
                badMove = [x, y];
            }
        } else {
            goodMoves.push({ move: [x, y], score });
        }
    }

    if (goodMoves.length > 0) {
        return goodMoves.sort((a, b) => b.score - a.score)[0].move;
    }

    return badMove;
}

module.exports = { priorityMove };