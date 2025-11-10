const { NotImplementedError } = require('../lib/errors');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }
    let current = this.rootNode;
    while (current) {
      if (data === current.data) return;
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else if (data > current.data) {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  find(data) {
    if (!this.rootNode) return null;
    let current = this.rootNode;
    while (current) {
      if (current.data === data) {
        return current;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  has(data) {
    return this.find(data) !== null;
  }

  remove(data) {
    this.rootNode = branch(this.rootNode, data);
    function branch(currentNode, data) {
      if (!currentNode) return null;
      while (currentNode.left || currentNode.right) {
        if (currentNode.data < data) {
          currentNode.right = branch(currentNode.right, data);
          return currentNode;
        } else if (currentNode.data > data) {
          currentNode.left = branch(currentNode.left, data);
          return currentNode;
        } else {
          if (currentNode.left === null) {
            return currentNode.right;
          } else if (currentNode.right === null) {
            return currentNode.left;
          }
        }
        let minRight = currentNode.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        currentNode.data = minRight.data;
        currentNode.right = branch(currentNode.right, minRight.data);
        return currentNode;
      }
    }
  }

  min() {
    if (!this.rootNode) return null;
    let current = this.rootNode;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (!this.rootNode) return null;
    let current = this.rootNode;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};