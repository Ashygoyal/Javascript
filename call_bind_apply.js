// all functions in Javascript have access to a call, bind and apply method

var person = {
  fname: "Ashish",
  lname: "Goyal",
  getFullName: function() {
    var fullname = this.fname + " " + this.lname;
    return fullname;
  }
};

var logName = function(lang1, lang2) {
  console.log("Logged: " + this.getFullName()); // this will fail because the 'this'
  // keyword at this level points to the global object
  console.log("Arguments: " + lang1 + " " + lang2);
  console.log("----------------------------------");
};

var newLogName = logName.bind(person);
// bind() method returns a new function, it makes a copy of
// whatever function you are calling it on (in this case,logName function)

//OR, alternate way, call bind() on the fly

// var logName = function(lang1, lang2){
//   console.log('Logged: ' + this.getFullName());
// }.bind(person);

newLogName();
// since newLogName is a copy of logName, it still accepts the arguments lang1, lang2
newLogName("english", "espanol");

// call() doesnt create a copy of the function, it executes the function itself.
// it takes an object to which 'this' will refer to, and arguments
logName.call(person, 'en','es');

// apply() does same thing as call(), only difference is, it accepts an array of parameters.
var arr=['en','es'];
logName.apply(person, arr);

// ********* Real life situations to use call, bind, apply ******

//Example1: Function Borrowing
var person2 = {
  fname:'John',
  lname:'Doe'
} ;
// this person object doesnt have a getFullName function,
// so we borrow it from another object

console.log(person.getFullName.apply(person2)); // we can achieve same result using 'call' method
