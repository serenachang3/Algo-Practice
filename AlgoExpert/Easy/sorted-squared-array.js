//Write a functio that takes in a non-empty array  of integers that are sorted in ascending order and returns a new
//array of the same length with the squares of the original integers also sorted in ascending order

//*** note that the array is already sorted for you!

//solution  1
// O(nlogn) time | O(n)  space - where nn is the length of the input array

//works even if it isn't sorted
function sortedSquaredArray(array) {
  // Write your code here.
  let squaredArr = array.map((num) => num * num);

  let sortedArr = squaredArr.sort((a, b) => a - b);
  return sortedArr;
}

//solution  2 (more optomized)
//O(n) time (because only go through this arayy one time) | O(n) space (create a entirely new array) - where n is the length of the input array

//this solution ONLY works because it is sorted (we compare from both ends)
function sortedSquaredArray(array) {
  //makes a new array with the same length as the original array but with values of 0
  const sortedSquares = new Array(array.length).fill(0);

  let smallerIdx = 0;
  let largerIdx = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    let smallerVal = array[smallerIdx];
    let largerVal = array[largerIdx];

    if (Math.abs(smallerVal) > Math.abs(largerVal)) {
      sortedSquares[i] = smallerVal * smallerVal;
      smallerIdx++;
    } else {
      sortedSquares[i] = largerVal * largerVal;
      largerIdx--;
    }
  }
  return sortedSquares;
}
