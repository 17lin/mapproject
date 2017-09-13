$(document).ready(function(){
	//load nav part
	document.getElementById("nav").innerHTML = '<p style="float:right;vertical-align:middle;">點位呈現展示網頁</p><div class="container"> <div id = "navheader" class="navbar-header"> <a class="navbar-brand" href="#">Chiayi</a> </div> <div> <ul id = "navbar" class="nav navbar-nav"></ul> </div> </div> <div id="panel" style="border: solid 1px #8FBC8F;"> </div>';
	document.getElementById("navbar").innerHTML = '<li><a id="flip_Iot" href=# class="" style="margin-left:15px;">Iot</a></li> <li><a id="flip_Edu" href=# class="" style="margin-left:15px;">Edu</a></li> <li><a id="flip_Social" href=# class="" style="margin-left:15px;">Social</a></li><li><a id="flip_Health" href=# class="" style="margin-left:15px;">Health</a></li><li><a id="flip_Life" href=# class="" style="margin-left:15px;">Life</a></li>';
	document.getElementById("panel").innerHTML = '<div id="panel_Iot">	</div><div id="panel_Edu">	</div><div id="panel_Social">	</div><div id="panel_Health"></div><div id="panel_Life"></div>';	
	$("#flip_Iot").click(function(){
		$("#panel_Iot").slideToggle("fast");
	});
	$("#flip_Edu").click(function(){
		$("#panel_Edu").slideToggle("fast");
	});
	$("#flip_Social").click(function(){
		$("#panel_Social").slideToggle("fast");
	});
	$("#flip_Health").click(function(){
		$("#panel_Health").slideToggle("fast");
	});
	$("#flip_Life").click(function(){
		$("#panel_Life").slideToggle("fast");
	});
	var Iot = ['iTaiwan'];
	var iot = ['iot/itaiwan.html'];
	var Edu = ['school','kindergraten'];
	var edu = ['edu/school.html','edu/kindergraten.html'];
	var Social = ['village','ChildYouth','Familywelfare','Challenged','Womenwelfare'];
	var social = ['social/village.html','social/childyouth.html','social/familywelfare.html','social/challenged.html','social/women.html'];
	var Health = ['hospital'];
	var health = ['health/hospital.html'];
	var Life = ['Police','Fire','SpeedPhoto','Oil','Park','eBike'];
	var life = ['life/police.html','life/fire.html','life/speedphoto','life/oil.html','life/park.html','life/bike.html'];
	var IOT="",EDU="",SOCIAL="",HEALTH="",LIFE="";
	if (document.title == "Chiayi X OpenData X TGOS"){
		for (var i=0;i<Iot.length;i++)IOT+='<span style="padding: 5px;"><a href="'+iot[i]+'">'+Iot[i]+'</a></span>';
		for (var i=0;i<Edu.length;i++)EDU+='<span style="padding: 5px;"><a href="'+edu[i]+'">'+Edu[i]+'</a></span>';		
		for (var i=0;i<Social.length;i++)SOCIAL+='<span style="padding: 5px;"><a href="'+social[i]+'">'+Social[i]+'</a></span>';			
		for (var i=0;i<Health.length;i++)HEALTH+='<span style="padding: 5px;"><a href="'+health[i]+'">'+Health[i]+'</a></span>';			
		for (var i=0;i<Life.length;i++)LIFE+='<span style="padding: 5px;"><a href="'+life[i]+'">'+Life[i]+'</a></span>';		
	}else{
		document.getElementById("navheader").innerHTML ='<a class="navbar-brand" href="../index.html">Chiayi</a>';
		for (var i=0;i<Iot.length;i++)IOT+='<span style="padding: 5px;"><a href="../'+iot[i]+'">'+Iot[i]+'</a></span>';
		for (var i=0;i<Edu.length;i++)EDU+='<span style="padding: 5px;"><a href="../'+edu[i]+'">'+Edu[i]+'</a></span>';		
		for (var i=0;i<Social.length;i++)SOCIAL+='<span style="padding: 5px;"><a href="../'+social[i]+'">'+Social[i]+'</a></span>';			
		for (var i=0;i<Health.length;i++)HEALTH+='<span style="padding: 5px;"><a href="../'+health[i]+'">'+Health[i]+'</a></span>';	
		for (var i=0;i<Life.length;i++)LIFE+='<span style="padding: 5px;"><a href="../'+life[i]+'">'+Life[i]+'</a></span>';				
	}
	document.getElementById("panel_Iot").innerHTML = IOT;
	document.getElementById("panel_Edu").innerHTML =EDU;
	document.getElementById("panel_Social").innerHTML =SOCIAL;
	document.getElementById("panel_Health").innerHTML =HEALTH;
	document.getElementById("panel_Life").innerHTML =LIFE;
	document.getElementById("panel_Iot").style.display="none";
	document.getElementById("panel_Edu").style.display="none";
	document.getElementById("panel_Social").style.display="none";
	document.getElementById("panel_Health").style.display="none";
	document.getElementById("panel_Life").style.display="none";
	//load copyright part
	var copyright = '<a href="https://github.com/17lin/mapproject" target="_blank" id="final_a">網站原始碼 by 資訊科十七</a> /資料來源：<a href="https://data.gov.tw/" target="_blank" id="final_a">政府資料開放平台</a> ';
	document.getElementById("copyright").innerHTML = copyright;
	});