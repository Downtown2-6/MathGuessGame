// generating a random number between 1-100
let y = Math.floor(Math.random() * 100 + 1);
//let y = 55;   //<-- for testing purposes 
let guessCounter = 1;

const input = document.getElementById('guessField');
document.getElementById("submitGuess").onclick = function(){
    const x = document.getElementById("guessField").value;

    if (x == y){
       document.getElementById('subText').innerHTML = "Congrats! You got it in " + guessCounter + " guesses ";
       document.getElementById('resetButton').disabled = false;
    }else if( x > y && guessCounter < 5){
        guessCounter++;
        document.getElementById('subText').innerHTML = "Try a smaller number!";
        document.getElementById('resetButton').disabled = true;
    }else if( x < y && guessCounter < 5){
        guessCounter++;
        document.getElementById('subText').innerHTML = "Try a larger number!";
        document.getElementById('resetButton').disabled = true;
    }
    else{
        document.getElementById('subText').innerHTML = "Out of guesses! Try again"
        document.getElementById('submitGuess').disabled = true;
        document.getElementById('resetButton').disabled = false;

    }
}
document.getElementById('resetButton').onclick = function(){
    document.getElementById('subText').innerHTML = "See if you can guess it!";
    input.value = ' ';
    document.getElementById('submitGuess').disabled = false;
    y = Math.floor(Math.random() * 100 + 1);
    guessCounter = 1;
}


//reset button will reset guess count, 
//generate new number, 
//set submit button to true, 
//reset header text 

