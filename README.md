# Othello Player

The goal of this program is to develop a remote othello player that is capable of achieving a winning percentage greater than 50%

## Getting Started

Install all required npm packages: `npm install` <br />
Running the client with: `node client.js [optional port] [optional hostname]` <br />
Running the server with a random type player: `java -jar othello.jar --p1-type remote --p2-type random  --wait-for-ui` <br />
View UI at: http://localhost:8080/ <br />

### Running Tests

Run all tests: `npm test` or `npx jest` <br />
Note: Running all tests will cause a few to fail. This is due to getNextMove returning a function call to priorityMove. 
For all tests to pass, comment out "return priorityMove(bestMoves)" in getNextMove and uncomment "return bestMoves". 
This will allow for getNextMove to be tested individually.

## Theory of Operation

The strategy I went with was based on prioritizing certain areas of the board. The most important area is the corners as these values cannot be flipped. 
Edges also have a smaller change of being flipped and are ranked just below corners. 
The two worst places on the board are the areas adjacent to the corners and the inner ring of the board.

Before the ranking occurs, getNextMove finds the moves that yield the maximum amount of flipped tiles.
This array of possible moves is then passed into priorityMove which ranks the moves as previously described. The best ranking move with the highest yield of flipped disks is then played.

The idea is that the outside pieces will create the most opportunity for large moves to occur as long as some of the center 4 tiles are in our possession.
With this strategy, the player tends to favor the inner pieces early on in the game while prioritizing the edges toward the middle and end.

## Software
NPM 10.9.2 </br>
NODE 22.13.0 </br>

## Overall Review
I had a lot of fun with this and will probably continue to work on it after it is submitted. My next goal is to add in the minimax algorithm used commonly in game theory. Combine this alpha-beta pruning to improve efficiency and it will hopefully be stronger than what I have created here. Instead of having the player choose from similar options, the minimax algorithm would allow it to prioritize long-term gains over short-term ones. It is cool that without using common ML algorithms I was able to get a slight advantage. Very interesting overall. 

## Notes:
All commit comments that contain win rate percentages are from the result of a series of 20 consecuative games.