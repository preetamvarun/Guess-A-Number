const btn = document.getElementById('submit');
const numberField = document.getElementById('number');
const showMessage = document.getElementById('msg');
const inputFields = document.getElementsByClassName('input-div')[0];

let randomNumber,noOfGuesses = -1;

function changeUI(){
    /* changing the input field */
    const newBox = document.createElement('input');
    newBox.id = 'number';
    newBox.readOnly = true;
    const oldElement = inputFields.firstElementChild;
    inputFields.replaceChild(newBox,oldElement);

    /*changing the button field*/
    const newBtn = document.createElement('a');
    newBtn.innerHTML = 'Play Again';
    newBtn.className = 'playAgain';
    const oldBtn = inputFields.lastElementChild;
    inputFields.replaceChild(newBtn,oldBtn);

    newBtn.addEventListener('click',function(e){
        location.reload();
        e.preventDefault();
    });
}

function gameOver(){
    changeUI();
    showMessage.textContent = `Game over! The correct number was ${randomNumber}`;
    showMessage.style.color = 'red';
}

function wrongNumber(){
    noOfGuesses--;
    numberField.style.border = '2px solid red';
    showMessage.textContent = `That was incorrect :( . You have ${noOfGuesses} more guesse(s) left !`;
    showMessage.style.color = 'red';
}

function declareUserAsWin(){
    numberField.style.border = '2px solid green';
    showMessage.textContent = 'Your Guess was correct !';
    showMessage.style.color = 'green';
    changeUI();
}

function playGame(){
    let num = parseInt(numberField.value);
    isNaN(num) ? showMessage.textContent = 'please enter your guess':
    noOfGuesses > 1 ? 
    num === randomNumber ? declareUserAsWin() : wrongNumber() :
    num === randomNumber ? declareUserAsWin() : gameOver();
}

function initVars(){
    noOfGuesses = 3;
    randomNumber = Math.floor(Math.random() * 10) + 1;
    playGame();
}

function gameStatus(e){
    noOfGuesses === -1 ? initVars() : playGame();
    e.preventDefault();
}

btn.addEventListener('click',gameStatus);


