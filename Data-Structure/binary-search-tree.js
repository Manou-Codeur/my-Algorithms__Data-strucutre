class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (!this.root) return null;

    var current = this.root;
    while (true) {
      if (value === current.value) return current;
      if (value < current.value) {
        if (current.left === null) {
          return null;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          return null;
        }
        current = current.right;
      }
    }
  }
}

const binarySearch = new BST();

binarySearch.insert(5);
binarySearch.insert(10);
binarySearch.insert(7);
binarySearch.insert(3);
