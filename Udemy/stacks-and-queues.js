//STACKS

class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    };
  };
  
  class Stack {
    constructor(){
      this.first = null;
      this.last = null;
      this.size = 0;
    };
    
    push(val){
      let newNode = new Node(val);
      if(!this.first){
        this.first = newNode;
        this.last = newNode;
      } else {
        let temp = this.first;
        this.first = newNode;
        this.first.next = temp;
      }
      return this.size++;
    };
    
    pop(){
      if(!this.first) return null;
      let temp = this.first;
      if(this.first === this.last){
        this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.value;
    }
    
  };
  
  let stack = new Stack();
  stack.push("first");
  stack.push("second");
  stack.push("third");
  
  console.log("stack", stack)

  stack.pop()
  stack.pop()
  stack.pop()


  //QUEUES

let q = [];

q.unshift("FIRST")
q.unshift("SECOND")
q.unshift("THIRD")

console.log(q)

q.pop()
q.pop()
q.pop()

console.log(q)