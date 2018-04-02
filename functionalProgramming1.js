// Javascript is more like functional programming languages (LISP, Schema, ML)
// These languages have 1st class functions- functions that behave as objects,
// you can pass them as parameters, you can return them as functions.

var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = [];
for (var i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}

console.log(arr2);

//----- using functional programming below -------------

function mapForEach(arr, fn) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  return newArr;
}

var arr3 = [1, 2, 3];
var arr4 = mapForEach(arr3, function(item) {
  return item * 2;
});

console.log("This is Array4: " + arr4);

var arr5 = mapForEach(arr3, function(item) {
  return item > 2;
});

console.log("This is Array5: " + arr5);

// --------- one more example --------------------

var checkPastLimit = function(limiter, item) {
  return item > limiter;
};

// The fn in mapForEach() takes only one argument, but in checkPastLimit
// we are passing two arguments, so we need to set value of 'limiter' to a constant, and
// we can do it by using 'bind'.

var arr6 = mapForEach(arr3, checkPastLimit.bind(this, 1));

console.log("This is Array 6: " + arr6);
