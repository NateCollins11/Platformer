var canvas = document.getElementById("game");
canvas.height = 500;
canvas.width = 900;
var c = canvas.getContext("2d");

unit = canvas.width / 45;

timer = 0;
inLevel = true;
level = 1;
portalAnimationTimer = 0;

gamespeed = 10;

function drawGrid() {
  c.fillStyle = "rgb(229, 241, 238)";
  c.fillRect(0, 0, canvas.width, canvas.height);

  c.strokeStyle = "navy";
  c.beginPath();
  for (i = 0; i < canvas.width / unit; i++) {
    c.moveTo(unit * i, 0);
    c.lineTo(unit * i, canvas.height);
  }
  for (i = 0; i < canvas.width / unit; i++) {
    c.moveTo(0, unit * i);
    c.lineTo(canvas.width, unit * i);
  }
  // c.stroke();
}

function tickCycle() {
  if (inLevel == true) {
    updateGuy();
    drawGame();
    // console.log(keysdown);
    portalAnimationTimer += 0.8;
    if (portalAnimationTimer > 19) {
      portalAnimationTimer = 0;
    }
    timer = timer + gamespeed / 1000;
    document.getElementById("timer").innerHTML = String(timer);
    setTimeout(tickCycle, gamespeed);
  }
}

function drawGame() {
  drawGrid();
  drawPlatforms(level - 1);

  guy.render();
}

tickCycle();
