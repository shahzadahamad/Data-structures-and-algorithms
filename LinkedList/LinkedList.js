class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return console.log("Invalied Index!");
    }

    if (index === 0) {
      this.prepend(value);
    } else if (index === this.size) {
      this.append(value);
    } else {
      const newNode = new Node(value);
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      newNode.next = curr.next;
      curr.next = newNode;
      this.size++;
    }
  }

  deleteByIndex(index) {
    if (index < 0 || index >= this.size) {
      return console.log("Invalied Index!");
    }

    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      removeNode = curr.next;
      curr.next = removeNode.next;
      if (index === this.size - 1) {
        this.tail = curr;
      }
    }
    this.size--;
  }

  deleteByValue(value) {
    if (this.isEmpty()) {
      return console.log("The List is Empty!");
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
    } else {
      let curr = this.head;
      while (curr.next && curr.next.value !== value) {
        curr = curr.next;
      }
      if (curr.next) {
        let removeNode = curr.next;
        curr.next = removeNode.next;
        this.size--;
        return;
      }
      return console.log("Value not found!");
    }
  }

  searchValue(value) {
    if (this.isEmpty()) {
      return console.log("The List is Empty!");
    }

    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) return console.log(i);
      curr = curr.next;
      i++;
    }
    return console.log("Value not found!");
  }

  reverseList() {
    if (this.isEmpty()) {
      return console.log("The List is Empty!");
    }

    let curr = this.head;
    let prev = null;
    let next = null;

    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.tail = this.head;
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      return console.log("The List is Empty!");
    } else {
      let curr = this.head;
      let list = "";
      while (curr) {
        list += `${curr.value} -> `;
        curr = curr.next;
      }
      console.log(list);
    }
  }
}

const list = new LinkedList();
list.prepend(20);
list.append(100);
list.print();
list.reverseList()
list.print()