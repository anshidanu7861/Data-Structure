class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class tree {
  constructor() {
    this.root = null;
  }
  insertion(node) {
    let newNode = new Node(node);
    if (!this.root) {
      this.root = newNode;
    }
    let curr = this.root;
    while (true) {
      if (node == curr.data) return undefined;

      if (node < curr.data) {
        if (!curr.left) {
          curr.left = newNode;
          return this;
        }
        curr = curr.left;
      } else {
        if (!curr.right) {
          curr.right = newNode;
          return this;
        }
        curr = curr.right;
      }
    }
  }
  remove(data) {
    const deleteNode = (node, data) => {
      if(node == null) {
        return null
      }
      if(data < node.data) {
        node.left = deleteNode(node.left, data)
      }else if(data > node.data) {
        node.right = deleteNode(node.right, data)
      }else{
        if(node.left == null && node.right == null) {
          node = null
        }else if(node.left == null) {
          node = node.right
        }else if(node.right == null) {
          node = node.left
        }else{
          let temp = this.minNode(node.right)
          node.data = temp.data
          node.right = deleteNode(node.right, temp.data)
        }
      }
      return node;
    }
    this.root = deleteNode(this.root, data)
  }
  minNode(node) {
    if(node.left == null) {
      return node;
    }
    this.minNode(node.left)
  }
  inOrder(node) {
   if(node.left) {
    this.inOrder(node.left)
    }
   console.log(node.data);

   if(node.right) {
    this.inOrder(node.right)
   }
  }

}

let x = new tree();
x.insertion(10);
x.insertion(1);
x.insertion(2);
x.insertion(11);
x.insertion(13);
x.insertion(14);
x.remove(2);
x.inOrder(x.root)

console.log(x);
