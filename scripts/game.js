let start = document.getElementById("start");
let end = document.getElementById("end");
let status = document.getElementById("status");

let boundaries = Array.from(document.getElementsByClassName("boundary"));

let started = false;

console.log(status);

function win() {
  alert("You Win!");
  location.reload();
}

function lose() {
  alert("You Lose!");
  location.reload();
}

function startGame() {
  end.addEventListener("mouseover", win);

  if (!started) {
    boundaries.forEach((boundary) => {
      boundary.addEventListener("mouseover", lose);
    });

    document.getElementById("status").textContent =
      "Game Started! Avoid The Walls!";
    started = true;
  }
}

start.addEventListener("mouseover", startGame);
