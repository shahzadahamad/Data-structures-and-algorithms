class Graph {
  constructor() {
    this.list = new Map();
  }

  addVertex(data) {
    this.list.set(data, []);
  }

  insert(vertex, edge, isBidirectional) {
    if (!this.list.has(vertex)) {
      this.addVertex(vertex);
    }

    if (!this.list.has(edge)) {
      this.addVertex(edge);
    }

    this.list.get(vertex).push(edge);
    if (isBidirectional) {
      this.list.get(edge).push(vertex);
    }
  }

  delete(vertex) {
    if (!this.list.has(vertex)) {
      console.log("vertex not found");
      return true;
    }

    for (const [key, value] of this.list) {
      const index = value.indexOf(vertex);
      if (index !== -1) {
        value.splice(index, 1);
      }
    }

    this.list.delete(vertex);
  }

  display() {
    for (const [key, value] of this.list) {
      console.log(key + " : " + value.join(" "));
    }
  }
}

const graph = new Graph();
graph.insert(2,5,true);
graph.insert(3,5,false);
graph.insert(2,3,false);
graph.insert(8,9,false);
graph.insert(4,1,true);
graph.insert(2,8,false);
graph.insert(3,1,false);
graph.insert(5,4,false);
graph.display()
