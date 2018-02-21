// function statement
function greet(name) {
  console.log("Hi " + name);
}
greet("John");

// function expression
var greetFunc = function(name) {
  console.log("Hola " + name);
};
greetFunc("Jane");

// using an Immediately Invoked Function Expression
var greeting = (function(name) {
  return "Hello " + name;
})("Jimmy");
//console.log(greeting);

// below lines are valid Javascript expressions, wont throw any errors
/* Case1 */ 3;
/* Case2 */ ("I am Ashish");
/* Case3 */ {
  fname: "John";
}
//But we cant write a function the same way
/* 
function(name){
  return 'Yes please, its concept'
}
*/

//Below block will give error
//To prevent it, wrap entire body in parenthesis

(function(name) {
  console.log("Namaste " + name);
})("Hmm"); // IIFE Example - param inside brackets
//  })('Hmm');  // IIFE Example - param outside brackets
