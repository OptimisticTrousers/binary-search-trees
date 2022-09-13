const Node = require("./node");
const { mergeSort, removeDuplicates } = require("./helpers");
class Tree {
  constructor(array) {
    this.array = [...array];
    this.root = buildTree(this.array);
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

  buildTree = (array) => {
    mergeSort(array);
    removeDuplicates(array);
    const n = array.length - 1;
    const mid = n / 2;
    const root = new Node(array[mid]);
    root.left = this.buildTree(array.slice(0, mid - 1));
    root.right = this.buildTree(array.slice(mid + 1, n));
    return root;
  };
}

const array = [1, 2, 3, 4, 5, 6, 7];

const tree = new Tree(array);

tree.prettyPrint(rootNode);

module.exports = Tree;
