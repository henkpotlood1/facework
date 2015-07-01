function startFaceWork() 
{
	document.body.className = "running";
	document.getElementById("score").className= "scoreRunning";
	setTimeout("stopFaceWork();", 10000);
	score = 0;
	ShowScore();
}
function stopFaceWork() 
{
	document.body.className = "stop";
}
function ShowScore() 
{
	document.getElementById("score").innerHTML = score.toString();
}
function checkMatch() 
{
	if (clickedFace != null && clickedName != null)
	{
		var faceNr = clickedFace.id.replace("face","");
		var nameNr = clickedName.id.replace("name","");
		if (faceNr == nameNr)
		{
			score += 10;
			clickedFace.className = "done";
			clickedName.className = "done";
			clickedFace = null;
			clickedName = null; 
		}
		else
		{
			score -= 20;
			if (score <0) score = 0;
		}
		ShowScore();
	}
}
function clickFace(thisFace)
{
	unClick("face1");
	unClick("face2");
	unClick("face3");
	unClick("face4");
	unClick("face5");
	unClick("face6");
	thisFace.className = "clicked";
	clickedFace = thisFace;
	checkMatch();
}
function unClick(id) 
{
	img = document.getElementById(id);
	img.className = img.className.replace("clicked","");
}
function clickName(thisName) 
{
	unClick("name1");
	unClick("name2");
	unClick("name3");
	unClick("name4");
	unClick("name5");
	unClick("name6");
	thisName.className = "clicked";
	clickedName = thisName;
	checkMatch();
}
