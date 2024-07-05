class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    if (node.value < root.value) {
      if (!root.left) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else if (node.value > root.value) {
      if (!root.right) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  searchValue(value, root = this.root) {
    if (!root) {
      return false;
    }

    if (value < root.value) {
      return this.searchValue(value, root.left);
    } else if (value > root.value) {
      return this.searchValue(value, root.right);
    } else {
      return true;
    }
  }

  deleteValue(value) {
    this.root = this.delete(this.root, value);
  }

  delete(root, value) {
    if (!root) {
      return null;
    }

    if (value < root.value) {
      root.left = this.delete(root.left, value);
    } else if (value > root.value) {
      root.right = this.delete(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      } else {
        root.value = this.minValue(root.right);
        root.right = this.delete(root.right, root.value);
      }
    }
    return root;
  }

  minValue(root = this.root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.minValue(root.left);
    }
  }

  maxValue(root = this.root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.maxValue(root.right);
    }
  }

  isValidBST(root = this.root) {
    const result = [];
    if (!root) {
      return true;
    } else {
      this.inOrder(root, result);

      for (let i = 0; i < result.length; i++) {
        if (result[i] > result[i + 1]) {
          return false;
        }
      }
    }
    return true;
  }

  findClosest(target) {
    let curr = this.root;
    let closest = curr.value;
    while (curr) {
      if (Math.abs(target - closest) > Math.abs(target - curr.value)) {
        closest = curr.value;
      }

      if (target < closest) {
        curr = curr.left;
      } else if (target > closest) {
        curr = curr.right;
      } else {
        break;
      }
    }
    return closest;
  }

  calculateHeight(root = this.root) {
    if (!root) {
      return -1;
    }

    const leftH = this.calculateHeight(root.left);
    const rightH = this.calculateHeight(root.right);

    return Math.max(leftH, rightH) + 1;
  }

  findSecondLargest(root = this.root) {
    if (!root || (!root.left && !root.right)) {
      console.log("BST doesn't have enough nodes.");
      return;
    }

    let curr = root;
    while (curr.right && curr.right.right) {
      curr = curr.right;
    }

    if (!curr.right && curr.left) {
      return curr.left.value;
    }

    return curr.value;
  }

  levelOrder() {
    const queue = [this.root];
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);

      if (curr.left) {
        queue.push(curr.left);
      }

      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  inOrder(root = this.root, result = []) {
    if (root) {
      this.inOrder(root.left, result);
      console.log(root.value);
      result.push(root.value);
      this.inOrder(root.right, result);
    }
  }

  preOrder(root = this.root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  postOrder(root = this.root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(20);
bst.insert(3);
bst.insert(22);
bst.insert(25);
bst.insert(7);
bst.insert(15);


