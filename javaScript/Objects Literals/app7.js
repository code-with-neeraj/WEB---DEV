const max = prompt("enter the max number")

const random = Math.floor(Math.random()* max) + 1;
console.log(random)

let guess =prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }
    if(guess == random){
        console.log("you are right! congrats!! random no. was", random);
        break;
    } else if(guess < random){
        guess = prompt("Your guess was too small. please try again")
    }else {
        guess = prompt("Your gurss was too large. please try again")
    }
}