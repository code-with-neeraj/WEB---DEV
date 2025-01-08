let sum = 54; //Global Scope

function calSum(a,b){
    let sum = a+b; //Function Scope
    console.log(sum);
}

calSum(1,2);


// Block Scope

{
    var a = 35;
    // const a = 35;
    // let a = 35;
}
console.log(a);


for(let i=1; i<=5; i++){
    console.log(i); // block scope
}
console.log(i);

let age = 25;
if(age>=18){
    let str = "adult";
}
console.log(str);

// Lexical Scope

function outerFunc(){
    let x = 5;
    let y = 6;
    function innerFunc(){  //function scope
        console.log(x);
        console.log(y);
    }
    innerFunc();
}




