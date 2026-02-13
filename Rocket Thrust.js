function Thrust(){
if (keyCode === 'w' || keyCode === 'W') {
	var vel = createVector(0, -5).rotate(Angle)
	rocketPos.add(vel)
}
}