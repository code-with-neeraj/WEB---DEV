// h1 = document.querySelector("h1");

// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//     h1.style.color = "orange";
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "green";
// }, 3000);

//////////

// function changeColor(color, delay, nextColorChange){
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000);
//         });
//     });
// });

//callbacks nesting -> callback hell



////////////////////////////////////////
// callbacks hell

function savetoDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}

savetoDb("Neeraj kumar", () => {
    console.log("success : your data was saved : ");
    savetoDb("hello world", ()=> {
        console.log("success2: data2 saved");
    }, () => {
        console.log("failure2 : weak connection");
    })
}, () => {
    console.log("failure : weak connection. data not saved");
});