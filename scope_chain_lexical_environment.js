// Wherever a new execution context is created, a lexical environment is also created.
// Lexical environment = Local memory + Lexical Envt of Parent
// lexically: hierarchically, one inside another
function a() {
    var b = 10;
    c();

    function c() {
        console.log(b);
    }
}
a();
// Here function c is lexically present inside a. So c's lexical environment contains the memory part (from execution context) of c as well as the reference to the lexical environment of a.
// Function a contains lexical environment of memory part of a as well as the reference to the lexical environment of Global Execution Context.

// Lexical Environment is the environment of the function where it is written. That is, the static order/place where it is situated, regardless from where it is called from.
// Scope of a variable/function is basically the locations from where a variable is visible/accessible.
// Scope Chain - The entire chain of all the lexical environments and its parent references.
