
// abc();

// function Person(first, last) {
//     this.first = first;
//     this.last = last;
//     this.test = function () {
//         console.log(this);
//     };
//     // this.test();
// }
// let ath = new Person("Atharva", "K");
// ath.test();
// console.log();
// let a = new abc("Atharva");
// console.log(a);
// this;;

// const a = {
//     val: 2,
//     dates: [1, 2, 3, 4, 5],
//     name: {
//         firstName: "A",
//         lastName: "B"
//     }
// };

// const b = a;


// // const b = JSON.parse(JSON.stringify(a));
// // b.val = 2;

// const c = Object.assign(a);
// c.val = 2;
// console.log(a.val);
// // console.log();


function abc() {

    function a() {
        console.log(this);
    }

    this.test = function test() {
        a();
        console.log(this);
    };
    // test();
    this.test = this.test.bind(this);
    // this.test();

};

const { test } = new abc();

function new1() {
    test();
}

new1();
// (new abc()).test();