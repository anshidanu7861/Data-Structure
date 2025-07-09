class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  createNewNode(data) {
    let newNode = new Node(data);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
  }
}

let myList = new linkedList();
myList.createNewNode(10);
myList.createNewNode(20);
myList.createNewNode(30);
myList.createNewNode(40);

console.log(myList, "show result");
