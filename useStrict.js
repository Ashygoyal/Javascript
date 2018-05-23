// In Detail: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

// use strict can be the first line of a js file or first line of
// a function

var person;

persom = {};  
console.log(persom); // wont throw any error, as 'use strict' isnt the first line of this file


// ******************************** 

function demoFunc(){
  "use strict";
   var person1;
  
  persom1 ={}; 
  console.log(persom1);
}

demoFunc();  // Uncaught ReferenceError: persom1 is not defined

// If we have 5 js files. First file has 'use strict'. We concatenate
// and minify all 5 files into a single file, then 'use strict' will be
// set for all 5 files. Be careful there.