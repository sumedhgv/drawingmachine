//let noiseOffset = 0.0;
//let strokeWidth = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(50, 120, 250);

}

function draw() {

//strokeWeight(strokeWidth);
  //noiseOffset += 0.5;
  //strokeWidth = noise(noiseOffset) * 100;
if (mouseIsPressed) {
  //stroke(map(mouseX, 100, 600, 45, 200, true), map(mouseX, 34, 600, 220, 200, true))

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
  if (key === 'v') {
    clear();
  }
  return false;

}

function cycleBackgrounds() {
	var index = 0;

	$imageEls = $('.toggle-image'); // Get the images to be cycled.

	setInterval(function () {
		// Get the next index.  If at end, restart to the beginning.
		index = index + 1 < $imageEls.length ? index + 1 : 0;
		// Show the next image.
		$imageEls.eq(index).addClass('show');
		// Hide the previous image.
		$imageEls.eq(index - 1).removeClass('show');

	}, 2000);
};

// Document Ready.
$(function () {
	cycleBackgrounds();
});
