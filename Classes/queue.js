class queue {
  constructor(maxLength) {
    this.maxLength = maxLength;
    this.queue = [];
  }

  push(element) {
    if (this.queue.length === this.maxLength) {
      this.dequeue(); // Automatically dequeue if queue is full
    }
    this.queue.push(element);
  }

  dequeue() {
    return this.queue.shift(); // Remove and return the oldest element
  }

  peek() {
    return this.queue[0]; // Return the oldest element without removing it
  }

  length() {
    return this.queue.length; // Return the current length of the queue
  }
   printQueue() {
        return this.queue;
    }
}
module.exports = queue;
