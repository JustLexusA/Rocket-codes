function Boundaries() {
	if (rocketx >= windowWidth / 2 - rocketsize) {
		speedx = -speedx
	} else if (rocketx <= -windowWidth / 2 + rocketsize) {
		speedx = -speedx
	} else if (rockety <= -windowHeight / 2 + rocketsize * 2) {
		speedy = -speedy
	} else if (rockety >= windowHeight / 2 - rocketsize * 1.5) {
		speedy = -speedy
	}
}
