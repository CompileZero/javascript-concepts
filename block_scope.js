{
    // This is valid javascript
    // Block is also called a compound statement
    // We group multiple statements in a block where JavaScript expects 1 statement
}
if (true) console.log("Hello");//This will print an error, because JS expects a single statement
var a = 100;
let b = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a); // a is shadowed and its value would be 10
console.log(b); // b is shadowed

function a() {
    console.log("Hello");
}
console.log(a);

// Illegal Shadowing
function func() {
    var m = 'Geeks';
    let n = 'Geeks';

    if (true) {
        let m = 'GeeksforGeeks'; // Legal Shadowing
        var n = 'Geeks'; // Illegal Shadowing
        console.log(m); // It will print 'GeeksforGeeks'
        console.log(n); // It will print error
    }
}
func();

// Var is function scoped, hence after shadowing the entire value changes
// Let and const is block scoped so shadowed values are only valid within their scope

const i = 10;

{
    const i = 100;
    console.log(i); // Logs 100
    {
        const i = 1000;
        console.log(i); // Logs 1000
    }
}

console.log(i); // Logs 1000