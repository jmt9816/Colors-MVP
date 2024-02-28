/* 1. Prompt the user for a bet amount
2. Add the bet amount to balance
3. Ask for a bet amount and for a color choice (up to 3 colors)
4. Roll the dice (3) !!!
5. User wins based on how many of their chosen colors are rolled
6. Add winnings to balance and display new balance
7. Loop through steps 3-6 until user decides to quit
8. Display final balance */


// Prompt user for color choices

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

  let newResetBet = resetBet.cloneNode(true);
  resetBet.parentNode.replaceChild(newResetBet, resetBet);
  resetBet = newResetBet;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButtonClick);
  }

  resetBet.addEventListener('click', resetArray);
  return buttonClicks;
};

selectColors();

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
    balance = 1000;
    updateBalance(balance);
  }

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


// check for winning selections
function checkMatch(rolledColors) {
  const chosenColors = buttonClicks; // Directly use buttonClicks array
  let matchCounts = [0, 0, 0]; // Initialize match counts for each position

  for (let i = 0; i < chosenColors.length; i++) {
    for (let j = 0; j < rolledColors.length; j++) {
      if (chosenColors[i] === rolledColors[j]) {
        matchCounts[i]++;
      }
    }
  }

  console.log (matchCounts);
  return matchCounts;
}

const calculateWinnings = (bet, matchCounts) => {
  let winnings = [0, 0, 0];
  const multipliers = [0.95, 1.45, 1.95];

  for (let i = 0; i < matchCounts.length; i++) {
    if (matchCounts[i] > 0) {
      winnings[i] = bet * multipliers[matchCounts[i] - 1];
    }
  }

  return winnings;
}

function updateBalance(newBalance) {
  document.getElementById('balance').textContent = newBalance;
}


const game = () => {
  const bet = getBet();
  if (!bet) {
    return;
  }
  const diceResults = rollDice();
  const matchCounts = checkMatch(diceResults); // Store return value of checkMatch
  const winnings = calculateWinnings(bet, matchCounts);
  balance += winnings.reduce((a, b) => a + b, 0) - (bet * betNumber());
  updateBalance(balance);

  // Create a message for the alert
  let message = '';
  for (let i = 0; i < matchCounts.length; i++) {
    message += 'Position ' + (i + 1) + ': ' + matchCounts[i] + ' matches, winnings: ' + winnings[i] + '\n';
  }

  // Show the alert after a delay
  setTimeout(function() {
    alert(message);
  }, 600); // Delay in milliseconds
}

