//EASY

function removeElements(head, val) {
    if(!head) return head;
    
	// initialize dummy variable and it's next to head 
    let dummy = {next: head};
	// curr variable pointing to head and prev variable to prevoiusly declared dummy variable
    let curr = head;
    let prev = dummy;
    
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