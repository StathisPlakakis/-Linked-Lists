import Node from "./node.js";

class LinkedList {

  constructor () {
    this.head = null;
    this.list = '';
  }

  append (value) {
    const newNode =  new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.list += newNode.value;
      this.list += '->'
      console.log(this.list)
      return
    }
    let last = this.head;
    while (last.nextNode) {
      last = last.nextNode;
    }
    last.nextNode = newNode;
    this.list += newNode.value;
    this.list += '->'
    console.log(this.list)
  }
}

export default LinkedList