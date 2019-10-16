//let noiseOffset = 0.0;
//let strokeWidth = 5;
var speed = 0,
img = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  speed = 0;
  imageMode(CENTER);
  img[0] = loadImage('https://i.imgur.com/Dq6ZD3l.png');
  img[1] = loadImage('https://i.imgur.com/IhWoLIB.png');
  img[2] = loadImage('https://i.imgur.com/6UaeeBz.png');
  img[3] = loadImage('https://i.imgur.com/WyrNGlK.png');
  img[4] = loadImage('https://i.imgur.com/Uh2e8Ak.png');
  img[5] = loadImage('https://i.imgur.com/oloOak9.png');
  img[6] = loadImage('https://i.imgur.com/Gut6vce.png');
  img[7] = loadImage('https://i.imgur.com/CZHHriw.png');
  //background(50, 120, 250);


}

function draw() {

//strokeWeight(strokeWidth);
  //noiseOffset += 0.5;
  //strokeWidth = noise(noiseOffset) * 100;
if (mouseIsPressed) {
  stroke(map(mouseX, 100, 600, 45, 200, true), map(mouseX, 34, 600, 220, 200, true))

  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);

  fill( random(255), random(255), random(255), random(255));


}


function variableEllipse(x, y, px, py) {
  let newSpeed = abs(x - px) + abs(y - py);
  // console.log(speed);
  if (newSpeed > speed *2) {
    stroke(speed);
    // drawGradient(x, y, speed);
    // ellipse(x, y, speed, speed);
    let r = (random(0, img.length)) << 0;
    console.log(r);
    push();
    translate(x, y);
    rotate(random(TWO_PI));
    image(img[r], 0, 0, newSpeed, newSpeed);
    pop();
  }
   speed = newSpeed;
}

}

function drawGradient(x, y, radius) {
  let h = random(0, 360);
  for (let r = radius; r > 0; --r) {
    fill(h, 90, 90);
    ellipse(x, y, r, r);
    h = (h + 1) % 360;
  }
}

function keyTyped() {

  if (key === 's') {
    saveCanvas('fileName', 'png')
  }
  if (key === 'v') {
    clear();
  }
  if (key === 'g') {
    doSlideshow();
  }

  return false;

}

// function cycleBackgrounds() {
// 	var index = 0;
//
// 	$imageEls = $('.toggle-image'); // Get the images to be cycled.
//
// 	setInterval(function () {
// 		// Get the next index.  If at end, restart to the beginning.
// 		index = index + 1 < $imageEls.length ? index + 1 : 0;
// 		// Show the next image.
// 		$imageEls.eq(index).addClass('show');
// 		// Hide the previous image.
// 		$imageEls.eq(index - 1).removeClass('show');
//
// 	}, 2000);
// };

// function CB() {
//     try {
//         var p = [
//             'images/space1.jpg',
//             'images/space2.jpg',
//             'images/space4.jpg',
//             'images/space5.jpg'
//         ];
//
//         var counter = 0;
//
//         setInterval(function(){
//             //document.body.style.backgroundImage = url(p[counter++]);
//             console.log(counter++);
//
//             if(counter == 3){
//                 counter = 0;
//             }
//         }, 3000)
//     } catch(err) {
//         alert(err.message);
//     }
// }
//
// CB();
// Document Ready.
// $(function () {
// 	cycleBackgrounds();
// });
