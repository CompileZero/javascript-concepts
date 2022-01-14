let name1 = {
    firstName: "Atharva",
    lastName: "Kulkarni",
    printFullName: function (location) {
        console.log(`${this.firstName} ${this.lastName} ${location}`);
    }
};

name1.printFullName("Pune"); // Log: Atharva Kulkarni Pune

let name2 = {
    firstName: "Sudishnu",
    lastName: "Kulkarni"
};

// Call method, first arg: object to be associated with "this", second (and more) arguments: general parameters for the function
name1.printFullName.call(name2, "Mumbai"); // Log: Sudishnu Kulkarni Mumbai

// Apply method, similar to call, first arg: object to be associated with "this", second argument: list of parameters for the function
name1.printFullName.apply(name2, ["Mumbai2"]); // Log: Sudishnu Kulkarni Mumbai2

// Bind method returns a bound function, first first arg as the object to be associated with "this" and second(or more) arguments are the parameters of the function
let newNameFunc = name1.printFullName.bind(name2, "Gujarat");
newNameFunc();