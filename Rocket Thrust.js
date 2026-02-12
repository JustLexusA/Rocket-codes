function Thrust(){
	if (keyIsDown(87)){
		verticalvel = createVector(0, -5)
		p5.Vector.add(verticalvel, rocketpos)
	}
	else if (keyIsDown(83)){

	}
}