//Medium

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

    // Example 1:

    // Input: nums = [1,2,3,4]
    // Output: [24,12,8,6]
    // Example 2:

    // Input: nums = [-1,1,0,-3,3]
    // Output: [0,0,9,0,0]

// Solution 1
// O(n) time || O(1) space

var productExceptSelf = function(nums) {
	/*
	Idea:
	We want to accumulate everything to the left of i and to the right of i
	(eg. res[i] = res[0] * res[1] * ... * res[i - 1] * res[i + 1] * ... * res[res.length - 2] * res[res.length - 1]
	
	In one pass from left to right, we will be able to accumulate all values to the left of i and then multiply it to i
	Likewise, we can do the same with one pass from right to left to accumulate all the values to the right of i
	*/
	// Results array
    const res = new Array(nums.length).fill(1);
	
    // Accumulate everything to the left of i
    let accumulated = 1;
    for (let i = 0; i < res.length; i++) { // Go from left to right
        res[i] *= accumulated;    
        accumulated *= nums[i]; // Accumulate the current value nums[i] for the next iteration
    }
    // Accumulate everything from the right of i
    accumulated = 1;
    for (let i = res.length - 1; i >= 0; i--) { // This time go from right to left
        res[i] *= accumulated;
        acc *= nums[i];
    }
    return res;
};
