function setup() {
  createCanvas(600, 600);
  background(220, 100, 100);
}

function draw() {


if (mouseIsPressed) {
  stroke(map(mouseX, 100, 600, 45, 200, true), map(mouseX, 34, 600, 220, 200, true))
  line(mouseX, mouseY, pmouseX, pmouseY);
}
}

function
