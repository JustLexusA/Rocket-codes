function Rotate() {
	if (keyIsDown(87)) {
		angle -= rotationamount
	} else if (keyIsDown(83)) {
		angle += rotationamount
	}
}