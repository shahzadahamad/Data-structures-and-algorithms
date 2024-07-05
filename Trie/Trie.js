class Node {
  constructor() {
    this.children = new Map();
    this.isWordEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let curr = this.root;
    for (const char of word) {
      if (!curr.children.has(char)) {
        curr.children.set(char, new Node());
      }

      curr = curr.children.get(char);
    }
    curr.isWordEnd = true;
  }

  search(word) {
    let curr = this.root;
    for (const char of word) {
      if (!curr.children.has(char)) {
        return false;
      }

      curr = curr.children.get(char);
    }
    return curr.isWordEnd;
  }

  prefix(word) {
    let curr = this.root;
    for (const char of word) {
      if (!curr.children.has(char)) {
        return false;
      }

      curr = curr.children.get(char);
    }
    return true;
  }
}

const trie = new Trie;
trie.insert('shahzad');
trie.insert('vishnu');
console.log(trie.prefix('shahf'))