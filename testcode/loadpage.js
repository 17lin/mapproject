function navload(){
	document.getElementById("nav").innerHTML = '<div class="container"><div id = "navheader" class="navbar-header"><a class="navbar-brand" href="#">Chiayi</a></div><div><ul id = "navbar" class="nav navbar-nav"></ul></div></div>';
	if (document.title == "Chiayi X OpenData X TGOS"){
		document.getElementById("navbar").innerHTML = '<li><a href="iot/maptestcode.html">iTaiwan</a></li><li><a href="social/police.html">police</a></li><li><a href="edu/school.html">school</a></li><li><a href="iot/aqi.html">AQI</a></li>';
	}else{
		document.getElementById("navheader").innerHTML ='<a class="navbar-brand" href="../index.html">Chiayi</a>';
		document.getElementById("navbar").innerHTML = '<li><a href="../iot/maptestcode.html">iTaiwan</a></li><li><a href="../social/police.html">police</a></li><li><a href="../edu/school.html">school</a></li><li><a href="../iot/aqi.html">AQI</a></li>';
	}	
}
