const b;
b = 1000; //Will throw a syntax error: Assignment to constant variable

let a = 45;
let a = 50;// Will throw a syntax error: Identifier 'a' has already been declared
var a = 55; // Will throw a syntax error: Identifier 'a' has already been declared

// Best practises: Use const wherever possible, then use let wherever possible (because of the Temporal Dead Zone), is function scoped, avoids memory leaks, 
// Var is function scoped
// Let and const is block scoped