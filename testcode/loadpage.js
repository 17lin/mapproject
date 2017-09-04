$(document).ready(function(){
	document.getElementById("nav").innerHTML = '<div class="container"> <div id = "navheader" class="navbar-header"> <a class="navbar-brand" href="#">Chiayi</a> </div> <div> <ul id = "navbar" class="nav navbar-nav"></ul> </div> </div> <div id="panel"> </div>';
	document.getElementById("navbar").innerHTML = '<li><a id="flip_Iot" href=# class="" style="margin-left:15px;">Iot</a></li> <li><a id="flip_Edu" href=# class="" style="margin-left:15px;">Edu</a></li> <li><a id="flip_Social" href=# class="" style="margin-left:15px;">Social</a></li>';
	document.getElementById("panel").innerHTML = '<div id="panel_Iot">	</div><div id="panel_Edu">	</div><div id="panel_Social">	</div>';	
	$("#flip_Iot").click(function(){
		$("#panel_Iot").slideToggle("fast");
	});
	$("#flip_Edu").click(function(){
		$("#panel_Edu").slideToggle("fast");
	});
	$("#flip_Social").click(function(){
		$("#panel_Social").slideToggle("fast");
	});
	if (document.title == "Chiayi X OpenData X TGOS"){
		document.getElementById("panel_Iot").innerHTML = '<li><a href="iot/itaiwan.html">iTaiwan</a></li><li><a href="iot/aqi.html">AQI</a></li>';		
		document.getElementById("panel_Edu").innerHTML = '<li><a href="edu/school.html">school</a></li>';
		document.getElementById("panel_Social").innerHTML = '<li><a href="social/police.html">police</a></li><li><a href="social/village.html">village</a></li>';
		
	}else{
		document.getElementById("navheader").innerHTML ='<a class="navbar-brand" href="../index.html">Chiayi</a>';
		document.getElementById("panel_Iot").innerHTML = '<li><a href="../iot/itaiwan.html">iTaiwan</a></li><li><a href="../iot/aqi.html">AQI</a></li>';		
		document.getElementById("panel_Edu").innerHTML = '<li><a href="../edu/school.html">school</a></li>';
		document.getElementById("panel_Social").innerHTML = '<li><a href="../social/police.html">police</a></li></li><li><a href="../social/village.html">village</a></li>';
	}
	document.getElementById("panel_Iot").style.display="none";
	document.getElementById("panel_Edu").style.display="none";
	document.getElementById("panel_Social").style.display="none";
	});