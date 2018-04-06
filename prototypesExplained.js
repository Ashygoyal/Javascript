// Functions, Arrays, Basic objects, all have a prototype, except for
// the 'base' object in javascript. The base object in Javascript is called 'Object'.
// Its the very bottom of prototype chain, always. Everything eventually leads to the base Object.

var a = {};
var b = function() {};
var c = [];

console.log(a.__proto__); //[object Object] { ... }
console.log(b.__proto__); // function () { [native code] }
console.log(c.__proto__); // []
// in Chrome console, type 'c.__proto__.'
// You'll see all properties/ methods available on an Array object
// Similarly, different properties for 'a'(Object) and 'b' (Function Object)

/* 
prototype is the object that is used to build __proto__ when you create an object with new.

prototype is not available on the instances themselves (or other objects), but only on the constructor functions.

prototype is only available on functions since they are copied from Function and Object, but in anything else it is not. 
However, __proto__ is available everywhere.
*/

//Foo is function()
//( new Foo ).__proto__ === Foo.prototype  //true
//( new Foo ).prototype === undefined      //true

// We can stop the prototype chain at a desired point (object) in hierarchy
// by equating that object's prototype to 'null'
