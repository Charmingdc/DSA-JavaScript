class myStack {
  constructor(storage, count) {
    this.storage = {},
    this.count = 0
  }
  
  
  push(value) {
    this.storage[this.count] = value; // add value to stack storage
    this.count++; // increment storage count
  }
  
  
  pop() {
    // return undefined is there's no value in the storage
    if (this.count === 0) return undefined;
    
    this.count--; // decrement count
    
    // set the last value in the stack as result value
    const result = this.storage[this.count];
    
    // delete popped value from the storage
    delete this.storage[this.count];

    return result; // return popped value
  }
  
  peek() {
    // return last value in the storage without deleting it
    return this.storage[this.count-1];
  }
  
  size() {
    // return count number
    return this.count;
  }
}



// const demo = new myStack();
// demo.push('hello');
// demo.push('world');
// demo.push('test'); 
// console.log('Popped out:', demo.pop())
// console.log('Peak:', demo.peek())
// console.log('Count:', demo.size())