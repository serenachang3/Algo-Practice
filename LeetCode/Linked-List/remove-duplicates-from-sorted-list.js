var deleteDuplicates = function(head) {
    if(!head) return null; // it means there are no node in head
    if(!head.next) return head; // it means there are only one node so, there is no need to check if there is a duplicate elements
    
    let currentNode = head;
    let nextNode = head;
    
    while(currentNode !== null && currentNode.next !== null) {
        nextNode = currentNode.next;
        if(currentNode.val === nextNode.val) {  //revmove nextNode if it duplicates with current node
            currentNode.next = nextNode.next;
            nextNode.next = null;
        }
        else {
          currentNode = currentNode.next;  // move the current node pointer to the next node only when the elements are not duplicated 
        }
    }
    
    return head;
};