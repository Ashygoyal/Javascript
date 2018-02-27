// FACTORIES - A function that returns or makes other things for us
/*
When a function returns an object, we call it a factory function.
Example:
function createJelly() {
  return {
    type: 'jelly',
    colour: 'red'
    scoops: 3
  };
}
Each time we call this factory, it will return a new instance of the jelly object.

More details here: https://www.sitepoint.com/factory-functions-javascript/
*/

function makeGreeting(language) {
  return function(fname, lname) {
    if (language == "en") {
      console.log("Hello " + fname + " " + lname);
    }
    if (language == "es") {
      console.log("Hola " + fname + " " + lname);
    }
  };
}

var greetInEnglish = makeGreeting("en")("Jane", "Doe");
var greetInSpanish = makeGreeting("es")("John", "Doe");
