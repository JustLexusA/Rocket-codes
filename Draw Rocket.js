function Rocket() {
	clear()
	strokeWeight(2)
	rectMode(CENTER)

push()
	translate(rocketPos.x, rocketPos.y)
	rotate(Angle)
	textSize(10)
	
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