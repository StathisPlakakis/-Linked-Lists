import Node from "./node.js";

class LinkedList {
  constructor () {
    this.head = null;
    this.list = '';
  }

  append (value) {
    const newNode =  new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.list += newNode.value;
      this.list += '->'
      console.log(this.list)
      return this.list
    }
  }
}

export default LinkedList