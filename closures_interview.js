function x() {
    for (var i = 1; i <= 5; i++) {
        function close(i) {
            setTimeout(function () {
                console.log(i);
            }, i * 1000);
        }
        close(i);
    }

    console.log("Hello");
}


function outer(i) {
    let a = i;
    function inner(j) {
        console.log(a + j);
    }
    return inner;
}
let c;
const f1 = outer(c);
c += 1;
const f2 = outer(c);
f1(c);
f2(c);

