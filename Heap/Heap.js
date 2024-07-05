class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    let i = this.heap.length - 1;
    while (i > 0 && this.heap[Math.floor((i - 1) / 2)] > this.heap[i]) {
      [this.heap[Math.floor((i - 1) / 2)], this.heap[i]] = [
        this.heap[i],
        this.heap[Math.floor((i - 1) / 2)],
      ];
      i = Math.floor((i - 1) / 2);
    }
  }

  remove() {
    const root = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapify(0);
    return root;
  }

  heapify(i) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let smallest = i;

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== i) {
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      this.heapify(smallest);
    }
  }

  buildHeap(arr) {
    this.heap = arr;

    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      this.heapify(i);
    }
  }

  sort(arr) {
    this.buildHeap(arr);
    const result = [];

    for (let i = this.heap.length - 1; i >= 0; i--) {
      [this.heap[0], this.heap[i]] = [this.heap[i], this.heap[0]];
      result.push(this.heap.pop());
      this.heapify(0);
    }

    return result;
  }

  display() {
    console.log(this.heap);
  }
}

const heap = new MinHeap();
