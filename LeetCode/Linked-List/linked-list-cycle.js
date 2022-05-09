//Easy

// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

    // Input: head = [3,2,0,-4], pos = 1
    // Output: true
    // Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Solution 1: hash table
// O(n) time (loop) + O(1) time (adding to hash) || O(n) space (depends on # elements added to hashtable)

const hasCycle = (head) => {
    // Set variable to store distinct nodes
    let set = new Set()
    // for traversing, initialize current with head node
    let current = head
    
    //traverse the linked list
    while(current){
        if(set.has(current)){
            // if duplication occurs, return true
            return true
        }else{
            set.add(current)
        }
        
        current = current.next
    }
    // traverse is completed, cycle not found
    return false
};


// Solution 2: Two pointer approach

// O(n) time || O(1) space (we only use 2 nodes.. head & fast)

    //We just need to follow the strategy above - make a slower pointer and a faster pointer. Then we loop and loop again:
    // if the fast pointer catch up with slow pointer, then it's a circular linked list
    // if the fast pointer get to the end, then it's not a circular linked list

const hasCycle = (head) => {
  let fast = head;
  while (fast && fast.next) {
    head = head.next;
    fast = fast.next.next;
    if (head === fast) return true;
  }
  return false;
};
