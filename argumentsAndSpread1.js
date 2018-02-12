function greet(fname, lname, lang) {
  //function greet(fname = 'Ash', lname, lang)
  // The above can be also be achieved by using OR operator as below

  fname = fname || "John";

  if (arguments.length === 0) {
    console.log("Missing Parameters");
    return; // This return brings execution out of the greet function without
    // executing rest of the code below in this function
  }

  console.log(fname);
  console.log(lname);
  console.log(lang);

  console.log(arguments); //returns italicized array like structure with values of arguments
  // If no value is passed, returns empty italicized array

  console.log("arg 0: " + arguments[0]);
  console.log("----------");
}

//greet(); prints- undefined undefined undefined
greet("Jane"); // prints- Jane undefined undefined

//greet('Jane','Doe'); prints- Jane Doe undefined
//greet('Jane', 'Doe','Spanish'); prints- Jane Doe Spanish
