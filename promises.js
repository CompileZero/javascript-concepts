// let i = 1;

// function performAsyncOperation() {
//     return new Promise((resolve, reject) => {
//         let i = 0;
//         while (i < 10000000000) {
//             i++;
//         }
//         resolve("Done!");
//     });
// }
// console.log(i);
// console.log(i);
// performAsyncOperation().then(console.log);
// console.log(i);
// console.log(i);

var i = 10;
console.log(i);
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

console.log(i);