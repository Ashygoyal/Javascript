// Example2: Function Currying - Creating a copy of a function but with some preset parameters

// passing parameters to bind(), sets the permanent values of the parameters when the copy is made
function multiply(a, b) {
  return a * b;
}

//case1
var multiplyByTwo = multiply.bind(this, 2); // 2 will be the permanent value of 'a'
console.log(multiplyByTwo(4)); // 4 will be the value of 'b'

//case2
// var multiplyByTwo = multiply.bind(this, 2,4); // this will set permanent value of 'b' to 4
// console.log(multiplyByTwo(6)); // now whatever you pass here, result will always be 2*4=8 i.e.
// it'll always take permanent values of 'a' and 'b'
