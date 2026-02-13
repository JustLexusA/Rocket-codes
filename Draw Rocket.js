function Rocket() {
	clear()
	strokeWeight(2)
	rectMode(CENTER)


	// 	// Rocket's X and Y position
	// var rocketPos = createVector(windowWidth / 2, windowHeight / 2)
	// // Rocket's position as variables
	// var rocketx = rocketPos.x
	// var rockety = rocketPos.y
	// // Rocket's new position

push()
	translate(rocketPos.x, rocketPos.y)
	rotate(Angle)
	
	// Rocket body
	fill('rgb(255, 50, 50)')
	rect(0, 0, rocketSize, rocketSize * 2)
	// Left fin
	fill('rgb(150, 30, 40)')
	rect(0 - rocketSize / 1.5, 0 + rocketSize, rocketSize / 2, rocketSize)
	// Right fin
	rect(0 + rocketSize / 1.5, 0 + rocketSize, rocketSize / 2, rocketSize)
	// Middle fin
	rect(0, 0 + rocketSize, rocketSize / 8, rocketSize)
	// Window
	fill('rgb(125, 200, 255)')
	circle(0, 0 - rocketSize / 3, rocketSize / 2)
	// Tip of rocket
	fill('rgb(255, 50, 50)')
	triangle(0, 0 - rocketSize * 2, 0 - rocketSize / 2, 0 - rocketSize, 0 + rocketSize / 2, 0 - rocketSize)
pop()
}