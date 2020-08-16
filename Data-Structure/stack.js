//stacks implement the LIFO(Last in First out) logic so the last element to be inserted is the first one to be delted.
//exaples; undo/redo in some softwares like VSC

class Stack {
  constructor() {
    this.arr = [];
  }

  push(val) {
    this.arr.push(val);
  }

  pop() {
    this.arr.pop();
  }
}

const VSCode = new Stack();

VSCode.push("Create -Stack.js- file");
VSCode.push("Write some lines of code");
VSCode.push("Try this class");
