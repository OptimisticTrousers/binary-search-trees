const Node = require("./node");
const Tree = require("./tree");

describe("Tree", () => {
  describe("#buildTree", () => {
    test("builds a tree", () => {
      const tree = new Tree([50, 30, 20, 40, 70, 60, 80]);

      expect(tree.root.data).toEqual(50);
      expect(tree.root.right.data).toEqual(70);
      expect(tree.root.right.right.data).toEqual(80);
      expect(tree.root.right.left.data).toEqual(60);
      expect(tree.root.left.data).toEqual(30);
      expect(tree.root.left.left.data).toEqual(20);
      expect(tree.root.left.right.data).toEqual(40);
    });
  });
  describe("#insert", () => {
    test("inserts into an existing tree", () => {
      const tree = new Tree([30, 15, 20, 10, 40, 60]);

      tree.insert(50);
      expect(tree.root.data).toEqual(20);
      expect(tree.root.right.data).toEqual(40);
      expect(tree.root.right.right.data).toEqual(60);
      expect(tree.root.right.right.left.data).toEqual(50);
      expect(tree.root.right.left.data).toEqual(30);
      expect(tree.root.left.data).toEqual(10);
      expect(tree.root.left.right.data).toEqual(15);
    });
    test("inserts number into childless node", () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);

      tree.insert(8);

      expect(tree.root.right.right.right.data).toEqual(8);
    });
    test("inserts number into empty tree", () => {
      const tree = new Tree();

      tree.insert(5);

      expect(tree.root.data).toEqual(5);
    });
    test("inserts many numbers into initially empty tree", () => {
      const tree = new Tree([]);

      tree.insert(50);
      tree.insert(30);
      tree.insert(20);
      tree.insert(40);
      tree.insert(70);
      tree.insert(60);
      tree.insert(80);

      expect(tree.root.data).toEqual(50);
      expect(tree.root.right.data).toEqual(70);
      expect(tree.root.right.right.data).toEqual(80);
      expect(tree.root.right.left.data).toEqual(60);
      expect(tree.root.left.data).toEqual(30);
      expect(tree.root.left.left.data).toEqual(20);
      expect(tree.root.left.right.data).toEqual(40);
    });
    test("inserts a number into a node that has a child", () => {
      const tree = new Tree([30, 50, 15, 20, 10, 40, 60]);
    });
  });
});
