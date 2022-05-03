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

//Solution 2 more refactored but same time complexity

var maxProfit = function (prices) {
  // Set up variables to track the max profit we've seen (init at 0),
  // the left pointer (init at day 0)
  // and the right pointer (init at day 1, since we can't buy/sell on the same day)
  let max = 0;
  let left = 0;
  let right = 1;

  // Keep incrementing the right pointer until we hit the end of the prices array.
  while (right < prices.length) {
    // The profit on any given day is the difference between the sell date (represented by right pointer)
    // and buy date (represented by the left pointer)
    const profit = prices[right] - prices[left];

    // If we can get a profit higher than we've seen before, set it as our maximum,
    // and we'll keep going.
    if (profit > max) {
      max = profit;
    }

    // If today would be a loss, it means two things:
    // 1. We don't have a new maximum.
    // 2. We just found a day on which we could buy at a lower price than before, so we should buy now.
    //
    // The implication of point two is that we move our left pointer (again, as a sliding window) to be the current day,
    // as represented by the right pointer.
    if (profit < 0) {
      left = right;
    }

    // Increment the right pointer to keep searching.
    right += 1;
  }

  // This will return 0 if we had no possible profit, since we initialized at 0,
  // or the maximum profit possible.
  return max;
};
