class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
  toString() {
    return ` ${this.element} =>`;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(element) {
    let node = new Node(element);
    node.id = this.size;
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  isEmpty() {
    return this.size == 0;
  }
  get first() {
    return this.head;
  }
  get last() {
    let lastNode = this.head;
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    return lastNode;
  }
  draw() {
    let lastNode = this.head;
    let string = "";
    while (lastNode) {
      string += lastNode.toString();
      lastNode = lastNode.next;
      console.log(string);
    }
  }
  removeKNode(k) {
    if (k && k > this.size) {
      return -1;
    } else {
      let currentNode = this.head;
      let previousNode = currentNode;
      let count = 0;
      if (k === 0) {
        this.head = currentNode.next;
      } else {
        while (k > count) {
          count++;
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;
      }
    }
    this.size -= 1;
  }
  reverse() {
    let node = this.head,
      previous,
      temporary;
    while (node) {
      temporary = node.next;
      node.next = previous;
      previous = node;
      node = temporary;
    }
    return previous;
  }
  circular() {
    let first = this.head;
    let second = this.head;
    while (second && second.next) {
      first = first.next;
      second = second.next.next;
      if (first === second) {
        return true;
      }
    }
    return false;
  }
}
//TODO add circular with id
let linked = new LinkedList();
linked.add(1);
linked.add(2);
linked.add(3);
linked.add(4);
linked.add(5);
linked.add(7);
linked.add(8);
linked.add(9);
linked.add(10);

// linked.reverse();
linked.last.next = linked.head;

console.log(linked.circular());
