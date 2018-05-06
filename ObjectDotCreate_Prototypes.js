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

// Now this Object.create is a new feature in newer browsers. But if
// we need to implement it for older browsers, we will use a polyfill

//Polyfill: is a code which adds a feature that the engine may lack

// *****************************
/*

if(!Object.create){
  Object.create = function(o){
    if(arguments.length>1){
      throw new Error ('Object.create only accepts the first parameter');
    }
    function F(){};
    F.prototype = o; 
    return new F(); // 'new' creates an empty object, runs F() which is empty,
    // and points the prototype of the new empty object to whatever you passed in.
  };
}

*/
// *********************************



