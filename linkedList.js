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

  prepend (value) {
    const newNode =  new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.list += newNode.value;
      this.list += '->'
      console.log(this.list)
      return
    }
    let prevHead = this.head;
    this.head = newNode;
    this.head.nextNode = prevHead;
    this.list = `${newNode.value}->` + this.list
    console.log(this.list)
  }

  size () {
    if (!this.head) {
      return 0;
    }
    let numberOfNodes = 1;
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
      numberOfNodes += 1;
    }
    return numberOfNodes;
  }

  headS () {
    if (!this.head) return null;
    return this.head;
  }

  tail () {
    if (!this.head) return null;
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  at (index) {
    if (
        typeof  index !== 'number' ||
        !this.head || 
        index > this.size() - 1 || 
        index < 0
        ) {
          return null;
        }
    let currentIndex = 0;
    let current = this.head;
    while (currentIndex < index) {
      current = current.nextNode;
      currentIndex += 1;
    }
    return current;
  }

  pop () {
    if (!this.head) return
    if (!this.head.nextNode) {
      this.head = null;
      return 
    }
    let prevNode = this.head;
    let current = this.head.nextNode;
    while (current.nextNode) {
      prevNode = current;
      current = current.nextNode;
    }
    prevNode.nextNode = null;
  }

  contains (value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find (value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index += 1
    }
    return null;
  }
}

export default LinkedList