start = document.getElementById("start");
end = document.getElementById("end");

boundaries = Array.from(document.getElementsByClassName("boundary"));

started = false;

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
    started = true;
  }
}

start.addEventListener("mouseover", startGame);
