class mySet {
  constructor() {
    this.collection = []
  }
  
  // this method will return all values
  values() {
    return this.collection;
  }
  
  
  // this method will check if a value exist in the stack
  has(value) {
    return (this.collection.indexOf(value) !== -1)
  }
  
  
  // this method will add a new value to the set
  add(value) {
    if (!this.has(value)) {
      this.collection.push(value);
    }
    
    return;
  }
  
  
  // this method will remove a value from the set
  remove(value) {
    if (this.has(value)) {
      const index = this.collection.indexOf(value);
      
      this.collection.splice(index, 1);
    }
    
    return 'Value not found in set';
  }
  
  
  // this method will return size of the set
  size() {
    return this.collection.length;
  }
  
  
  // this method will return union of two sets
  union(otherSet) {
    const unionSet = new mySet();
    const firstSet = this.values();
    const secondSet = otherSet.values();
    
    firstSet.forEach(val => {
      unionSet.add(val);
    });
    
    secondSet.forEach(val => {
      unionSet.add(val);
    });
    
    return unionSet;
  }
  
  
  // this method will return intersection of two sets
  intersection(otherSet) {
    const intersectionSet = new mySet();
    const firstSet = this.values();
    
    firstSet.forEach(val => {
     if (otherSet.has(val)) {
       intersectionSet.add(val);
     }
    });
    
    return intersectionSet;
  }
  
  
  // this method will return the difference of two sets
  difference(otherSet) {
    const differenceSet = new mySet();
    const firstSet = this.values();
    
    firstSet.forEach(val => {
      if (!otherSet.has(val)) {
        differenceSet.add(val);
      }
    });
    
    return differenceSet;
  }
  
  
  // this method will test if a set is a subset of another set
  subset(otherSet) {
    const firstSet = this.values();
    
    return firstSet.every(val => {
      return otherSet.has(val);
    });
  }
}



/*** create two sets ***/
const setA = new mySet();
const setB = new mySet();


/*** test adding method ***/
setA.add('a');
setA.add('b');
setA.add('c');
setA.add('x');
setA.add('w');

setB.add('a');
setB.add('b');
setB.add('c');
setB.add('y');
setB.add('p');


/*** test removing method ***/
setA.remove('w');
setB.remove('p');



/*** other methods test ***/
// console.log('Size:', setA.size(), setB.size());
// console.log('Union:', setB.union(setA));
// console.log('Intersection:', setB.intersection(setA));
// console.log('Difference:', setB.difference(setA));
// console.log('Subset:', setB.subset(setA));
