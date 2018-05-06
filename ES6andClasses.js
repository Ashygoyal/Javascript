// ES6 and Classes

// A javascript class defines an object
// it has a constructor which can be used to pre-set the values

class Person {
  constructor(fname, lname){
    this.fname = fname;
    this.lname = lname;
  }
  greet(){
    return 'Hi ' + fname;
  }
}

var john = new Person('John','Doe');

// Here, the 'extends' keyword, sets the prototype, and a 'super' keyword (inside constructor)
// which simply will call the constructor of the object that is prototype

class InformalPerson extends Person {
  constructor(fname, lname){
    super(fname, lname);
  }
  greet(){ // We are overriding the greet() here, the same way as we do in Object.create
    return 'Hey' + fname;
  }
}


