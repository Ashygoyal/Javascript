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
