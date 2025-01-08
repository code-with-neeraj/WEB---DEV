function hello(){
    console.log("hello");
}
hello();


function printName(){
    console.log("neeraj kumar");
    console.log("codeWithNeeraj")
}
printName();

function print1to5() {
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}
print1to5();

function isAdult(){
    let age = 18;
    if(age>= 18) {
        console.log("adult");
    } else {
        console.log("not adult");
    }
}
isAdult();

function printPoem(){
    console.log("Twinkle Twinkle, little star");
    console.log("how I wonder what you are")
}

printPoem();

function rollDice(){
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}
rollDice();
rollDice();
rollDice();
rollDice();