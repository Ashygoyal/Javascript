// Inheritance (in Javascript): One object gets access to the properties
// and methods of another object

// Classical Inheritance: The way inheritance is implemented in C++, Java, etc
// Its very verbose, involves lot of concepts and keywords like: friend, protected, private, interface

// Prototypal Inheritance: It is simple, flexible, extensible, easy to understand

//**********************************************************************

// All objects in Javascript (including functions) have a 'prototype'(proto{}) property,
// this property is simply a reference to another object, called 'proto'

var person = {
  fname: "Default",
  lname: "Default",
  getFullName: function() {
    return this.fname + " " + this.lname;
  }
};

var john = {
  fname: "John",
  lname: "Doe"
};

// dont do this, its for demo purposes only
// you are never going to name your property or function like __proto__,
// hence it has been named in this format.

john.__proto__ = person; // john now inherits person

// If you call a property/ method on 'john', and it doesnt exist in john,
// javascript engine will go and find it in 'person', and if not found there,
// it'll go and find it in 'person.proto', and down the chain

console.log(john.getFullName()); // John Doe
console.log(john.fname); // John

// the above line doesnt output 'Default', because of prototype chain, it
// first finds the property in 'john' object. If it doesnt find that there,
// only then will it go to further up in the prototype chain

console.log(john.__proto__.fname); // Default

var jane = {
  fname: "Jane"
};

jane.__proto__ = person;
console.log(jane.getFullName()); // Jane Default
