function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

sumRange(3);

// callstack

// return 3 + sumRange(2)
// return  2 + sumRange(1)
//  return 1

// return 2  + 1
// return 3 + 3
// FINAL RETURN 6

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// Helper Method Recursion

function outer(input) {
  let outerScopedVariable = [];

  function helper(helperInput) {
    //modify the outerScopedVariable
    helper(helperInput--);
  }

  helper(input);
  return outerScopedVariable;
}

// Helper Function Solution

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1)); // recursion: take off the first number since you already checked
  }
  helper(arr);
  return result;
}

// Pure Recursion Solution

function collectOddValues(arr) {
  let newArr = []; //this resets to an empty array everytime it's called recursively 

  if (helperInput.length === 0) {
    return newArr;
  }
  if (helperInput[0] % 2 !== 0) {
    newArr.push(helperInput[0]);
  }
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1,2,3,4,5])

// [1].concat(collecOddValues([2,3,4,5]))
    // [].concat(collecOddValues([3,4,5]))
        // [3].concat(collecOddValues([4,5]))
            // [].concat(collecOddValues([5]))
                // [5].concat(collecOddValues([]))
                    // []

                // [5].concat([])
            // [].concat([5])
        // [3].concat([5])
    // [].concat([3,5])
// 1.concat([3,5])

// return [1,3,5]




//____________________________

// Power Example

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent){

    if(exponent <= 0) return 1;
    
    return base * power(base, exponent-1)
}

        // 2 * power(2,1)
            // 2 * 1
        // 2 * 2

        // return 4


// Product Of Array

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr){
    
  if(arr.length === 1) return arr[0];
  if(arr.length === 0) return 0;
  
  return arr[0] * productOfArray(arr.slice(1))
  
}

// Recursive  Range

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num){
  if(num === 1) return 1;
  
  return num + recursiveRange(num-1)
}
