console.log("Default Parameters");

function sum(a=2, b){
    return a + b;
}

let add = sum(1, 3); //4
sum(1); //a = 1, b = undefined
console.log(add);


console.log("Spread");

let arr = [1,2,3,4,5];
let newArr = [...arr];

console.log(newArr);

let chars = [..."hello"];
console.log(chars);

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];

let nums = [...even, ...odd];
console.log(nums);

////////////////////////////////////////////////////////////////
console.log("Spread with Object Literals");

const data = {
    email: "ironman@gmail.com",
    password: "abcd",
};

const dataCopy = {...data, id:123};
console.log(dataCopy);

////
let arr1 = [1, 2, 3, 4, 5]; //val
let obj = { ...arr1}; //obj -> key:val 
console.log(obj);

let char = ("hello");
let char1 = {...char};
console.log(char1);

///////////////////////////////////////////////////////////////
console.log(Rest);

function sum(...args){
    //arguments
    for(let i = 0; i<args.length; i++){
        console.log("you gave us: ", args[i]);
    }
}

function min(a, b, c, d){
    console.log(arguments);
}
/////////////////////////////////////////////////////////////

console.log("Destructuring");

let names = ["tony", "bruce", "peter", "Steve"];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];

let [winner, runnerup, secondRunnerup] = names;
console.log(winner);


//////////
console.log("Destructuring Objects");

const student = {
    name: "neeraj",
    age: 14,
    class: 9,
    subjects: ["hindi", "english", "maths", "science"],
    username: "karan@123",
    password: "abcd",
};

let {username, password} = student;