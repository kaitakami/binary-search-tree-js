import Tree from "./binary-search-tree";

test("buildTree function basic test", () => {
  expect(new Tree([1, 2, 3])).toEqual({
    root: {
      data: 2,
      leftChild: {
        data: 1,
        leftChild: null,
        rightChild: null,
      },
      rightChild: {
        data: 3,
        leftChild: null,
        rightChild: null,
      },
    },
  });
});

test("buildTree function 5 nodes", () => {
  expect(new Tree([1, 2, 3, 4, 5])).toEqual({
    root: {
      data: 3,
      leftChild: {
        data: 1,
        leftChild: null,
        rightChild: { data: 2, leftChild: null, rightChild: null },
      },
      rightChild: {
        data: 4,
        leftChild: null,
        rightChild: { data: 5, leftChild: null, rightChild: null },
      },
    },
  });
});

test("buildTree function 12 nodes", () => {
  expect(new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])).toEqual({
    root: {
      data: 6,
      leftChild: {
        data: 3,
        leftChild: {
          data: 1,
          leftChild: null,
          rightChild: { data: 2, leftChild: null, rightChild: null },
        },
        rightChild: {
          data: 4,
          leftChild: null,
          rightChild: { data: 5, leftChild: null, rightChild: null },
        },
      },
      rightChild: {
        data: 9,
        leftChild: {
          data: 7,
          leftChild: null,
          rightChild: { data: 8, leftChild: null, rightChild: null },
        },
        rightChild: {
          data: 11,
          leftChild: { data: 10, leftChild: null, rightChild: null },
          rightChild: { data: 12, leftChild: null, rightChild: null },
        },
      },
    },
  });
});

test("buildTree function null", () => {
  expect(new Tree([])).toEqual({ root: null });
});

test("insert function small number", () => {
  const tree = new Tree([2, 3]);
  tree.insert(1);
  expect(tree.root).toEqual({
    data: 2,
    leftChild: { data: 1, leftChild: null, rightChild: null },
    rightChild: { data: 3, leftChild: null, rightChild: null },
  });
});

test("insert function big number", () => {
  const tree = new Tree([1, 2, 3]);
  tree.insert(4);
  expect(tree.root).toEqual({
    data: 2,
    leftChild: {
      data: 1,
      leftChild: null,
      rightChild: null,
    },
    rightChild: {
      data: 3,
      leftChild: null,
      rightChild: {
        data: 4,
        leftChild: null,
        rightChild: null,
      },
    },
  });
});

test("delete function", () => {
  const tree = new Tree([1, 2, 3]);
  tree.delete(1);
  expect(tree.root).toEqual({
    data: 2,
    leftChild: null,
    rightChild: { data: 3, leftChild: null, rightChild: null },
  });
});

test("delete function value doesn't exist", () => {
  const tree = new Tree([1, 2, 3]);
  tree.delete(4);
  expect(tree.root).toEqual({
    data: 2,
    leftChild: {
      data: 1,
      leftChild: null,
      rightChild: null,
    },
    rightChild: {
      data: 3,
      leftChild: null,
      rightChild: null,
    },
  });
});

test("delete function big tree", () => {
  const tree = new Tree([1, 2, 3, 4, 6, 5, 3, 6, 7, 8, 12, 10, 11, 9]);
  tree.delete(4);
  expect(tree.root).toEqual({
    data: 7,
    leftChild: {
      data: 3,
      leftChild: {
        data: 1,
        leftChild: null,
        rightChild: { data: 2, leftChild: null, rightChild: null },
      },
      rightChild: {
        data: 5,
        leftChild: null,
        rightChild: { data: 6, leftChild: null, rightChild: null },
      },
    },
    rightChild: {
      data: 11,
      leftChild: {
        data: 9,
        leftChild: { data: 8, leftChild: null, rightChild: null },
        rightChild: { data: 10, leftChild: null, rightChild: null },
      },
      rightChild: {
        data: undefined,
        leftChild: { data: 12, leftChild: null, rightChild: null },
        rightChild: { data: undefined, leftChild: null, rightChild: null },
      },
    },
  });
});

test("search function / find value in BST", () => {
  const tree = new Tree([1, 2, 3]);
  expect(tree.search(2)).toEqual({
    data: 2,
    leftChild: { data: 1, leftChild: null, rightChild: null },
    rightChild: { data: 3, leftChild: null, rightChild: null },
  });
});

test("search function", () => {
  const tree = new Tree([1, 2, 3, 4, 5]);
  expect(tree.search(5)).toEqual({
    data: 5,
    leftChild: null,
    rightChild: null,
  });
});

test("inorder function", () => {
  const tree = new Tree([1, 2, 3, 4, 5]);
  expect(tree.inorder()).toEqual([1, 2, 3, 4, 5]);
});

test("inorder function", () => {
  const tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  expect(tree.inorder()).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]);
});

test("preorder function", () => {
  const tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  expect(tree.preorder()).toEqual([
    8, 4, 2, 1, 3, 6, 5, 7, 12, 10, 9, 11, 14, 13, 15,
  ]);
});

test("postorder function", () => {
  const tree = new Tree([1, 2, 3, 4, 5]);
  expect(tree.postorder()).toEqual([2, 1, 5, 4, 3]);
});

test("postorder function with difference of one", () => {
  const tree = new Tree([1, 2, 3, 4, 5, 6]);
  expect(tree.getHeight()).toEqual(3);
});


test("postorder function with difference of one", () => {
  const tree = new Tree([1, 2, 3, 4, 5, 6]);
  expect(tree.getHeight()).toEqual(3);
});
