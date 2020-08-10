class Node2 {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.tail = null;
    this.head = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node2(val);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  travers() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      let prev = this.tail.prev;
      prev.next = null;
      this.tail = prev;
    }
    this.length--;
  }
}

const dll = new DoubleLinkedList();
dll.push("manou");
dll.push("khaled");
dll.push("said");
