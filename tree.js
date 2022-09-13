const Node = require("./node");
const mergeSort = require("./merge");
class Tree {
  constructor(array) {
    this.array = [...array];
    this.root = null;
  }
  buildTree = (array) => {
    mergeSort(array);
    const n = array.length - 1;
    const mid = n / 2;
    this.root = new Node(array[mid]);
    this.root.left = this.buildTree(array.slice(0, mid - 1));
    this.root.right = this.buildTree(array.slice(mid + 1, n));
    return this.root;
  };
}

module.exports = Tree;
