// Arrays and for..in loop

Array.prototype.myCustomFeature = "cool!";

var arr1 = ["John", "Doe", "Jane", "Ash"];

for (var prop in arr1) {
  console.log(prop + ": " + arr1[prop]);
}

// outputs
/*
0: John
1: Doe
2: Jane
3: Ash
myCustomFeature: cool!
*/

// Because of this reason, it is not preferred to use for..in
// with arrays in Javascript, because it might iterate through prototype
// chain. Instead it is advised to use normal 'for' loop.
