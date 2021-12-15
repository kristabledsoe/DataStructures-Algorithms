// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Selection Sort - START
const unSortedArray = [2,6,1,3];

const sortedArray = selectionSort(unSortedArray);

function selectionSort(unSortedArray){
  // this loop represents each pass through and goes up to 2nd to last value (doesn't need to do the whole thing bc the array will be sorted at that point.)
  for (let i = 0; i < unSortedArray.length - 1; i++) {

    // Will be at 0 to begin with
    // We will need access to both the lowest value and its lowestNumberIndex in the rest of the code and can use the index to reference both
    let lowestNumberIndex = i;

    // for each pass through, check the remaining values in the array to see if lower value
    for (let j = i + 1; j < unSortedArray.length; j++) {
      if (unSortedArray[j] < unSortedArray[lowestNumberIndex]) {
        lowestNumberIndex = j;
      }
    } // At the end of this loop, we will have found the lowest Number from the pass through.

    // If the lowest value is already in its correct place (this happens when lowest value is first value we encounter in pass through), we don't need to do anything - but if not, then we need to do a swap.
    if (lowestNumberIndex != i) {
      let temp = unSortedArray[i];
      unSortedArray[i] = unSortedArray[lowestNumberIndex]
    }
  
    return unSortedArray;

  }
}



// Selection Sort - END


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


// Largest Subsection Sum - START
 // TODO: See page 414

// Largest Subsection Sum - END




