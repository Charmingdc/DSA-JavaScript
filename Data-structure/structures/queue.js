/*** NORMAL QUEUE ***/

class Queue {
  constructor() {
    this.collection = []
  }
  
  // this method will print the collection 
  print() {
    console.log(this.collection);
  }
  
  // this method will add a new value to the collection 
  enqueue(value) {
    this.collection.push(value);
  }
  
  // this method will remove the first value from the collection
  dequeue() {
    return this.collection.shift();
  }
  
  // this method will return the first value in the collection
  front() {
    return this.collection[0];
  }
  
  // this method will return the size of the collection 
  size() {
    return this.collection.length;
  }
  
  // this method will check if the collection is empty
  isEmpty() {
    return (this.collection.length === 0)
  }
}

/*
const myQueue = new Queue();
myQueue.enqueue('hello');
myQueue.enqueue('world');
console.log('Front:', myQueue.front());
myQueue.print();
console.log('Dequeue:', myQueue.dequeue());
console.log('Is Empty:', myQueue.isEmpty());
console.log('Size:', myQueue.size());
*/






/*** PRIORITY QUEUE  ***/
class PriorityQueue {
  constructor() {
    this.collection = []
  }
  
  // this method will print the collection
  print() {
    console.log(this.collection);
  }

  // this method will insert a new value in the collection based on value priority
  enqueue(value) {
    if (this.isEmpty()) {
      this.collection.push(value);
    } else {
      let added = false;
      
      for (let x = 0; x < this.collection.length; x++) {
        if (value[1] < this.collection[x][1]) {
          this.collection.splice(x,0,value)
          added = true;
          break;
        }
      }
      
      if (!added) {
        this.collection.push(value);
      }
    }
  }

  // this method will remove the first value from the collection
  dequeue() {
    return this.collection.shift();
  }
  
  // this method will return the first value in the collectio
  front() {
    return this.collection[0];
  }
  
  // this method will return the size of the collection 
  size() {
    return this.collection.length;
  }
  
  // this method will check if the collection is empty
  isEmpty() {
    return (this.collection.length === 0);
  }
}

/*
const pQ = new PriorityQueue();
pQ.enqueue(['hello', 3]);
pQ.enqueue(['world', 4]);
pQ.enqueue(['dsa', 2]);
pQ.enqueue(['learning', 1]);
pQ.print();
*/