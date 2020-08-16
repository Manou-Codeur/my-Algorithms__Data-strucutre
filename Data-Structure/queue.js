//queue implement the FIFO(First in First out) logic so the first element to be added is the first element to be deleted.
//exaples; chain in restuarant, background tasks in computer

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    (this.head = null), (this.tail = null), (this.length = null);
  }

  enqueue(val) {
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

  dequeue() {
    if (!this.head) return undefined;

    const newHead = this.head.next;
    this.head = newHead;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
  }
}

const pizzaChain = new Queue();

pizzaChain.enqueue("salim-pizza tomate");
pizzaChain.enqueue("said-pizza thon");
pizzaChain.enqueue("karim-pizza viand");
pizzaChain.enqueue("morad-pizza poulet");
