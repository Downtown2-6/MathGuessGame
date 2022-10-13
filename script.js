// generating a random number between 1-100
let y = Math.floor(Math.random() * 100 + 1);

let guess = 1;

document.getElementById("submitGuess").onclick = function(){
    let x = document.getElementById("guessField").value;

    if (x == y){
       document.getElementById('subText').innerHTML = "Congrats! You got it in " + guess + " guesses ";
    }
    else if( x > y){
        guess++;
        document.getElementById('subText').innerHTML = "Try a smaller number!";
    }
    else{
        guess++;
        document.getElementById('subText').innerHTML = "Try a larger number!";
    }
}