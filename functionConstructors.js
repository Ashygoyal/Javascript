// Building Objects

// one way: Object Literal Syntax i.e. var obj = { props/methods here };
// second way: Function Constructors and 'new' - Function Constructor is a function
// that is specifically used to construct an object

function Person() {
  this.fname = "John";
  this.lname = "Doe";
}

var john = new Person(); // 'new' is an operator
console.log(john); // Output: Person {fname: "John", lname: "Doe"}

// Now you can create as many objects like 'john' using 'new' keyword with function Person
// But all those will have same values of fname and lname. To make it generic, we pass parameters, as below

function Person1(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}

var jane = new Person1("Jane", "Doe");
console.log(jane); // Output: Person1 {fname: "Jane", lname: "Doe"}

// In above example, we are telling that function, what values to take while constructing the object
