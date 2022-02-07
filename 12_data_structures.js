const names = ["Max", "Manu", "Julie", "Max"];

for (const name of names) {
    console.log(name);
}

names.push("Julie");

console.log(names);

console.log(names.find(el => el === 'Julie'),
    names.findIndex(el => el === "Julie"),
);
// names.

const deletedNames = names.splice(0, 0);
console.log(names, deletedNames);

const ids = new Set();
ids.add('abc');
ids.add(1);
ids.add("bb2");
for (let elem of ids.keys()) {
    console.log(elem);
}

const person = {
    "first name": "Atharva",
    "last name": "Kulkarni",
    age: 24,
    getFullName() {
        // return this["first name"]
        return this["first name"] + this["last name"];
    }
};

let fname = person["first name"];
fname;

const resultData = new Map();
resultData.set('average', 1.53);
resultData.set('lastResult', null);

const germany = { name: 'Germany', population: 82, data: [1, 2, 3, 4] };

resultData.set(germany, 0.89);

let recd = resultData.get("average");
recd;

console.log(JSON.stringify(germany));

const newGermany = {...germany };
const newGermany2 = germany;
const newGermany3 = JSON.parse(JSON.stringify(germany));
germany["data"].push(5);

console.log(newGermany === germany);
console.log(newGermany2 === germany);

// germany.keys();
// Object.toString(germany);
console.log(Object.toString(germany));