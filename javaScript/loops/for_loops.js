// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");

// for(let i=1; i<=5; i++){
//     console.log(i);
// }

// for(let i=10; i>=1; i--){
//     console.log(i);
// }


// Q. print all odd Number(1 to 15)

// for(let i=1; i<=15; i=i+2){
//     console.log(i);
// }

// console.log("backwards");

// for(let i=15; i>=1; i=i-2){
//     console.log(i);
// }

// Q. print all even Number(2 to 10)

// for(let i=2; i<=10; i=i+2){
//     console.log(i);
// }


// console.log("backwards");

// for(let i=10; i>=2; i=i-2){
//     console.log(i);
// }

// Infinite loops


// for(let i=1; i>=0; i++){
//     console.log(i);
// }

// for(let i=1; i<=5; i--){
//     console.log(i);
// }

// for(let i=1;  ; i++){
//     console.log(i);
// }

// Q. print the multiplication table for 5

// for(let i=5; i<=50 ; i= i+5){
//     console.log(i);
// }

// let n = prompt("write your number");
// n = parseInt(n);

// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }

//  Nested for Loop

for(let i=1; i<=3; i++){
    console.log(`outer loop ${i}`)
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}
