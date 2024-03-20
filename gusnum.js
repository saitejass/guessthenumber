var number = Math.floor(Math.random()*100)+1;

console.log(number);

function checkNumber() {
    var userInput = parseInt(document.getElementById("guess-input").value);
    var resultText = document.getElementById("res-text");
    var totalTries = document.getElementById("try");

    totalTries.textContent = parseInt(totalTries.textContent) + 1;
    if(userInput == number) {
        resultText.textContent = "You have found the Correct Number with " + totalTries.textContent + " tries.";
        resultText.style.height = "70px";
    } else if(userInput < number) {
        resultText.textContent = "Choose a Greater Number";
    } else {
        resultText.textContent = "Choose a Smaller Number";
    }

}