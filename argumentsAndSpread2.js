// ... is Spread operator, its a javascript Array

var greet = function (fname, lname, age, ...others) {
    console.log(fname);
    console.log(lname);
    console.log(age);
    console.log(arguments);
    console.log('--------------------');
    console.table(arguments[0]);
}

greet();
greet('Jane');
greet('Jane', 'Doe');
greet('Jane', 'Doe', 12);
greet('Jane', 'Doe', 11, 'Newark', 'United States', 'hello world);');
// no matter how many arguments you pass other than the ones explicitly mentioned in function declaration
// will be held by ...others

