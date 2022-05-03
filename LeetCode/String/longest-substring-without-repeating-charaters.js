//Medium

// /Given a string s, find the length of the longest substring without repeating characters.


//Questions:
//characters numbers, letters, symbols?
//does this string have spaces? will they count?
//uppercase verses lowercase? are these considered unique?

//Strategy:
//double for loop O(n^2)
//hash table to store values & clear once you hit a repeat O(n)
// break out of for loop when you hit a reoccuring character
//return largest substring #

var lengthOfLongestSubstring = function(s) {
    
    let hash = {};
    let longestSubstring = 0;
    
    for(let i = 0; i < s.length; i++){
        //this variable needs to be in the outter loop or it will reset each run in the inner loop
        let currSubstringLength = 1;
        
        for(let j = i; j < s.length; j++){
            
            let currVal = s[j]
            
            if(currVal in hash){
                hash = {};
                
                if (currSubstringLength > longestSubstring){
                    longestSubstring = currSubstringLength -1;
                }       
            currSubstringLength = 0;
            break;

            } else {
                // console.log("hash", hash)
                hash[currVal] = 1;
                currSubstringLength += 1
            }
        }
    }
    return longestSubstring;
};