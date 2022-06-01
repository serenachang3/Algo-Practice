var closestValue = function(root, target) {
    const stack = [];
    stack.push(root);
    
    let min = Infinity;
    let minNode = null;
    
    while(stack.length) {
        let temp = stack.pop();
        
        if(temp === null)
            break;
        
        let diff = Math.abs(temp.val - target);
        
        if(diff < min) {
            min = diff;
            minNode = temp.val;
        }
        
        if(target < temp.val)
            stack.push(temp.left);
        else
            stack.push(temp.right);
    }
    
    return minNode;
};