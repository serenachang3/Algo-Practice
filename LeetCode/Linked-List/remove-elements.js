//EASY

//O(N) Time || O(1) Space

function removeElements(head, val) {
    if(!head) return head;
    
	// initialize dummy variable and it's next to head 
    let dummy = {next: head};
	// curr variable pointing to head and prev variable to prevoiusly declared dummy variable
    let curr = head;
    let prev = dummy;  //this DOES NOT make a copy of line 9. It has the  same "address" and  therfore will change "dummy" as well
    
	// will check till curr is not null
    while(curr) {
		// if current node value is same as input value update prev node next to current node next; else update prev node to current node 
        if(curr.val === val) {
            prev.next = curr.next;
        } else {
            prev = curr;
        }
		// update current node every time
        curr = curr.next;
    }
    
	// return dummy.next as it holds value of head, we assigned earlier
    return dummy.next;
}




var removeElements = function(head, val) {
    let curNode = head; // the node reading each node in lincked list
    let prevHead = {next : head};  // it denote previous node of head "sentinel node" (pseudo head)
    let prevNode = prevHead; // it denote previous node of current node(curNode)
    
    while(curNode !== null) {
        if(curNode.val === val) {
            prevNode.next = curNode.next;  // remove current node
            curNode.next = null;
                 
            curNode = prevNode.next; // set new current node to prevNode.next because, current node is removed
        }
        else {
            prevNode = curNode;
            curNode = curNode.next;
        }
    }
    return prevHead.next;
};