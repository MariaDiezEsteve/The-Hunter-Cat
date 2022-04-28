# GAME PROYECT

# HUNTER CAT

# See the Game
(Link Game)

# Description

Hunter Cat is a game where the player has to move a cat up, down, left and right to hunt the mice that appear on the screen, while avoiding colliding with the dogs.

The game ends when the cat collides with the dog.

Afterwards, a score is calculated based on the mice caught.

# Main Functionalities
- Game has a cat that moves that move both horizontally and vertically.
- The mice and the bird appear and disappear from the screen eventually.
- The dogs move horizontally from right to left in different positions.

# Backlog Functionalities
- Bonus a futuro

# Proyect Structure
## main.js
- backHome(){}
- startGame(){}
- keyPressUp(){}
- keyPressDown(){}
- keyPressLeft(){}
- keyPressRight(){}

## game.js
- addNewDogs(){}
- addDifficult(){}
- appearsBird(){}
- gameLoop(){}
- borderCollision(){}
- miceCollision(){}
- birdCollision(){}
- gameOverCollision(){}

## player.js
CAT
- drawCat(){}
- upCat(){}
- downCat(){}
- leftCat(){}
- rigthCat(){}

DOG
- drawDogs(){}
- moveDogs(){}

MICE
- drawMice(){}

BIRD
- drawBird(){}

# States and Transitions

- splashScreen
- gameScreen
- gameOverScreen

# Tasks
- main - buildDom
- game - buildCanvas
- game - updateCanvas
- game - drawCanvas
- main - buildSplashScreen
- main - addEventListener
- main - buildGameScreen
- main - buildGameOverScreen
- game - startLoop
- cat - draw
- cat - move
- game - addCat
- mice - draw
- mice - move
- game - addMice
- dog - draw
- dog - move
- game - addDog
- game - checkCollisionDog
- game - GameOver

# Extra Links