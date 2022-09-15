const Tree = require("./tree");

const tree = new Tree(
  Array.from(new Array(10), () => Math.floor(Math.random() * 200))
);

console.log(tree.isBalanced()); // true

console.log(tree.preorder().map((node) => node.data)); // array in preorder
console.log(tree.inorder().map((node) => node.data)); // array in inorder
console.log(tree.postorder().map((node) => node.data)); // array in post order

for (let i = 0; i < 110; i++) {
  tree.insert(i);
}

console.log(tree.isBalanced()); // false

tree.rebalance();

console.log(tree.isBalanced()); // true

console.log(tree.preorder().map((node) => node.data)); // array in preorder
console.log(tree.inorder().map((node) => node.data)); // array in inorder
console.log(tree.postorder().map((node) => node.data)); // array in post order
