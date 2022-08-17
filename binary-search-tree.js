function Node(data) {
  let leftChild = null;
  let rightChild = null;
  return {
    data,
    leftChild,
    rightChild,
  };
}

export default class Tree {
  constructor(arr) {
    this.root = this.buildTree(arr);
  }

  buildTree(arr) {
    if (arr.length === 0) {
      return null;
    }
    const sortArray = (arr) => {
      arr.sort((a, b) => a - b);
      arr = [...new Set(arr)];
      return arr
    }

    const constructTree = (sortedArray, start, end) => {
      sortedArray = sortArray(sortedArray)
      if (start > end) return null
      const mid = parseInt((start + end) / 2);
      const root = Node(sortedArray[mid]);
      root.leftChild = constructTree(sortedArray, start, mid - 1)
      root.rightChild = constructTree(sortedArray, mid + 1, end)
      return root
    };
    return constructTree(arr, 0, arr.length - 1);
  }

  insert(value) {
    const insertVal = (root, val) => {
      if (root === null) {
        root = Node(val)
        return root
      }
      if (val < root.data) {
        root.leftChild = insertVal(root.leftChild, val)
      } else if (val > root.data) {
        root.rightChild = insertVal(root.rightChild, val)
      }
      return root
    }
     this.root = insertVal(this.root, value)
  }

  delete(value) {
    function minValue (root) {
      let minV = root.data
      while (root.leftChild != null) {
        minV = root.leftChild.data
        root = root.leftChild
      }
      return minV
    } 
    const deleteVal = (root, val) => {
      // base case, if tree is empty
      if (root === null) return root

      if (val < root.data) {
        root.leftChild = deleteVal(root.leftChild, val)
      } else if (val > root.data) {
        root.rightChild = deleteVal(root.rightChild, val)
      } else {
        if (root.leftChild === null) {
          return root.rightChild;
        } else if (root.rightChild === null) {
          return root.leftChild
        }


        root.data = minValue(root.rightChild)

        root.rightChild = deleteVal(root.rightChild, root.data)
      }
      return root
    }
    this.root = deleteVal(this.root, value)
  }
  
  search (value) {
    const searchVal = (root, val) => {
      if (root === null || root.data === val) {
        return root
      }

      if (root.data < val) {
        return searchVal(root.rightChild, val)
      } else if (root.data > val) {
        return searchVal(root.leftChild, val)
      }
    }
    return searchVal(this.root, value)
  }

  inorder() {
    let result = []
    const inorderVal = (root) => {
      if (root != null) {
        inorderVal(root.leftChild)
        result.push(root.data)
        inorderVal(root.rightChild)
      }
    }
    inorderVal(this.root)
    return result
  }

  preorder() {
    let result = []
    const preorderVal = (root) => {
      if (root != null) {
        result.push(root.data)
        preorderVal(root.leftChild)
        preorderVal(root.rightChild)
      }
    }
    preorderVal(this.root)
    return result
  }

  postorder() {
    let result = []
    const preorderVal = (root) => {
      if (root != null) {
        preorderVal(root.leftChild)
        preorderVal(root.rightChild)
        result.push(root.data)
      }
    }
    preorderVal(this.root)
    return result
  }

  getHeight() {
    let leftLevels = 1 // rootNode counts as 1
    let rightLevels = 1
    const countLevels = (root) => {
      let leftRoot = root
      while (leftRoot.leftChild != null) {
        leftLevels++
        leftRoot = leftRoot.leftChild
      }
      let rightRoot = root
      while(rightRoot.rightChild != null) {
        rightLevels++
        if (rightRoot.rightChild) {
          rightRoot = rightRoot.rightChild
        }
      }
      return (leftLevels >= rightLevels) ? leftLevels : rightLevels
    }

    return countLevels(this.root)
  }
}
