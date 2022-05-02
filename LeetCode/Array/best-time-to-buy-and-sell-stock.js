//EASY

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

//example [7,3,5,1,2,4] ==> 3

//there needs to be a number to the right that is larger
//if every value to the right of position 0 is smaller ==> return 0
//store variables 1. difference between 2 days, 2. store smallest value and clear max value
//if the number to the right is smaller, replace with smallest day & replace largest day to 0
//subtract the largest value variable from smallest value variable.. if it is negative ..retun 0

//time complexity O(n) | space complexity 0(1)

var maxProfit = function (prices) {
  let difference = 0;
  let smallestValue;
  let largestValueToRight;

  for (let i = 0; i < prices.length; i++) {
    let currValue = prices[i];

    if (smallestValue === undefined) {
      smallestValue = currValue;
    } else if (currValue < smallestValue) {
      smallestValue = currValue;
      largestValueToRight = 0;
    } else if (currValue > smallestValue) {
      largestValueToRight = currValue;
      let currDifference = largestValueToRight - smallestValue;
      if (currDifference > difference) {
        difference = currDifference;
      }
    }
  }
  return difference;
};
