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
    for (let i = 0; i < 3; i++) {
      const colors = ['yellow', 'orange', 'pink', 'blue', 'green', 'red'];
      const result = (colors[Math.floor(Math.random() * colors.length)]);
      console.log(result);
  }
}

roll ();
}
