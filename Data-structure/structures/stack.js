class myStack {
  constructor() {
    this.storage = {},
      this.count = 0
  }

  // this method push new value to the stack
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }
  
  
  // this method popped out a value from the stack
  pop() {
    if (this.count === 0) return undefined;
    this.count--;

    
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result; // return popped value
  }
  
  
  // this method take peek at the last value of the stack
  peek() {
   return this.storage[this.count - 1];
  }
  
  // this method return the size of the stack 
  size() {
     return this.count;
  }
}



/*** test logs ***/
// const demo = new myStack();
// demo.push('string value');
// demo.push(1);
// demo.push(true)
// console.log('Popped out:', demo.pop())
// console.log('Peak:', demo.peek())
// console.log('Count:', demo.size())