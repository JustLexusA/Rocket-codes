function draw() {
	Rocket()
	Rotate()
	Thrust()
	Accel()
	Boundaries()
	Walls()
}

function Boundaries(){
	// Boundaries of the canvas
	if (rocketPos.x > windowWidth){
		rocketPos.x = 0
	} else if (rocketPos.x < 0){
		rocketPos.x = windowWidth
	}
	if (rocketPos.y > windowHeight){
		rocketPos.y = 0
	} else if (rocketPos.y < 0){
		rocketPos.y = windowHeight
	}
}

function Walls(){
	// Walls of the canvas
	strokeWeight(5)
	line(0, 0, windowWidth, 0)
	line(0, 0, 0, windowHeight)
	line(windowWidth, 0, windowWidth, windowHeight)
	line(0, windowHeight, windowWidth, windowHeight)
}