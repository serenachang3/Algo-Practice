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
    const chars = {}
    // left pointer, character with the current max frequency, return value
    let left = 0, maxf = 0, output = 0
    for(let right = 0; right < s.length; right++) {
        const char = s[right]
        // Increment count of the current character
        chars[char] = 1 + (chars[char] || 0)
        // Update the character frequency
        maxf = Math.max(maxf, chars[char])
        // Shrink the window of characters we are looking at until we can have a window of all the same characters + k charcters to change
        while((right-left+1) - maxf > k) {
                chars[s[left]] -= 1
                left++
          }
        // Update the output if the current window is greater than our previous max window
        output = Math.max(output, right - left +1)
    }
    return output
};