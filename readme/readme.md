
# THE HUNTER CAT

# See the Game
https://mariadiezesteve.github.io/The-Hunter-Cat/

# Description

The Hunter Cat is a game to entertain yourself by hunting mice and birds.

The player has to move a cat up, down, left and right to hunt the mice and birds that appear on the screen, while avoiding collisions with dogs.

Each mouse caught by the cat is worth one point and each bird is worth two points.

The game ends when the cat collides with the dog.

Afterwards, a score is calculated based on the mice and the birds caught.

# Main Functionalities
- The game has a cat that moves both horizontally and vertically.
- The mice and the bird appear and disappear from the screen eventually. When hunted, the score of each animal is added to the final score.
- The dogs move horizontally from right to left in different positions and speeds depending on the score.
- You can include the player's name on the main screen.
- On the final screen you can see the name next to the score and you have two options: finish the game and go to the main page or play again and go back to the game page.
- While playing you can listen to the audio.

# Backlog Functionalities
- Create a ranking of scores on the final screen.
- Set a life counter for the cat that starts with 7 lives.

# Proyect Structure
## main.js
- Declaration of variables
- startGame(){}
- backHome(){}
- keyPressUp(){}
- keyPressDown(){}
- keyPressLeft(){}
- keyPressRight(){}
- addEventListener

## game.js
- add Class
- addNewDogs(){}
- addDifficult(){}
- appearsBird(){}
- gameLoop(){}
- borderCollision(){}
- miceCollision(){}
- birdCollision(){}
- gameOverCollision(){}

## player.js
### cat
- add Class
- drawCat(){}
- upCat(){}
- downCat(){}
- leftCat(){}
- rigthCat(){}

### dogs
- add Class
- drawDogs(){}
- moveDogs(){}

### mice
- add Class
- drawMice(){}

### bird
- add Class
- drawBird(){}

# States and Transitions
## SplashScreen
- Contains game instructions and access to the game from play.

## GameScreen
- Screen where you interact with the cat to score points and try not to get killed by the dogs.

## GameOverScreen
- This screen appears when the cat is killed.
You have two buttons: the back to game button takes you back to the main page. And the play again button takes you back to the game screen to play again.

# Extra Links