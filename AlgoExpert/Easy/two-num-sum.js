//for this version, you are returning the numbers NOT the index so it is OKAY to sort at the beginning

//time complexity: O(nlog(n)) <<< because of sorting method | O(1) space

function twoNumberSum(array, targetSum) {
    // Write your code here.
      array.sort((a, b) => a - b);
      let left = 0; //pointer 1
      let right = array.length-1; //pointer 2
      
      while(left < right){
          const currSum = array[left] + array[right];
          if(currSum === targetSum){
              return [array[left], array[right]]
          } else if (currSum < targetSum){
              left += 1
          } else if(currSum > targetSum){
              right -= 1
          }
  }
      return []
  }
  
  exports.twoNumberSum = twoNumberSum;