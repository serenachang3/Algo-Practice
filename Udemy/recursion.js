function sumRange(num){
    if(num ===1) return 1;
    return num + sumRange(num-1)
}

sumRange(3)

// callstack

// return 3 + sumRange(2)
    // return  2 + sumRange(1)
        //  return 1

        // return 2  + 1
    // return 3 + 3
// FINAL RETURN 6


function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1)
}


// Helper Method Recursion

function outer(input){
    let outerScopedVariable = [];

    function helper(helperInput){
        //modify the outerScopedVariable
        helper(helperInput--)
    }

    helper(input);
    return outerScopedVariable;
}

function collectOddValues(arr){
    let result = [];

    function helper(helperInput){
        if(helperInput.length  === 0){
            return;
        }
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1)) // recursion: take off the first number since you already checked
    }
    helper(arr);
    return result;
}