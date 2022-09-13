const Node = require("./node");
const { mergeSort, removeDuplicates } = require("./helpers");
class Tree {
  constructor(array) {
    this.array = [...array];
    this.root = this.buildTree(this.array, 0, array.length - 1);
  }

  prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
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

  insertRec = (root, value) => {
    if (root === null) {
      root = new Node(value);
      return root;
    }
    if (value < root.value) {
      root.left = this.insertRec(root.left, value);
    } else if (value > root.value) {
      root.right = this.insertRec(root.right, key);
    }

    return root;
  };

  insert = (value) => {
    this.root = this.insertRec(this.root, value);
  };

  delete = (value) => {};
}

const array = [2, 1, 15, 16, 58, 6, 7];

const tree = new Tree(array);

tree.prettyPrint(tree.root);

module.exports = Tree;
