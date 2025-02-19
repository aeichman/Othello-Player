# Othello Player

The goal of this program is to develop a remote othello player that is capable of achieving a winning percentage greater than 50%

## Getting Started

Install all required npm packages: `npm install`
Running the client with: `node client.js [optional port] [optional hostname]`
Running the server with a random type player: `java -jar othello.jar --p1-type remote --p2-type random  --wait-for-ui`

### Running Tests

Run all tests: `npm test` or `npx jest`
Note: Running all tests will cause a few to fail. This is due to getNextMove returning a function call to priorityMove. For all tests to pass, comment out "return priorityMove(bestMoves)" in getNextMove and uncomment "return bestMoves". This will allow for getNextMove to be tested individually.

## Theory of Operation

The strategy I went with was based on prioritizing certain areas of the board. The most important area is the corners as these values cannot be flipped. Edges also have a smaller change of being flipped and are ranked just below corners. The two worst places on the board are the areas adjacent to the corners and the inner ring of the board.

Before the ranking occurs, getNextMove finds the moves that yield the maximum amount of flipped tiles. This array of possible moves is then passed into priorityMove which ranks the moves as previously described. The best ranking move with the highest yield of flipped disks is then played.

The idea is that the outside pieces will create the most opportunity for large moves to occur as long as some of the center 4 tiles are in our possession. 
