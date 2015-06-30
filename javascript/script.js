function startFaceWork() {
	document.body.className = "running";
	document.getElementById("score").className= "scoreRunning";
	setTimeout("stopFaceWork();", 10000);
	score = 0;
	ShowScore();
}
function stopFaceWork() {
	document.body.className = "stop";
}
function ShowScore() {
	document.getElementById("score").innerHTML = score.toString();
}