function makeAdder(x) {

    return function(y) {
        return x + y;
    };
};

const add10 = makeAdder(10);
const add15 = makeAdder(15);

console.log(add10(5));
console.log(add15(5));