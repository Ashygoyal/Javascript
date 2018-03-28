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
