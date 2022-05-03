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
