// let score = 0;
// let gameOver = false;
// const scoreDisplay = document.getElementById('score');
// const gameBoard = document.getElementById('game-board');

// function startGame() {
//     if (gameOver) return;
//     const number = generateRandomNumber();
//     createFallingNumber(number);
//     setTimeout(startGame, 1000); // generate a new number every 1 second
// }

// function generateRandomNumber() {
//     // Generates a random number between 1 and 50
//     return Math.floor(Math.random() * 50) + 1;
// }

// function createFallingNumber(number) {
//     const numberElement = document.createElement('div');
//     numberElement.textContent = number;
//     numberElement.classList.add('number');
//     numberElement.style.top = '0px';
//     numberElement.style.left = `${Math.random() * (gameBoard.offsetWidth - 50)}px`; // Random horizontal position
//     gameBoard.appendChild(numberElement);

//     // Animation to move the number down
//     numberElement.style.transition = 'top 2s linear';
//     setTimeout(() => {
//         numberElement.style.top = `${gameBoard.offsetHeight - 50}px`; // Move number to the bottom
//     }, 0);

//     // Add click event for the number
//     numberElement.addEventListener('click', () => handleClick(numberElement, number));
// }

// function handleClick(element, number) {
//     if (gameOver) return;
    
//     if (number % 5 === 0) {
//         // Increment score if number is a multiple of 5
//         score++;
//         scoreDisplay.textContent = `Score: ${score}`;
//         element.remove(); // Remove number from board
//     } else {
//         // Stop the game if number is not a multiple of 5
//         gameOver = true;
//         showGameOver();
//     }
// }

// function showGameOver() {
//     const gameOverMessage = document.createElement('div');
//     gameOverMessage.textContent = `Game Over! Final Score: ${score}`;
//     gameOverMessage.classList.add('game-over');
//     gameBoard.appendChild(gameOverMessage);
// }

// startGame();




// let score = 0;
// let gameOver = false;
// let selectedNumber = null; // The number the user selects
// const scoreDisplay = document.getElementById('score');
// const gameBoard = document.getElementById('game-board');
// const gameOverMessage = document.getElementById('game-over-message');
// const numberSelect = document.getElementById('number-select');

// function startGame() {
//     selectedNumber = parseInt(numberSelect.value);
    
//     if (isNaN(selectedNumber) || selectedNumber < 1 || selectedNumber > 50) {
//         alert('Please select a valid number between 1 and 50!');
//         return;
//     }
    
//     // Clear any previous game state
//     score = 0;
//     scoreDisplay.textContent = `Score: ${score}`;
//     gameOver = false;
//     gameOverMessage.textContent = '';
//     gameBoard.innerHTML = ''; // Clear the board

//     // Start generating falling numbers
//     setInterval(createFallingNumber, 1000); // Create a new falling number every second
// }

// function generateRandomNumber() {
//     // Generates a random number between 1 and 50
//     return Math.floor(Math.random() * 50) + 1;
// }

// function createFallingNumber() {
//     if (gameOver) return;

//     const number = generateRandomNumber();
//     const numberElement = document.createElement('div');
//     numberElement.textContent = number;
//     numberElement.classList.add('number');
//     numberElement.style.top = '0px';
//     numberElement.style.left = `${Math.random() * (gameBoard.offsetWidth - 50)}px`; // Random horizontal position
//     gameBoard.appendChild(numberElement);

//     // Animation to move the number down
//     setTimeout(() => {
//         numberElement.style.top = `${gameBoard.offsetHeight - 50}px`; // Move number to the bottom
//     }, 0);

//     // Add click event for the number
//     numberElement.addEventListener('click', () => handleClick(numberElement, number));
// }

// function handleClick(element, number) {
//     if (gameOver) return;
    
//     if (number % selectedNumber === 0) {
//         // Increment score if number is a multiple of the selected number
//         score++;
//         scoreDisplay.textContent = `Score: ${score}`;
//         element.remove(); // Remove the number from the board
//     } else {
//         // Stop the game if the number is not a multiple of the selected number
//         gameOver = true;
//         showGameOver();
//     }
// }

// function showGameOver() {
//     gameOverMessage.textContent = `Game Over! Final Score: ${score}`;
// }




let score = 0;
let gameOver = false;
let selectedNumber = null; // The number the user selects
const scoreDisplay = document.getElementById('score');
const gameBoard = document.getElementById('game-board');
const gameOverMessage = document.getElementById('game-over-message');
const numberSelect = document.getElementById('number-select');

function startGame() {
    selectedNumber = parseInt(numberSelect.value);
    
    if (isNaN(selectedNumber) || selectedNumber < 1 || selectedNumber > 50) {
        alert('Please select a valid number between 1 and 50!');
        return;
    }
    
    // Clear any previous game state
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    gameOver = false;
    gameOverMessage.textContent = '';
    gameBoard.innerHTML = ''; // Clear the board

    // Start generating falling numbers
    setInterval(createFallingNumber, 1000); // Create a new falling number every second
}

function generateRandomNumber() {
    // Generates a random number between 1 and 50
    return Math.floor(Math.random() * 50) + 1;
}

function getRandomColor() {
    const colors = [
        '#E3D9F1','#AAF0D1','#FFB347','#FFDAB9','#B39EB5',
        '#AAF0D1','#FFB347','#FFDAB9','#B39EB5','#AAF0D1'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

function createFallingNumber() {
    if (gameOver) return;

    const number = generateRandomNumber();
    const numberElement = document.createElement('div');
    numberElement.textContent = number;
    numberElement.classList.add('number');
    numberElement.style.top = '0px';
    numberElement.style.left = `${Math.random() * (gameBoard.offsetWidth - 50)}px`; // Random horizontal position
    numberElement.style.backgroundColor = getRandomColor(); // Set random color
numberElement.style.transition = 'top 2s linear';
    gameBoard.appendChild(numberElement);

    // Animation to move the number down
    setTimeout(() => {
        numberElement.style.top = `${gameBoard.offsetHeight - 50}px`; // Move number to the bottom
    }, 0);

    // Add click event for the number
    numberElement.addEventListener('click', () => handleClick(numberElement, number));
}

function handleClick(element, number) {
    if (gameOver) return;
    
    if (number % selectedNumber === 0) {
        // Increment score if number is a multiple of the selected number
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        element.remove(); // Remove the number from the board
        updateScoreColor();
    } else {
        // Stop the game if the number is not a multiple of the selected number
        gameOver = true;
        showGameOver();
    }
}

function updateScoreColor() {
    if (score < 5) {
        scoreDisplay.style.color = '#FF5733'; // Red
    } else if (score < 10) {
        scoreDisplay.style.color = '#FFCC00'; // Yellow
    } else if (score < 20) {
        scoreDisplay.style.color = '#33FF57'; // Green
    } else {
        scoreDisplay.style.color = '#33CCFF'; // Blue
    }
}

function showGameOver() {
    gameOverMessage.textContent = `Game Over! Final Score: ${score}`;
    gameOverMessage.style.color = '#FF0000'; // Red color for the game over message
}




