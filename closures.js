function a() {
    var b = 45;
    function c() {
        var d = 10;
        function e() {
            console.log(b, d);
        }
        e();
    }
    c();
}
a();
//Closure: A Function alongwith its lexical scope is a closure
// If a function is accessing a variable from a scope above it, then it forms a closure