// forEach

let arr = [1, 2, 3, 4, 5];

let print = function (el){
    console.log(el);
}

arr.forEach(print);

// or

arr.forEach(function(el){
    console.log(el);
});

arr.forEach((el)=>{
    console.log(el);
});

//////

let arrr = [{
    name: "neeraj",
    marks: 95
},
{
    name: "anu",
    marks: 96.5
},
{
    name: "alok",
    marks: 94
}];

arrr.forEach((student) => {
    console.log(student.marks);
});

// Map

let num = [1, 2, 3, 4];

let double = num.map((el) => {
    return el * el;
});

////

let students = [{
    name: "neeraj",
    marks: 95
},
{
    name: "anu",
    marks: 96.5
},
{
    name: "alok",
    marks: 94
}];

let gpa = students.map((el) => {
    return el.marks / 10;
});
console.log(gpa);


// Filter

let nums = [1,2,3,4,7,8,2,9,10,11,12];
let ans = nums.filter((el) => {
    return el % 2 == 0; //even -> true, odd-> false
});
console.log(ans);


// Reduce
console.log("reduce");

let numss = [1,2,3,4];
let finalVal = numss.reduce((res, el) => {
    console.log(res);
    return res + el});
console.log(finalVal);


////
let arr1 = [1, 4, 2, 5, 6, 7, 2, 9, 2];

// let max = -1;

// for(let i=0; i<arr1.length; i++){
//     if (max < arr[i]){
//         max = arr1[i];
//     }
// }
// console.log(max);

////
let max = arr1.reduce((max, el)=>{
    if (max < el) {
        return el;
    }else{
        return max;
    }
});
console.log(max);


// Question: Check if all numbers in our array are multiples of 10 or not 

let nums1 = [10, 20, 30, 40];

let ans1 = nums1.every((el) => el%10 == 0);
console.log(ans1);

// Question: Create a function to find the min number in an Array. 

let nums2 = [10, 20, 30, 40, 5];

let min = nums2.reduce((min, el) => {
    if (min < el){
        return min;
    } else {
        return el;
    }
});
console.log(min);