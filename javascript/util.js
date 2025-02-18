const { getNextMove } = require('./utils/moves/getNextMove.js');

function getMove(player, board) {
  return getNextMove(player, board);
}

function prepareResponse(move) {
  const response = `${JSON.stringify(move)}\n`;
  console.log(`Sending response ${response}`);
  return response;
}

module.exports = {getMove, prepareResponse};
