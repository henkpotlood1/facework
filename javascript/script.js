function initStatus(){
	clickedFace = null;
	clickedName = null; 
	score = 0;
}
initStatus();

function startFaceWork() 
{
	document.body.className = "running";
	document.getElementById("score").className= "scoreRunning";
	setTimeout("stopFaceWork();", 10000);
	initStatus();
	ShowScore();
	document.getElementById("face1").className ="";
	document.getElementById("face2").className ="";
	document.getElementById("face3").className ="";
	document.getElementById("face4").className ="";
	document.getElementById("face5").className ="";
	document.getElementById("face6").className ="";
	document.getElementById("name1").className ="";
	document.getElementById("name2").className ="";
	document.getElementById("name3").className ="";
	document.getElementById("name4").className ="";
	document.getElementById("name5").className ="";
	document.getElementById("name6").className ="";
}

function stopFaceWork() 
{
	document.body.className = "stop";
}
function ShowScore() 
{
	document.getElementById("score").innerHTML = score.toString();
}
function unClick(id) 
{
	img = document.getElementById(id);
	img.className = img.className.replace("clicked","");
}

function clickFace(thisFace)
{
	if(document.body.className == "running"){
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
}
function clickName(thisName) 
{
	if(document.body.className == "running"){
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
}
function checkMatch() 
{
	if (clickedName != null && clickedFace != null)
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