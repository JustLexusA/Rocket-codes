	// Rocket's X and Y position
	var rocketpos = createVector(windowWidth / 2, windowHeight / 2)

	// Rocket's position as variables
	var rocketx = rocketpos.x
	var rockety = rocketpos.y



	var angle = 0
	var rotationamount = 2
	var verticalvel = createVector(0, -5)
	var horizontalvel = createVector(5, 0)

	// Size of the rocket
	let rocketsize = 75;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	angleMode(DEGREES)
	frameRate(60)

}