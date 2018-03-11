var arrayOne = new Array("apple", 1, false); // one way to declare Arrays
console.log(arrayOne);

// second way to declare Arrays
// One array can store multiple data types like string, boolean, object, number, function!
// Arrays are collections of anything!

var arrayTwo = [
  21,
  true,
  "Johnny",
  {
    fname: "Jane",
    lname: "Doe"
  },
  function greeting(getname) {
    var hello = "Hello ";
    console.log(hello + getname);
  }
];

console.log(arrayTwo);
arrayTwo[4](arrayTwo[3].fname); //equivalent to greeting('Jane');
