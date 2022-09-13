const Node = require("./node");
class Tree {
  constructor(array) {
    this.array = [...array];
    this.root = null;
  }
  buildTree = (array) => {
    const n = array.length - 1;
    const mid = n / 2;
    const newNode = new Node(array[mid]);
    this.root = newNode;
  };
}

module.exports = Tree;
