/* 1. Prompt the user for a bet amount
2. Add the bet amount to balance
3. Ask for a bet amount and for a color choice (up to 3 colors)
4. Roll the dice (3) !!!
5. User wins based on how many of their chosen colors are rolled
6. Add winnings to balance and display new balance
7. Loop through steps 3-6 until user decides to quit
8. Display final balance */


// Prompt user for color choices


// dice roll
function rollDice(){

const roll = () => {
  const results = [];
    for (let i = 0; i < 3; i++) {
      const colors = ['yellow', 'orange', 'pink', 'blue', 'green', 'red'];
      const result = (colors[Math.floor(Math.random() * colors.length)]);
      results.push(result);
  }
  return results;
}

const diceResults = roll();
console.log(diceResults);

  // Set the background colors of the elements
document.getElementById('display1').style.backgroundColor = diceResults[0];
document.getElementById('display2').style.backgroundColor = diceResults[1];
document.getElementById('display3').style.backgroundColor = diceResults[2];

return diceResults;
}


// Reset the dice to blank for testing
function resetDice() {
  const diceElements = document.getElementsByClassName('dice');

  for (let i = 0; i < diceElements.length; i++) {
    diceElements[i].style.backgroundColor = 'white';
  }
}


// starting the game
let buttonClicks = [];
let balance = 1000;

const selectColors = () => {
  function handleButtonClick(event) {
    // Only add to the array if it has less than 3 items
    if (buttonClicks.length < 3) {
      buttonClicks.push(event.target.id);
      console.log(buttonClicks);
    } else {
      alert('You have selected the maximum amount of colors!');
    }
    updateShow1();
    updateShow2();
    updateShow3();
  }

  function resetArray() {
    buttonClicks = [];
    alert('Color selections have been reset')
    updateShow1();
    updateShow2();
    updateShow3();
  }

  function updateShow1() { //these update the player choice colors
    let show1 = document.getElementById('show1');
    show1.style.backgroundColor = buttonClicks[0] || 'white'; // If the first item doesn't exist, set the color to white
  }

  function updateShow2() {
    let show1 = document.getElementById('show2');
    show1.style.backgroundColor = buttonClicks[1] || 'white'; // If the first item doesn't exist, set the color to white
  }

  function updateShow3() {
    let show1 = document.getElementById('show3');
    show1.style.backgroundColor = buttonClicks[2] || 'white'; // If the first item doesn't exist, set the color to white
  }

  let buttons = document.getElementsByClassName('colorButton');
  let resetBet = document.getElementById('resetBet');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButtonClick);
  }

  resetBet.addEventListener('click', resetArray);
};

selectColors();

const betNumber = () => buttonClicks.length;

const getBet = () => {
  while (true) {
    const bet = Number(document.getElementById('bet').value)
    

    if (isNaN(bet) || bet <= 0 || bet > (Number(balance) / Number(betNumber())) || betNumber() <= 0) {
      alert('Please enter a valid number');
      break;
    } else {
      return bet;
    }
  }
}


