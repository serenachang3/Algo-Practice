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
  tree.insert(10);
  tree.insert(5)
  tree.insert(2)
  tree.insert(13)
  tree.insert(11)
  tree.insert(16)
  tree.insert(7)
  tree.insert(10) //returns undefined
  
  console.log(tree.insert(10))