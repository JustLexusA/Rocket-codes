function Rocket() {
	clear()
	strokeWeight(2)
	rectMode(CENTER)


	translate(rocketpos.x, rocketpos.y)
	rotate(angle)
	
	// Rocket body
	fill('rgb(255, 58, 58)')
	rect(0, 0, rocketsize, rocketsize * 2)
	// Left fin
	fill('rgb(192, 39, 52)')
	rect(0 - rocketsize / 1.5, 0 + rocketsize, rocketsize / 2, rocketsize)
	// Right fin
	rect(0 + rocketsize / 1.5, 0 + rocketsize, rocketsize / 2, rocketsize)
	// Middle fin
	rect(0, 0 + rocketsize, rocketsize / 8, rocketsize)
	// Window
	fill('rgb(70, 178, 255)')
	circle(0, 0 - rocketsize / 3, rocketsize / 2)
	// Tip of rocket
	fill('rgb(255, 50, 50)')
	triangle(0, 0 - rocketsize * 2, 0 - rocketsize / 2, 0 - rocketsize, 0 + rocketsize / 2, 0 - rocketsize)
}