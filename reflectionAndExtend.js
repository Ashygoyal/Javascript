// Reflection: An object can look at itself, listing and changing
// its properties and methods

// We can use this to implement a very useful concept 'Extend'

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

// dont do this, it is for demo purposes only
john.__proto__ = person;

// for-in loop will loop over every member in the object
// and variable 'prop' will be the current item which we are looking at

for (var prop in john) {
  console.log(prop + ": " + john[prop]);
}

// the for-in loop, actually reached out and grabbed every property and method
// not just on the object, but also on the object's prototype

console.log("----------------------------------------------");

// To restrict, for-in only to the 'john' object, we can do this

for (var prop in john) {
  if (john.hasOwnProperty(prop)) {
    console.log(prop + ": " + john[prop]);
  }
}

// This method above is a complement to Prototypes, but isnt available in Javascript

// ********  Using the underscore library for below set of code.

var jane = {
  address: "111, Soho St.",
  getFormalFullName: function() {
    return this.fname + " " + this.lname;
  }
};

var jim = {
  getFirstName: function() {
    return this.fname;
  }
};

// We are not putting these to prototype chain, because may be they are useful
// individually but not as prototypes of each other.

console.log("****************************");
_.extend(john, jane, jim); // the 'extend' method of underscore combines these objects
console.log(john);

// We can use the 'reflection' and 'extend' method, rather than 'prototypes',
// to combine and compose objects.
