// There are some built-in function constructors in Javascript like: Number, String, Date, etc
/* for example;
var a = new String('John'); // Here 'a' int a primitive type, but its an Object
console.log(String.prototype) // it will show you all the methods available 
// for strings, throughout Javascript. You can use them directly on 'a', like

console.log(a.length); // outputs: 4
*/

// We can use this feature to add new functionalities to primitives, lets say we want to add a 
// function which would be available for all 'strings' throughout..

String.prototype.isLengthGreaterThan = function(limit) {
  return this.length > limit;
};

console.log("John".isLengthGreaterThan(3)); // Javascript automatically converts string 'John' to object

// Example 2

Number.prototype.isPositive = function() {
  return this > 0;
};

// console.log(3.isPositive()); // this wont work because Javascript cant convert numbers to objects
// Although we can do it like this:  
/*
var a = new Number(3);
a.isPositive(); // returns 'true'
*/