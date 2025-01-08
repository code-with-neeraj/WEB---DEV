let fruits = ["mango", "apple", "banana", "litchi","orange"];
fruits.push("pineapple");


// for(let i=0; i<fruits.length; i++){
//     console.log(i, fruits[i]);
// }


// for(let i=fruits.length-1; i>=0; i--){
//     console.log(i, fruits[i]);
// }


// Nwsted Loops with Nested Arrays

// let heroes = [["ironman","spiderman","thor"], ["superman","wonder woman", "flash"]];
// for(let i=0; i<heroes.length; i++){
//     console.log(`List #${i}`);
//     for(let j=0; j<heroes[i].length; j++){
//         console.log(heroes[i][j])
//     }
// }

let student = [ ["aman", 96],["neeraj", 98], ["alok",97]];

for(let i=0; i<student.length; i++){
    console.log(`info of student #${i}`);
    for(let j=0; j<student[i].length; j++){
        console.log(student[i][j]);
    }
}