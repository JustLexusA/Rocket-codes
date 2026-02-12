function Rotate() {
	if (keyIsDown(LEFT_ARROW)) {
		angle -= rotationamount
	} else if (keyIsDown(RIGHT_ARROW)) {
		angle += rotationamount
	}
}