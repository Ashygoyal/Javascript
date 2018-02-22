// CLOSURES- Part 1

function greet(randomGreeting) {
  return function(name) {
    console.log(randomGreeting + " " + name);
  };
}

greet("Hi")("John"); // invoking the function which returns a function

// another way to achieve the same, as in above line
var sayHi = greet("Namaste");
sayHi("Jane");

// indeed the greet function has finished (popped off the memory),
// any functions created inside of it, when invoked, still have a reference
// to the greet function's memory space
