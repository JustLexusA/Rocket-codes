// Position of the rocket
var rocketPos;
var rocketx;
var rockety;

// Rotation of the rocket
var Angle = 0
var rotationamount = 5

// Size of the rocket
let rocketSize = 35;

// Velocity of the rocket
var speedY = -2

// Magnitude of acceleration of the rocket
var Acceleration = 0.25
var Accelerate = true
var Decelerate = true

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