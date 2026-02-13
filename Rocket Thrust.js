function Thrust(){
var vertMove = false
var horiMove = false
if (keyIsPressed === true) {
	if (keyCode === 87||keyCode === 87) {
	vertMove = true
	}
}	else if (keyCode === 83||keyCode === 83) {
	vertMove = false
	}

var speedy = createVector(0, -5).rotate(Angle)
var speedx = createVector(5, 0).rotate(Angle)

	if (vertMove === true) {
	rocketPos.add(speedy)
	print(vertMove)
	}


}