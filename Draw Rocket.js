function Rocket() {
	clear()
	strokeWeight(2)
	rectMode(CENTER)

	// Rocket's X and Y position
	var rocketpos = createVector(windowWidth / 2, windowHeight / 2)
	// Rocket's horizontal speed
	var speedx = createVector(3, 0)
	// Rocket's vertical speed
	var speedy = createVector(0, 3)
	// Rocket's position as variables
	var rocketx = rocketpos.x
	var rockety = rocketpos.y
	// Rocket's new position

	translate(rocketpos.x, rocketpos.y)
	rotate(angle)
	
	// Rocket body
	fill('rgb(255, 50, 50)')
	rect(0, 0, rocketsize, rocketsize * 2)
	// Left fin
	fill('rgb(150, 30, 40)')
	rect(0 - rocketsize / 1.5, 0 + rocketsize, rocketsize / 2, rocketsize)
	// Right fin
	rect(0 + rocketsize / 1.5, 0 + rocketsize, rocketsize / 2, rocketsize)
	// Middle fin
	rect(0, 0 + rocketsize, rocketsize / 8, rocketsize)
	// Window
	fill('rgb(125, 200, 255)')
	circle(0, 0 - rocketsize / 3, rocketsize / 2)
	// Tip of rocket
	fill('rgb(255, 50, 50)')
	triangle(0, 0 - rocketsize * 2, 0 - rocketsize / 2, 0 - rocketsize, 0 + rocketsize / 2, 0 - rocketsize)
}