//double liked list are same as singly linked list, the defference is only that dll has two pointers
//rather than one for the sigly linked list
//so also the deletion and the insertion at the end is big O(1)

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
    if (!this.head) {
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
    else if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      let prev = this.tail.prev;
      prev.next = null;
      this.tail = prev;
    }
    this.length--;
  }

  shift() {
    if (!this.head) return undefined;
    else if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      let newHead = this.head.next;
      newHead.prev = null;
      this.head = newHead;
    }
    this.length--;
  }

  unshift(val) {
    const newNode = new Node2(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  //and there still aslo other methods like set, get, insert...
}

const dll = new DoubleLinkedList();
dll.push("manou");
dll.push("khaled");
dll.push("said");
