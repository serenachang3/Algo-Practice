//EASY

// Given the head of a singly linked list, return true if it is a palindrome.

    // Example 1:
        // Input: head = [1,2,2,1]
        // Output: true

    // Example 2:
        // Input: head = [1,2]
        // Output: false


// Solution 1
// Copy into Array List and then Use Two Pointer Technique
// Time O(n) || Space O(n) <depends on how many nodes are in there to push into array>

var isPalindrome = function(head) {
    let array = [];
    let pointer = head
    
    while(pointer){
        array.push(pointer.val);
        pointer = pointer.next;
    }
    
    let left = 0;
    let right = array.length-1
    
    while(left < right){
        if(array[left] === array[right]){
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
    
};
