console.log(this); // 'this'  points to the global Window object

function a() {
  console.log(this); // here 'this' points to the global Window object
}

var b =function(){
  console.log(this); // here too 'this' points to the global window object
}



var fname = 'Ash';
var c = {

    fname: 'Ashish',
    lname: 'Goyal',
    fullName: function () {
        // In next line 'this' will point to the object 'c' and not the global object
        var self = this; 
        self.fname = 'John'; // mutates the value of 'fname' from Ashish to John
        console.log(self);

        var setname = function (newname) {
            // If we use 'this' keyword without assigning it to a variable ('self' in this case),
            // 'this' will point to the global object, despite being inside function (which is inside method of an object)
            // and it will mutate the value of 'fname' in global namespace (some say its a bug in JavaScript).
            // To avoid conflicting namespaces, we assign 'this' to a variable (by reference)
            self.fname = newname;  
        }
        setname('Jane');   // This will mutate 'fname' of object 'c' from Ashish to Jane, rather than mutating in global namespace
        console.log(self);
    }
}

c.fullName();