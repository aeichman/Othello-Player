function priorityMove(moves) {
    /**
     *  Finds best move out of a series of similar moves by finding if the move would take a corner or edge
     *  Placing a disk in an area left, right, above or below a corner increases chances of opponent taking a corner
     *  Likewise, placeing a disk on the inner ringer from the outside increease chances of opponent taking a side
     *  Avoid these "bad" areas by assigning them a 0 out of 4 and prioritizing higher ranked areas
     *  @param {array} moves - An array of all moves that would yeild the same amount of flipped disks
     *  @return {array} - Most optimal move out of the array
     */

    if (moves.length === 0) return null;

    const adjacentCorner = new Set(["0,1", "1,0", "0,6", "1,7", "6,0", "6,7", "7,1", "7,6"]);

    
    if (moves.length === 0) return null;
    
    let bestMove = null;
    let bestScore = -1;

    for (const [x, y] of moves) {

        let coord = `${x},${y}`;

        let score = adjacentCorner.has(coord) ? 0          // Adjacent to a corner
        : (x === 0 || x === 7) && (y === 0 || y === 7) ? 4  // Corner
        : (x === 0 || x === 7 || y === 0 || y === 7) ? 3    // Edge
        : (x === 1 || x === 6 || y === 1 || y === 6) ? 1    // Inner Ring
        : 2;                                                // All other areas

        if (score > bestScore) {
            bestScore = score;
            bestMove = [x, y];
        }
    }

    return bestMove;
}

module.exports = { priorityMove };