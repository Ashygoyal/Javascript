function Person(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}
// the 'prototype' here starts its life as an empty object, its always there
// you can add on to it

Person.prototype.getFullName = function() {
  return this.fname + " " + this.lname;
};

var john = new Person("John", "Doe");
console.log(john.__proto__);

// (john.__proto__) point to (Person.prototype)

var jane = new Person("Jane", "Doe");
console.log(jane.getFullName());
// jane has access to getFullName()

// When you used the Function Constructor(new keyword),
// it already set the prototype for you.
// *************************************************************************
// 'prototype' property on a function is not the prototype of the function,
// Its the prototype of any objects created, if we are using the function
// as a function constructor

// We can add 'something' to prototype on the fly, later and then all objects
// that were created already before (john, jane) will have access to the
// newly added 'something'

Person.prototype.getFormalFullName = function() {
  return this.lname + ", " + this.fname;
};

console.log(john.getFormalFullName());

// We could have created/added getFullName or getFormalFullName inside 'Person',
// but then each new object formed would have a copy of getFullName
// and takes up more memory space.

// But if you add getFullName to prototype, there is only one method, even
// though there are 1000 new objects.
