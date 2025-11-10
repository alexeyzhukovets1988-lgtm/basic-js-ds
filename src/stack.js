const { NotImplementedError } = require('../lib/errors');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  constructor () {
    this.stack = [];
    this.size = 0;
  }

  push(value) {
    this.stack.push(value);
    this.size++;
  }

  pop() {
    if (this.size !== 0){
      this.size--;    
      return this.stack.pop();
    } else {
      return;
    }
  }

  peek() {
    if (this.size !== 0) { 
      return this.stack[this.size - 1];
    } else {
      return;
    }
  }
}

module.exports = {
  Stack,
};
