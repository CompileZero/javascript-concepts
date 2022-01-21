// Function Statement
function a() {

    console.log("a called");
}

// Function Expression

var b = function () {
    console.log("b called");
};

// Anonymous Function 
// function() {
//     console.log("anonymous");
// }

// Named Function Expression
var d = function xyz() {
    console.log(xyz);
};

d();

// Parameters and arguments
// Variables in the function statement are parameters
// Passing values while calling a function are called arguments

// First Class Functions
// All the functions in javascript are first-class functions, meaning JavaScript treats functions as objects and allow us to pass functions as arguments to another function and even return functions from other functions.