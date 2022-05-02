// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function reverseLinkedList(head) {
    // Write your code here.
      let previousNode = null;
      let currentNode = head;
      while (currentNode !== null) {
              console.log('currentNode', currentNode)
          const nextNode = currentNode.next;
              console.log('nextNode', nextNode)
          currentNode.next = previousNode;
              console.log('currentNode.next', currentNode.next)
          previousNode = currentNode;
              console.log('previousNode', previousNode)
          currentNode = nextNode;
              console.log('currentNode', currentNode)
      }
      console.log(previousNode)
      return previousNode;
  }
  