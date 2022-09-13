const Node = require("./node");
const mergeSort = require("./helpers");
class Tree {
  constructor(array) {
    this.array = [...array];
    this.root = null;
  }

  prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? "|  " : "  "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  buildTree = () => {
    mergeSort(this.array);
    removeDuplicates(this.array);
    const n = this.array.length - 1;
    const mid = n / 2;
    this.root = new Node(this.array[mid]);
    this.root.left = this.buildTree(array.slice(0, mid - 1));
    this.root.right = this.buildTree(array.slice(mid + 1, n));
    return this.root;
  };
}

module.exports = Tree;
