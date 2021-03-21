player1 = localStorage.getItem("Player #1");
player2 = localStorage.getItem("Player #2");

player1Score = 0;
player2Score = 0;

document.getElementById("player1_name").innerHTML = player1 + ": ";
document.getElementById("player2_name").innerHTML = player2 + ": ";

document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;

document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player1;
document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2;


function Send() {
    number1 = document.getElementById("#1").value;
    number2 = document.getElementById("#2").value;
    actualAnswer = parseInt(number1) * parseInt(number2);

    questionNumber = "<h4>" + "What is " + number1 + " X " + number2 + "?" + "</h4>";
    inputBox = "<br>Answer: <input type='number' id='inputCheckBox'>";
    checkButton = "<br><br> <button class='button' onclick='check();'>Check</button>";
    row = questionNumber + inputBox + checkButton;

    document.getElementById("output").innerHTML = row;

    document.getElementById("#1").value = "";
    document.getElementById("#2").value = "";
}
