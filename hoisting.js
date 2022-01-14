// Hoisting is a concept in JS where we can access variables and functions even before their initialisation in the program
// Before the program starts execution, the JS engine stores the variable x in the memory part of the execution context, and assigns it a value of undefined
console.log(x); // Log: 7, because variable x is hoisted
var x = 7;
// ---- //

console.log(y); // Log: Reference error: variable uninitialised, as variables declared with let, do get hoisted but they do not get initialised.
// Hence an exception is thrown.
// Here the variable y is said to be in the temporal dead zone
var y = 8;
// ---- //
// If we check in the sources -> Global Scope, we can see that the function is already available, 
// even before the execution of the program starts! The function is hence hoisted
getName(); // Log: Get Name function is hoisted!
function getName() {
    console.log("Get Name function is hoisted!");
};



// ---- //
console.log(getName2); // Log: undefined, because the function name getName is hoisted and initialised with undefined
//but the function body is not yet defined in the global scope
getName2(); // This will TypeError: getName2 is not a function!
var getName2 = () => {
    console.log("New Function!");
};

// 1. Variable declarations are scanned and are made undefined
// 2. Function declarations are scanned and are made available