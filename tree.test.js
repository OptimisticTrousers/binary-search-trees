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
  describe("#delete", () => {
    test("deletes a node with no children", () => {
      const tree = new Tree([50, 30, 20, 40, 70, 60, 80]);
      tree.delete(80);

      expect(tree.root.right.right).toEqual(null);
    });
    test("deletes a node with one child", () => {
      const tree = new Tree([50, 30, 20, 40, 70, 60]);

      tree.delete(70);

      expect(tree.root.right.data).toEqual(60);
    });
    test("deletes a node with two children", () => {
      const tree = new Tree([40, 30, 50, 70, 80]);

      tree.delete(50);

      expect(tree.root.data).toEqual(70);
      expect(tree.root.left.data).toEqual(30);
      expect(tree.root.right.data).toEqual(80);
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
    test("inserts a number into a node that has a child", () => {});
  });
  describe("#find", () => {
    test("finds an arbitrary number in the tree", () => {
      const tree = new Tree([30, 50, 15, 20, 10, 40, 60]);

      expect(tree.find(50)).toEqual({
        data: 50,
        left: { data: 40, left: null, right: null },
        right: { data: 60, left: null, right: null },
      });
    });
    test("returns null if a number in a tree is not found", () => {
      const tree = new Tree([30, 50, 15, 20, 10, 40, 60]);

      expect(tree.find(150)).toEqual(null);
    });
    test("returns correct number if the tree is size one", () => {
      const tree = new Tree([16]);

      expect(tree.find(16)).toEqual({ data: 16, left: null, right: null });
    });
  });
  describe("#levelOrder", () => {
    describe("#levelOrderLoop", () => {
      test("traversing a regular tree without callback", () => {
        const tree = new Tree([50, 30, 20, 40, 70, 60, 80]);

        expect(tree.levelOrderLoop()).toEqual([50, 30, 70, 20, 40, 60, 80]);
      });
      test("traversing a single element tree without callback", () => {
        const tree = new Tree([50]);

        expect(tree.levelOrderLoop()).toEqual([50]);
      });
      test("returning an empty array for an empty tree without callback", () => {
        const tree = new Tree();
        expect(tree.levelOrderLoop()).toEqual([]);
      });
      test("providing a callback for regular tree", () => {
        const tree = new Tree([50, 30, 70, 20, 40, 60, 80]);

        expect(tree.levelOrderLoop((node) => node.data * 2)).toEqual([
          100, 60, 140, 40, 80, 120, 160,
        ]);
      });
      test("providing a callback for a single element tree", () => {
        const tree = new Tree([18]);

        expect(tree.levelOrderLoop((node) => node.data.toString())).toEqual(["18"]);
      });
      test("providing a callback for an empty tree", () => {
        const tree = new Tree();

        expect(tree.levelOrderLoop((node) => Math.pow(node, 2)));
      });
    });
    describe("#levelOrderRec", () => {});
  });
});
