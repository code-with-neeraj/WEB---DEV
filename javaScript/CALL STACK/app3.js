// function savetoDb(data) {
//     return new Promise((resolve, reject)=> {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("success : data was saved");
//         } else {
//             reject("failure : weak connection");
//         }
//   });
// }

// savetoDb("apna college");


////////////////////////////////////////////////////////

// Promises
// then() & catch();

function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success : data was saved");
        } else {
            reject("failure : weak connection");
        }
    });
}

// savetoDb("apna college")
//     .then(() => {
//         console.log("promise was resolved");
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//     })


// promise chaining

// savetoDb("apna college")
//     .then((result) => {
//         console.log("data1 saved.");
//         console.log("result of promise:",result);
//         return savetoDb("helloworld");
//     })
//     .then((result) => {
//         console.log("data2 saved");
//         console.log("result of promise:",result);
//         return savetoDb("neeraj");
//     })
//     .then((result) =>{
//         console.log("data3 saved");
//         console.log("result of promise:",result);
//     })
//     .catch((error) => {
//         console.log("promise was rejected");
//         console.log("error of promise:",error);
//     });


//////////////////////////////////////////////
h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed");
        }, delay);
    });
}

changeColor("red", 1000)
.then(() =>{
    console.log("red color was completed");
    return changeColor("orange", 1000);
})
.then(() =>{
    console.log("orange color was completed");
    return changeColor("blue", 1000);
})
.then(() =>{
    console.log("blue color was completed");
    return changeColor("green", 1000);
})
.then(() =>{
    console.log("green color was completed");
})