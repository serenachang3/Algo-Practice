// Solution 1
// O(nlogn) time *** from sorting ***| O(1) space

function nonConstructibleChange(coins) {
  // store the current smallest value (+1)
  let smallestCurrChange = 0;
  // sort the numbers in the array
  const sortedArr = coins.sort((a, b) => a - b);
  console.log(sortedArr);
  // loop through. incrementally
  for (let i = 0; i < sortedArr.length; i++) {
    let currVal = sortedArr[i];

    // if the value is smaller or equal to .. add it  on
    if (currVal <= smallestCurrChange + 1) {
      smallestCurrChange = smallestCurrChange + currVal;
      //if the value is greater than the smallest value + 1, then return that value
    } else if (currVal > smallestCurrChange + 1) {
      return smallestCurrChange + 1;
    }
  }
  return smallestCurrChange + 1;
}

// Solution  1
// O(nlogn) time | O(1) space

function nonConstructibleChange(coins) {
    // Write your code here.
    coins.sort((a,b) => a - b);
      
      let currSmallChange = 0;
      //loops through sorted coins array
      for ( const value of coins) {
          if ( value > currSmallChange + 1) return currSmallChange + 1
          
          currSmallChange += value;
      }
      
      return currSmallChange + 1
  }
