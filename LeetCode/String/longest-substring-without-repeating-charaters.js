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


//Soltuion 1
//Time Complexity O(n^2) | Space Complexity O(n)

var lengthOfLongestSubstring = function (s) {
  let hash = {};
  let longestSubstring = 0;

  if (s.length === 1) {
    return 1;
  }  //this is not necessary but actually does help the run time &  memory

  for (let i = 0; i < s.length; i++) {
    //this variable needs to be in the outter loop or it will reset each run in the inner loop
    let currSubstringLength = 0;

    for (let j = i; j < s.length; j++) {
      let currVal = s[j];

      if (currVal == " ") {
        currVal = "space"; //hash table does not "read" empty spaces, so I renamed
      }
      if (currVal in hash) {
        hash = {};
        if (currSubstringLength > longestSubstring) {
          longestSubstring = currSubstringLength;
        }
        currSubstringLength = 0;
        break;  //make sure to break out of the loop or else it will keep going
      } else {
        hash[currVal] = 1;
        currSubstringLength += 1;
      }
    }
    if (currSubstringLength > longestSubstring) {
      longestSubstring = currSubstringLength;
    }
  }
  return longestSubstring;
};

//Sliding Window Optomized Solution (left pointer moves to make window smaller as right pointer keeps moving as well)

// The main method used for this problem is the sliding window technique. The sliding window is essentially 2 pointers 
//that will help to keep track the start and end of a substring. In this solution, this window will always contain a 
//substring with no duplicate characters.

// Here are the brief steps of my solution:

    // 1. We initialize the variables maxLength, which keeps track of the current longest length of any substring in 
    // the string, and left, which is the start of the substring currently being tracked. A set is also initialised to 
    // keep track of the elements in a substring. Since there are no duplicate characters in the substring (unique), a 
    // set will be a perfect tool to keep track of duplicates.

    // 2. We iterate through this loop using a right pointer. As this right pointer moves, we first check if the char 
    // at the right pointer is a duplicate of any previous characters in the substring by cross checking with the set.

    // 3. If the set already has the character, the set will continuously remove the leftmost char s[left] while also 
    // shifting the left pointer to the right. This will shrink the window size until there are no more duplicates characters.

    // 4. Once it is ensured that there are no duplicate characters, it will add the right most char s[right] to the 
    // set and update maxLength if this new substring is longer than a previous substring.

// Performance
// The time complexity of this solution is linear, O(n), since we solved the problem by having to pass through the string only once.
// O(m) space (m is the size of the charSet)


var lengthOfLongestSubstring = function(s) {
    var maxLength = 0
    var left = 0
    var charSet = new Set()
    
    for (var right = 0; right < s.length; right++){
        while (charSet.has(s[right])){
            charSet.delete(s[left])
            left += 1
        }
        charSet.add(s[right])
        maxLength = Math.max(maxLength, right - left + 1)
    }
    
    return maxLength
};
                                      