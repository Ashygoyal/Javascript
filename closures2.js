// CLOSURES example Part2

function buildFunctions() {
  var arr = [];
  for (i = 0; i < 3; i++) {
    arr.push(function() {
      console.log(i); // Here 'i' is free variable
      // A free variable is a avriable that is outside the function but you have access to it
    });
  }
  return arr;
}

var fs = buildFunctions();

fs[0](); //3, because the last value of i, when the for loop is done,is 3
fs[1](); //3, for loop just pushes a function inside array, but doesnt execute it
fs[2](); //3, those 3 functions are executed here when we write fs[0]();

// ********  To resolve this, we can you 'let' variable of ES6

function buildFunctions2() {
  var arr = [];
  for (i = 0; i < 3; i++) {
    let j = i; // Here j is scoped to this block only
    arr.push(function() {
      console.log(j);
    });
  }
  return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();

// ******** Achieving same thing in ES5

function buildFunctions3() {
  var arr = [];

  for (i = 0; i < 3; i++) {
    arr.push(
      (function(j) {
        return function() {
          console.log(j);
        };
      })(i)
    );
  }
  return arr;
}

var fs3 = buildFunctions3();

fs3[0]();
fs3[1]();
fs3[2]();
