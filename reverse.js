function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @param {ListNode} val
 * @return {ListNode}
 */
var reverseList = function(head, val = null) {
    
    // val is the reverse list 
    if (!head) return val;

    // Store the next node
    let next = head.next;

    // Reverse the current node's pointer
    head.next = val;

    // Recursively call reverseList with the next node and current head as val
    return reverseList(next, head);
};
