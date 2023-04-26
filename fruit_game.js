var gameBoard = document.getElementById("game-board");
var score = document.getElementById("score");
var currentScore = 0;
var mainPage = document.getElementById("main-page");
var playAgain = document.getElementById("play-again");

gameBoard.addEventListener("click", function(e) {
  if (e.target.className == "fruit") {
    e.target.style.display = "none";
    currentScore++;
    score.innerHTML = currentScore;

    if (currentScore == 20) {
      alert("Kazandınız!");
    }
  }
});

for (var i = 0; i < 20; i++) {
  var fruit = document.createElement("img");
  var randomNumber = Math.floor(Math.random() * 20) + 1;
  var imagePath = "images/fruits/img" + randomNumber + ".png";
  fruit.src = imagePath;
  
  fruit.classList.add("fruit");
  fruit.style.top = Math.floor(Math.random() * 450) + "px";
  fruit.style.left = Math.floor(Math.random() * 450) + "px";
  gameBoard.appendChild(fruit);
}

mainPage.addEventListener("click", function() {
    window.location.href = "index.html";
  });
  
playAgain.addEventListener("click", function() {
    location.reload();
  });
