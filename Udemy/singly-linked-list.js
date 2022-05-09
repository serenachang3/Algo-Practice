class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
};

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        if(this.head === null){
            this.head = new Node(val);
            this.tail = this.head;
        } else {
            this.tail.next = new Node(val);
            this.tail = this.tail.next;
        }
        this.length++;
        return this;
    };
  
    pop(){
      
      if(!this.head) undefined;
      
      let curr = this.head;
      let secondToLast = curr;
      
      while(curr.next){
        secondToLast = curr
        curr = curr.next;
      }
       
      this.tail = secondToLast;
      this.tail.next = null;
      this.length--;
      if(this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return curr;
    };
  
    shift(){
      
      if(!this.head) return undefined;
      
      let currHead = this.head;
      let newHead = currHead.next;
      
      this.head = newHead;
      this.length--;
      if(this.length === 0) {
        this.tail = null;
      }
      return currHead;
    };

    unshift(val){
      
      let newHead = new Node(val)
      
      if(!this.head){
        this.head = newHead;
        this.tail = this.head;
      } else {
        newHead.next = this.head;
        this.head = newHead;
      }
      this.length++;
      return this;
      
    };

    get(idx){   

      if(idx < 0 || idx >= this.length) null;

      let value = this.head;
      
      for(let i = 0; i < idx; i++){
        value = value.next
      }
      return value;
    };

    insert(val, idx){
      
      if(idx < 0 || idx > this.length) {
        return false;
      } else if(idx === this.length) {
        this.push(val);
        return true;
      } else if(idx === 0) {
        this.unshift(val);
        return true;
      } else {
        let prevNode = this.get(idx - 1);
        let newNode = new Node(val);
        let temp = prevNode.next
                               
        prevNode.next = newNode;
        newNode.next = temp
        this.length++;
        return true;
      }
    };
}

let list = new SinglyLinkedList()
list.push("How");
list.push("are")
list.push("you")
list.push('?')

console.log("shift", list.shift())
console.log("new head", list.head)

