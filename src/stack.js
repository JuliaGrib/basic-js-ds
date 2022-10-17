const { NotImplementedError } = require('../extensions/index.js');

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
  constructor(){
    this.arrStack = [];
  }
  push(elem) {
    this.arrStack.push(elem);
  }

  pop() {
    if(this.arrStack.length === 0) {
      return false;
    }
    let a = this.arrStack.pop();
    return a;
  }

  peek() {
    if(this.arrStack.length === 0) {
      return false;
    }
    let b = this.arrStack[this.arrStack.length - 1];
    return b;
  }
}

module.exports = {
  Stack
};
