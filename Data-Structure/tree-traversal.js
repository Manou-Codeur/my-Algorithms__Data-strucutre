//breadth first search; searching horizontaly or by level
/*

      10
  6       15
3   8      20 

[10, 6, 15, 3, 8, 20]

*/
import { Queue } from "./queue.js";
import { BST } from "./binary-search-tree.js";

const tree = new BST();

tree.BFS = () => {
  let node = tree.root,
    data = [],
    queue = new Queue();

  queue.enqueue(node);

  while (queue.length) {
    node = queue.dequeue();
    data.push(node.val.value);
    if (node.val.left) queue.enqueue(node.val.left);
    if (node.val.right) queue.enqueue(node.val.right);
  }
  return data;
};

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

// tree.BFS();

//Depth first preOreder; search vertically from the top to the bottom
/*

      10
  6       15
3   8      20 

[10, 6, 3 ,8 ,15 ,20]

*/

tree.DPP = () => {
  let data = [];

  function travers(node) {
    data.push(node.value);

    if (node.left) travers(node.left);
    if (node.right) travers(node.right);
  }
  travers(tree.root);

  console.log(data);
};

// tree.DPP();
