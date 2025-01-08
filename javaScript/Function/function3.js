function sum(a, b){
    return a+b;
}
let s = sum(3,4);
console.log(s);

console.log(sum(sum(1, 2), 3))

function isAdult(age){
    if(age >= 18){
        return "adult";
    } else{
        return "not adult";
    }
}
let age = isAdult(55);
console.log(age);

// Question: Create a funcion that returns the sum of numbers from 1 to n.

function getSum(n){
    let sum = 0;

    for(let i=1; i<=n; i++){
        sum +=i;
    }
    return sum;
}

console.log(getSum(5));

// Question: Create a function that returns the concatenation of all strings in an Array.

let str = ["hi", "hello", "bye", "!"];

function concat(str){
    let result;

    for(let i=0; i<str.length; i++){
        result += str[i];
    }

    return result;
}


console.log(concat(str));
