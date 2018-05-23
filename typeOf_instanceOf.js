var a =3;
console.log(typeof a); // number

var b = 'John';
console.log(typeof b); // string

var c ={};
console.log(typeof c); // object

var d = [];
console.log(typeof d); //  object, but its an Array
console.log(Object.prototype.toString.call(d)); // [object Array]

function Person(name){
  this.name = name;
}
console.log(typeof Person); // function

var e = new Person('Johnny');
console.log(typeof e); // object
console.log(e instanceof Person); // true

console.log(typeof undefined); // undefined
console.log(typeof null); // object, this is a bug in Javascript, many
// libraries are using this property, hence it was never corrected.
