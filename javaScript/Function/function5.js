//Function Expressions
console.log("Function Expressions");



let sum = function(a,b){
    return a + b;
}

sum(1,2);
console.log(sum);

// Methods
console.log("Methods");

const calculator = {
    add: function(a, b){
        return a+b;
    },
    sun: function(a, b){
        return a-b;
    },
    mul: function(a, b){
        return a*b;
    }
};