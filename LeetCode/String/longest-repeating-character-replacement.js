// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase 
// English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

//First try but does not work. Only going in one direction


//Strategy:
// -two pointers and sliding window
// -start with first character, if the next character is the same -> all to the counter
// -have a variable keeping track of how many "skips" (variable k) you can have
// -if you encounter a letter that's not same as the left pointer, you subtract from "skip" variable
// -once skip varaible reaches 0, move left pointer (left++)
// -compare if the current length of run is greater than current max variable! --> return max value


var characterReplacement = function(s, k) {
    
    let maxLength = 0;//
    let skips = k;//0
    
    for(let i = 0 ; i < s.length ; i++){
        let currLetter = s[i]; //A
        let currCount = 1; //4
     
        for(let j = i + 1 ; j < s.length; j++){
            let rightPointer = s[j]; //B
            
            if(skips === -1){
                maxLength = Math.max(maxLength, currCount);
                skips = k;
                break;
            } else if(currLetter === rightPointer){
                currCount += 1
            } else{
                skips-= 1;
                if(skips === -1) break;
                currCount++;
            }
            console.log("currCount", currCount)          
        }
        maxLength = Math.max(maxLength, currCount);
        skips = k;
    }
    // console.log("maxLength return:", maxLength)
    
    if(maxLength === s.length){
        return maxLength
    } else {
        return maxLength
    }
};

// Actual Solution
// Time Complexity : O(n)
// Space Complexity: O(n)

var characterReplacement = function(s, k) {
    // Keep count of all the characters in the string
    const hash = {}
    // left pointer, character with the current max frequency, return value
    let left = 0;
    let maxFrequencyOfLetter = 0;
    let output = 0;
    for(let right = 0; right < s.length; right++) {
        const currLetter = s[right]
        // Increment count of the current character and OR add the key to the hashtable/chars
        hash[currLetter] = 1 + (hash[currLetter] || 0)
        // Update the character frequency
        maxFrequencyOfLetter = Math.max(maxFrequencyOfLetter, hash[currLetter])
        // Shrink the window of characters we are looking at (from left) until we can have a window of all the same characters + k charcters to change
        //(right-left+1) << you add the +1 becuase we are starting from index
        while((right-left+1) - maxFrequencyOfLetter > k) { 
                //you subtract from the left most character key-value because you shift the frame over & no longer include it
                hash[s[left]] -= 1 
                //increase the left value since  you are moving frame
                left++
          }
        // Update the output if the current window is greater than our previous max window
        output = Math.max(output, right - left +1)
    }
    return output
};