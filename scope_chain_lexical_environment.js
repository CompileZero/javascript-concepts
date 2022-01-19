// Wherever a new execution context is created, a lexical environment is also created.
// Lexical environment = Local memory + Lexical Envt of Parent
// lexically: hierarchically
function a() {
    var b = 10;
    c();

    function c() {

    }
}

// Here function c is lexically present inside a. So c's lexical environment contains the memory part (from execution context) of c as well as the reference to the lexical environment of a.
// Function a contains lexical environment of memory part of a as well as the reference to the lexical environment of Global Execution Context.
// 