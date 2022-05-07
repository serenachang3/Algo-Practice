//Easy

// Given the head of a singly linked list, reverse the list, and return the reversed list. 

    // Example 1:

    // Input: head = [1,2,3,4,5]
    // Output: [5,4,3,2,1]

    // Example 2:

    // Input: head = [1,2]
    // Output: [2,1]

    // Example 3:

    // Input: head = []
    // Output: []

    var reverseList = function(head) {
        /*
          declare current to be head 
          declare prev and nextTemp to be null
          
          while current is non-null
            set nextTemp to be current.next
            set current.next to be prev
            set prev to be current
            set current to be tempNext
            
          return prev
        */
        
        let currentNode = head; //2
        let prevNode = null; // 2
        let nextTemp = null; // 3

            //example {value: 1, next: 2}
        
        while (current) {
            // set variable nextTemp to the current.next value, you will use this  place holder to set 
            // the variable currentNode at the end of this loop... so you know increment the current value (1 => 2)
          nextTemp = currentNode.next;  // let nextTemp = 2 (this will become CURRENT later)

            // set the currentNode variables next value (currentNode.next) to variable prevNode/previous value (2 => null)
            // {value: 1, next: null}
          currentNode.next = prevNode; // {value: 1, next: null}

            // set variable prevNode to the current value (1)
          prevNode = currentNode; // let prevNode = 1

            // set the variable currentNode to the variable nextTemp (which stored the next value of the current node)
          currentNode = nextTemp; // let currentNode = 2
        }
        
        return prev;
      };

    // [1,2,3,4,5]
    // {value: 1, next: null}
    // {value: 2, next: 1}
    // {value: 3, next: 2}
    // {value: 4, next: 3}
    // {value: 5, next: 4}