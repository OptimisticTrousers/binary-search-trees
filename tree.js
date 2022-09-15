const Node = require("./node");
const { mergeSort, removeDuplicates } = require("./helpers");
class Tree {
  constructor(array = []) {
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
    const mid = Math.floor((start + end) / 2);
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
    if (value < root.data) {
      root.left = this.insertRec(root.left, value);
    } else if (value > root.data) {
      root.right = this.insertRec(root.right, value);
    }

    return root;
  };

  insert = (value) => {
    this.root = this.insertRec(this.root, value);
  };

  minValue = (root) => {
    let minv = root.data;
    while (root.left !== null) {
      minv = root.left.data;
      root = root.left;
    }
    return minv;
  };

  deleteRec = (root, value) => {
    if (root === null) {
      return root;
    }

    if (value < root.data) {
      root.left = this.deleteRec(root.left, value);
    } else if (value > root.data) {
      root.right = this.deleteRec(root.right, value);
    } else {
      if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }

      root.data = this.minValue(root.right);

      root.right = this.deleteRec(root.right, root.data);
    }

    return root;
  };

  delete = (value) => {
    this.root = this.deleteRec(this.root, value);
  };

  find = (value) => {
    let temp = this.root;

    while (temp) {
      if (temp.data < value) {
        temp = temp.right;
      } else if (temp.data > value) {
        temp = temp.left;
      } else {
        break;
      }
    }

    if (temp?.data === value) {
      return temp;
    }
    return null;
  };

  levelOrderLoop = (callback) => {
    if (this.root === null) return [];

    const array = [];

    array.push(this.root);

    let answer = [];

    while (array.length !== 0) {
      const current = array[0];
      answer.push(current);
      if (current.left !== null) {
        array.push(current.left);
      }
      if (current.right !== null) {
        array.push(current.right);
      }

      array.shift();
    }
    if (typeof callback === "function") {
      return Array.from(answer, callback);
    }
    return answer.map((node) => node.data);
  };

  levelOrderRec = (callback) => {
    if (this.root === null) return [];

    if (current.left !== null) {
      return this.levelOrderRec(callback);
    }
    if (current.right !== null) {
      this.levelOrderRec(current.right);
    }
    this.levelOrderRec();
  };
  preorder = (callback) => {
    const array = [];
    const recursion = (node) => {
      if (node === null) return;

      array.push(node);
      recursion(node.left);
      recursion(node.right);
    };
    recursion(this.root);
    if (typeof callback === "function") {
      return Array.from(array, callback);
    }
    return array;
  };
  inorder = (callback) => {
    const array = [];
    const recursion = (node) => {
      if (node === null) return;
      recursion(node.left);
      array.push(node);
      recursion(node.right);
    };
    recursion(this.root);
    if (typeof callback === "function") {
      return Array.from(array, callback);
    }
    return array;
  };
  postorder = (callback) => {
    const array = [];
    const recursion = (node) => {
      if (node === null) return;
      recursion(node.left);
      recursion(node.right);
      array.push(node);
    };
    recursion(this.root);
    if (typeof callback === "function") {
      return Array.from(array, callback);
    }
    return array;
  };

  height = (node) => {
    let leftTemp = node;
    let rightTemp = node;
    let leftCount = 0;
    let rightCount = 0;

    while (leftTemp?.left) {
      leftTemp = leftTemp.left;
      leftCount++;
    }

    while (rightTemp?.right) {
      rightTemp = rightTemp.right;
      rightCount++;
    }

    return leftCount > rightCount ? leftCount : rightCount;
  };

  depth = (node) => {
    let temp = this.root;
    let count = 0;

    while (temp) {
      if (temp.data < node.data) {
        temp = temp.right;
        count = count + 1;
      } else if (temp.data > node.data) {
        count = count + 1;
        temp = temp.left;
      } else {
        break;
      }
    }

    return count;
  };
  isBalanced = () => {
    if (this.root === null) return null;
    if (this.root.right === null || this.root.left === null) return true;

    const leftHeight = this.height(this.root.left);
    const rightHeight = this.height(this.root.right);

    return (
      Math.abs(leftHeight - rightHeight) === 1 || leftHeight - rightHeight === 0
    );
  };

  rebalance = () => {
    const inorderArray = this.inorder().map((node) => node.data);

    this.root = this.buildTree(inorderArray, 0, inorderArray.length - 1);
  };
}

// const tree = new Tree([30, 15, 20, 10, 40, 60]);
// console.log(tree.postorder((node) => node.data * 2));
const tree = new Tree([16]);

tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
tree.insert(60);

tree.rebalance();

// console.log(tree.inorder((node) => node.data * 2));
tree.prettyPrint(tree.root);

module.exports = Tree;
