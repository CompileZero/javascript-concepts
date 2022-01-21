// Microtasks, 
setTimeout(() => {
    console.log(1);
}, 0);

new Promise(resolve => {
    console.log(2);
    resolve(3);
}).then(console.log);

console.log(4);
// Callback functions returned from Promises and Mutation Observers go into the micro-task queue.
// All the other callback functions go into the callback queue.
// Micro-task = Callback functions returned from Promises and Mutation Observers
// Suppose a micro-task creates another micro-task, and so on... then the tasks in the callback queue do not get a chance to execute. This is called Starvation of that callback function.

// Immediately after a Macrotask is executed, JS will execute all the other microtasks in the queue, and then move on to the newer macrotasks.

// Microtasks = Jobs = Microtask Queue = JobQueue = Functions returned from Promises and Mutation Observers
// Macrotasks = Tasks = Task Queue = Callback Queue = All the other callback functions

// There’s also a special function queueMicrotask(func) that queues func for execution in the microtask queue.

// V8 Interpreter = Ignition
// V8 Compiler = Turbofan
// Garbage Collector = orinoco
// Garbage Collector = Oilpan