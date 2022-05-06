// Easy

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using 
// all the original letters exactly once.

    // Example 1:

    // Input: s = "anagram", t = "nagaram"
    // Output: true
    // Example 2:

    // Input: s = "rat", t = "car"
    // Output: false

//_________________________________________________________________________________________________________________

//Solution 1 

// hash table
// store the values of the first string --> loop
// remove the values from the hash in the second looop
// if value is not in there, return false
// if object is empty in the end ==> return true (Object.keys(hash).length

// time complexity: O(n)  ... retrival from hash is O(1)
// space complexity O(m) (m stands for characters in hash table)

var isAnagram = function(s, t) {
    
    let hash = {}
    
    //adding values from first string into the hash table
    for(let i = 0 ; i < s.length ; i++){
        let currLetter = s[i];
        
        hash[currLetter] = 1 + (hash[currLetter] || 0);
    }
    // console.log ("hash after first loop", hash)
    
    //removing values from hash to check if it is in string "t"
    for(let j = 0 ; j < t.length ; j++){
        let secondCurrLetter = t[j];
        
        if(secondCurrLetter in hash){
            hash[secondCurrLetter] -= 1;
            if(hash[secondCurrLetter] === 0) delete (hash[secondCurrLetter])
        } else {
            return false
        }
    }
    console.log ("hash after second loop", hash)
    
    if(Object.keys(hash).length === 0){
        return true;
    } else {
        return false;
    }   
};
