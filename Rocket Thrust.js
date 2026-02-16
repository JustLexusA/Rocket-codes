function Thrust(){
	// Vertical movement of the rocket
ForwardThrust = createVector(0, speedY).rotate(Angle)
rocketPos.add(ForwardThrust)

}

function Accel(){
	// Checks for velocity to whether let the rocket continue accelerating or not.
	if (speedY <= -10){
			Accelerate = false
		} else if (speedY >= -10){
			Accelerate = true
	}
	// Pressing 'W' will cause the rocket to accelerate.
	if (Accelerate === true){
		if (keyIsDown(87)){
			speedY -= Acceleration
		}
	}
	// Pressing 'S' will cause the rocket to deccelerate.
		if 	(keyIsDown(83)){
		speedY += Acceleration
	}
	print(Accelerate)
	print(speedY)

}