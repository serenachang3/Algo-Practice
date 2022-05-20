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

// Approach 2 Space O(1) Time O(n)
var isPalindrome = function (head) {
    let [fast, slow] = [head, head];
    // To find middle
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // Reverse the 2nd half of the linked list to get a new reversed list
    let [curr, prev] = [slow, null];
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    let [left, right] = [head, prev];
    while (right) {
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }

    return true;
};