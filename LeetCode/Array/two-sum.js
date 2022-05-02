//EASY

//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.


    //Questions: are there allowed to be negative numbers? zero?

    //execution: 
    //sort the numbers in the array
    //pointers at the opposite specturm  <<< WRONG. because they're asking to return index not just the numbers
    //move left or right pointer based on if it is larger or smaller than the target value
    //track the indices and push index into array

//Time Complexity: O(nlogn)
//Space Complexity: O(1)

//SOLUTION DOES NOT WORK!!!!!!!!!!!!!!
var twoSum = function(nums, target) {
    let copyArr = nums.slice(0)
    copyArr.sort((a,b) => a - b )
    console.log("copy array", copyArr)
    console.log("nums array", nums)
    
    let smallestIdx = 0;
    let largestIdx = nums.length-1
    
    while(largestIdx > smallestIdx){
        
        let sum = copyArr[smallestIdx] + copyArr[largestIdx];
        
        if(sum === target){
            return [nums.indexOf(copyArr[smallestIdx]), nums.indexOf(copyArr[largestIdx])]
        } else if (sum < target) {
            smallestIdx++
        } else {
            largestIdx--
        }
    }
};


//hash table solution
//Time Complexity O(n) | Space Complexity O(n) <  becuase storing hash table

//in hash table, KEY is the number in the array & the VALUE is the index it is

var twoSum = function(nums, target) {
    
    let hash = {}
    
    for (let i = 0; i < nums.length ; i++){
        
        let complement = target - nums[i];
        
        if(complement in hash) {
            return [hash[complement], i]
        } else {
            hash[nums[i]] = i;
        }
    }
};