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

    let answer;
    answer = num * factorial(num-1)
    return answer;
}