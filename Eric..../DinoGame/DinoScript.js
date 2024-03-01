const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

var score = 0;
var highscore = 0;
var Death = document.getElementById('Death');


var el = document.getElementById('Score');
var HighScoreDisplay = document.getElementById('HighScoreDisplay');
function incrementSeconds() {
  score = score + 1;
  el.innerText = "Score: " + score;

  if (highscore < score) {
    highscore = score;
  }
  HighScoreDisplay.innerText = "High score: " + highscore;

}

var cancel = setInterval(incrementSeconds, 50);

function jump() {
  if (dino.classList !== "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    score = 0;
    Death.style.display = "block";
  } else {
    Death.style.display = "none";
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});