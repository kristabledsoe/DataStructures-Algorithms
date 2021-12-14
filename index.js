// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// // The "Coin Game" - START
// const coins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// determineWinners(coins);

// function determineWinners(coins) {
//   for (let i = 0; i < coins.length; i++) {
//     const winner = determineWinner(coins[i]);
//     console.log(`Nbr of Coins: ${coins[i]} and winner is: ${winner}`);
//   }
// }

// function determineWinner(nbrCoins) {
//   if ((nbrCoins - 1) % 3 === 0) {
//     return 'them';
//   } else {
//     return 'you';
//   }
// }

// // The "Coin Game" - END

// TODO: Add in the "Sum Swap"

// GREEDY Algorithms

// Highest Nbr in Array - START

const myArray = [4,7,8,2,3,9,5,4,1];

const result = getHighestNumber(myArray);
console.log('result: ', result);

function getHighestNumber(myArray) {
  let highestNumber = 0;

  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > highestNumber) {
      highestNumber = myArray[i];
    }
  }

  return highestNumber;
}

// Highest Nbr in Array - END


