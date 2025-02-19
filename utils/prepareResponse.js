const { getNextMove } = require('./getNextMove.js');

function prepareResponse(move) {
  /**
   * Converts an array of 2 integers into a string with a newline
   */
  const response = `${JSON.stringify(move)}\n`;
  console.log(`Sending response ${response}`);
  return response;
}

module.exports = { prepareResponse };
