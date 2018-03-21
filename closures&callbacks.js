function sayHiLater() {
  var greeting = "hi!";

  setTimeout(function() {
    console.log(greeting); // closure-function inside function, here 'greeting' is accessible from outer scope
  }, 3000);
}

sayHiLater();

// jQuery uses function expressions and first class functions!
//$("button").click(function(){
//
//});

// A callback function, also known as a higher-order function,
// is a function that is passed to another function (let’s call this
// other function “otherFunction”) as a parameter, and the callback
// function is called (or executed) inside the otherFunction.

// Higher Order Function: A higher-order function (also functional, functional form or functor) 
// is a function that does at least one of the following: takes one or 
// more functions as arguments (i.e., procedural parameters), returns 
// a function as its result

// First class function: A programming language is said to have 
// First-class functions when functions in that language are treated 
// like any other variable. For example, in such a language, a function 
// can be passed as an argument to other functions, can be returned by 
// another function and can be assigned as a value to a variable. 

function tellMeWhenDone(callback) {
  var a = 1000;
  var b = 2000;

  callback();
}

tellMeWhenDone(function() {
  console.log("I am done");
});

tellMeWhenDone(function() {
  console.log("All done");
});
