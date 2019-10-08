let noiseOffset = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(600, 600);
  background(50, 120, 250);

}

function draw() {

strokeWeight(strokeWidth);
  noiseOffset += 0.5;
  strokeWidth = noise(noiseOffset) * 100;
if (mouseIsPressed) {
  stroke(map(mouseX, 100, 600, 45, 200, true), map(mouseX, 34, 600, 220, 200, true))
  line(mouseX, mouseY, pmouseX, pmouseY);
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
fill( random(255), random(255), random(255), random(255));


}
function variableEllipse(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  stroke(speed);
  ellipse(x, y, speed, speed);
}

}

function keyTyped() {

  if (key === 's') {
    saveCanvas('fileName', 'png')
  }
  return false;
}
