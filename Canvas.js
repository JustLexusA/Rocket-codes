var rocketPos;
var rocketx;
var rockety;

var Angle = 90
var rotationamount = 2

	// Size of the rocket
	let rocketSize = 75;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	angleMode(DEGREES)
	frameRate(60)

		// Rocket's X and Y position
	 rocketPos = createVector(windowWidth / 2, windowHeight / 2)
	// Rocket's position as variables
	 rocketx = rocketPos.x
	 rockety = rocketPos.y
	// Rocket's new position
}