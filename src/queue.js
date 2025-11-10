const { NotImplementedError } = require('../lib/errors');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.queueHead = null;
    this.queueTail = null;
    this.queueSize = 0;
  }

  getUnderlyingList() {
    return this.queueHead;
  }

  enqueue(value) {
    const newNode = { ...new ListNode(value) };
    if (!this.queueTail || !this.queueHead) {
      this.queueHead = this.queueTail = newNode;
    } else {
      this.queueTail.next = newNode;
      this.queueTail = newNode;
    }
    this.queueSize++;
  }

  dequeue() {
    if (!this.queueHead) {
      return;
    }
    let deletingNode = this.queueHead.value;
    this.queueHead = this.queueHead.next;
    this.queueSize--;
    return deletingNode;
  }
}

module.exports = {
  Queue
};
