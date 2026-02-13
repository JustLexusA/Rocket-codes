function Rotate() {
	if (keyIsDown(LEFT_ARROW)) {
		Angle -= rotationamount
	} else if (keyIsDown(RIGHT_ARROW)) {
		Angle += rotationamount
	}
}