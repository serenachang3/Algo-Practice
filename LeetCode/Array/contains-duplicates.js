//EASY

//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

//loop through one time
//make a hash table, add to it if the value does not exist
//if the value is in the hash table, return true
//else return false

//Time complexity: O(n) | Space Complexity: O(n)

var containsDuplicate = function(nums) {
    
    let hash = {}
    let i = 0; 
    
    while(i < nums.length){
        let currValue = nums[i];
        
        if(currValue in hash){
            return true;
        } else {
            hash[currValue] = 1
        }
        i++;
    }
    return false;
};

//Solution 2

var containsDuplicate = function(nums) {

    //this creates a new Set object which lets you store unique values of any types (primitive or object)
    let nums2= new Set(nums);
    //.size method is an accesor property that returns the numer of UNIQUE elements in a SET (so if there are 2 of the same value, it will only load one time)
    return nums2.size!=nums.length;
      
};