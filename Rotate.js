function Rotate() {
// Counter-clockwise rotation
	if (keyIsDown(LEFT_ARROW)) {
		Angle -= rotationamount
	} 
// Clockwise rotation
	else if (keyIsDown(RIGHT_ARROW)) {
		Angle += rotationamount
	}
}