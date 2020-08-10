// Linkedlist: the only advantage of linkedlist is that the insertion and deletion
// operation have the time complexity of big O(n) -- better than arrays --

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkdedList {
  constructor() {
    (this.head = null), (this.tail = null), (this.length = null);
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
  }

  shift() {
    if (!this.head) return undefined;

    const newHead = this.head.next;
    this.head = newHead;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
  }

  get(index) {
    if (index >= this.length || index < 0 || !this.tail) return undefined;

    let times = 0;
    let curr = this.head;

    while (times < index) {
      times++;
      curr = curr.next;
    }

    return curr;
  }

  set(index, val) {
    const node = this.get(index);
    if (node) node.val = val;
    else return false;
  }

  insert(index, val) {
    if (index > this.length || index < 0) return false;
    else if (index === 0) this.unshift(val);
    else if (index === this.length) this.push(val);
    else {
      const prevNode = this.get(index - 1);
      const currNode = this.get(index);
      const newNode = new Node(val);

      prevNode.next = newNode;
      newNode.next = currNode;
      this.length++;
    }
  }

  remove(index) {
    if (index >= this.length || index < 0) return false;

    if (index === 0) this.shift(index);
    else if (index === this.length - 1) this.pop();
    else {
      let prevCurr = this.get(index - 1);
      let curr = prevCurr.next;
      let nextCurr = curr.next;

      prevCurr.next = nextCurr;
      this.length--;
    }
  }

  reverse() {
    //reverse the linked list at place
  }

  travers() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

const linkedListOne = new LinkdedList();
linkedListOne.push("manou");
linkedListOne.push("salim");
linkedListOne.push("khaled");
