class Node{
    constructor(val){
      this.val = val;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkedList {
    constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        
        if(this.head === null){
          this.head = newNode;
          this.tail = newNode;
        } else {
          this.tail.next = newNode;
          newNode.prev = this.tail; //similar to SLL but need to link it both ways
          this.tail = newNode;
        }
        this.length++;
        return this;
      };

      pop(){    
        if(!this.head) return undefined;
        
        let oldTail = this.tail;
        
        if(this.length === 1){
          this.head = null;
          this.tail = null;
        } else {
          this.tail = oldTail.prev;
          this.tail.next = null;
          oldTail.prev = null;
        }
        this.length--;
        return oldTail;  
      };

      shift(){
        if(!this.head) return undefined;
        
        let headNode = this.head
        
        if(this.length === 1){
          this.head = null;
          this.tail = null;
        } else {
          this.head = headNode.next;
          this.head.prev = null;
          headNode.next = null;
        }
        this.length--;
        return headNode; 
      };

      unshift(val){
        let newNode = new Node(val);

        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
      };
      

  }