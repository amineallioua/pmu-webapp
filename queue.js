class Queue {
    constructor(maxLength) {
      this.elements = [];
      this.maxLength = maxLength;
    }
    
    enqueue(node) {
      if (this.elements.length < this.maxLength) {
        this.elements.push(node);
      } else if (this.elements.length == this.maxLength) {
        this.elements.shift();
        this.elements.push(node);
      } else {
        console.log("Queue is full. Cannot add element.");
      }
    }
    
    dequeue() {
      if (this.elements.length > 0) { 
        return this.elements.shift();
      } else {
        return 'Underflow situation';
      }
    }
    
    isEmpty() {
      return this.elements.length == 0;
    }
    
    front() {
      if (this.elements.length > 0) {
        return this.elements[0];
      } else {
        return "The Queue is empty!";
      }
    }
    rear() {
        if (this.elements.length > 0) {
          return this.elements[this.maxLength-1];
        } else {
          return "The Queue is empty!";
        }
      }
    
    get_elements() {
      return this.elements;
    }
  }
  