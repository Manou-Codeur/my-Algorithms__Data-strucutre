import { Queue } from "./queue.js";
import { BST } from "./binary-search-tree.js";

const tree = new BST();

//breadth first search; traverse horizontaly or by level
/*

      10
  6       15
3   8      20 

[10, 6, 15, 3, 8, 20]

*/
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

//Depth first preOreder; traverse vertically from the top to the bottom
/*

      10
  6       15
3   8      20 

[10, 6, 3 ,8 ,15 ,20]

*/
tree.DFPreOrder = () => {
  let data = [];

  function travers(node) {
    data.push(node.value);

    if (node.left) travers(node.left);
    if (node.right) travers(node.right);
  }
  travers(tree.root);

  return data;
};

//Depth first postOrder; traverse vertically but from the bottom to
//the top, so we need to visit first all the nodes at the bottom then
//go up to the parents until reaching the root
/*

      10
  6       15
3   8      20 

[3, 8, 6, 20, 15, 10]

*/
tree.DFPostOrder = () => {
  let data = [];

  function travers(node) {
    if (node.left) travers(node.left);
    if (node.right) travers(node.right);

    data.push(node.value);
  }
  travers(tree.root);

  console.log(data);
};

//Depth first inOrder; travsere from side bottom till the root then
//from the root to the bottom of the other side
/*

      10
  6       15
3   8      20 

[3, 6, 8, 10, 15, 20]

*/
tree.DFInOrder = () => {
  let data = [];

  function travers(node) {
    if (node.left) travers(node.left);
    data.push(node.value);
    if (node.right) travers(node.right);
  }
  travers(tree.root);

  console.log(data);
};

//NOTE:
//If you have a tree with a big height(levels), use beadth first search
//If you habe a tree wirh a big width(nodes at the same level), use depth first search
