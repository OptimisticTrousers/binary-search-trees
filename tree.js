const Node = require("./node");
const { mergeSort, removeDuplicates } = require("./helpers");
class Tree {
  constructor(array) {
    this.array = [...array];
    this.root = this.buildTree(this.array, 0, array.length - 1);
  }

  prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? "|  " : "  "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  buildTree = (array, start, end) => {
    if (start > end) return null;
    mergeSort(array);
    removeDuplicates(array);
    const mid = (start + end) / 2;
    const node = new Node(array[mid]);
    node.left = this.buildTree(array, start, mid - 1);
    node.right = this.buildTree(array, mid + 1, end);
    return node;
  };
}

const array = [1, 2, 3, 4, 5, 6, 7];

const tree = new Tree(array);

tree.prettyPrint(tree.root);

module.exports = Tree;
