class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail; //similar to SLL but need to link it both ways
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let oldTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }

  shift() {
    if (!this.head) return undefined;

    let headNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = headNode.next;
      this.head.prev = null;
      headNode.next = null;
    }
    this.length--;
    return headNode;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    if (idx <= this.length / 2) {
      console.log("working from start");
      let node = this.head;
      for (let i = 0; i < idx; i++) {
        node = node.next;
      }
      return node;
    } else {
      console.log("working from end");
      let node = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        node = node.prev;
      }
      return node;
    }
  }

  set(val, idx) {
    if (idx >= this.length || idx < 0) return false;
    if (!this.head) return false;
    let node = this.get(idx);
    node.val = val;
    return true;
  }
}
