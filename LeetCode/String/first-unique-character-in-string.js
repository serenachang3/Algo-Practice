// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

    // Input: s = "leetcode"
    // Output: 0

// Example 2:

    // Input: s = "loveleetcode"
    // Output: 2

// Example 3:

    // Input: s = "aabb"
    // Output: -1


// Time O(n) || Space O(n)

var firstUniqChar = function(s) {

    let hash = {};

    for(let i = 0 ; i < s.length; i++){
        let currLetter = s[i];
        
        if(currLetter in hash){
            hash[currLetter] = -1
        } else {
            hash[currLetter] = i;
        }
    };
    
    let keys = Object.keys(hash)
    
    for(let i = 0; i < keys.length ; i++){
        let currKey = keys[i];
        
        if(hash[currKey] >= 0){
            return hash[currKey]
        }
    }
    return -1;
    
};