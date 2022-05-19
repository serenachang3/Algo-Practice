class Node{
    constructor(value){
      this.value = value;
      this.right = null;
      this.left = null;
    };
  };
  
  class BinarySearchTree{
    constructor(){
      this.root = null;
    };

    insert(value){
        let newNode = new Node(value)
        if(!this.root){
          this.root = newNode;
          return this;
        } else {
            let current = this.root;
            while(true){
              //accounts for duplicates
              if(value === current.value) return undefined;
              if(value < current.value){
                if(current.left === null){
                  current.left = newNode;
                  return this;
                } else {
                  current = current.left;
                };
              } else {
                if(current.right === null){
                  current.right = newNode;
                  return this;
                } else {
                  current = current.right;
                }
              };
            };
        };
      };
  }
  
  let tree  = new BinarySearchTree();
  tree.root = new Node(10);
  tree.root.right = new Node(15);
  tree.root.left = new Node(7);
  tree.root.left.right = new Node (9);
  
  console.log(tree)