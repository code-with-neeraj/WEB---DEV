console.log("Function with Arguments")

function printName(name){
    console.log(name);
}
printName("neeraj");
printName("kumar");


function printInfo(name, age){
    console.log(`${name}'s age is ${age}.`);
}
printInfo("neeraj", 22);

function sum(a, b){
    console.log(a+b);
}
sum(1,6);

function getAverage(a , b , c){
    console.log((a+b+c)/3);
}
getAverage(1,2,3);


// Practice Qs: Create a Function that prints the multiplication table of a Number.

function printTable(n){
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
    }
}

printTable(2);
printTable(89);