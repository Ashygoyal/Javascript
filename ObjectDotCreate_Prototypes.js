var person = {
  fname:'Default',
  lname: 'Default',
  greet: function(){
    return 'Hi ' + this.fname; // 'this' keyword is referencing the object
    // if you dont use 'this' here, it'll look in global execution context. 
    // it wond find it there, as ti is inside person object and objects dont 
    // create new execution contexts
  }
};

var john = Object.create(person); // john will create object from 'person'
console.log(john.greet()); // Hi Default

// Object.create creates an empty object with its prototype pointing to
// whatever you passed in to Object.create()

// We can override/hide the default values by simply adding new properties
// as shown below
john.fname = 'Ashish';
john.lname ='Goyal';

console.log(john.greet()); // Hi Ashish



