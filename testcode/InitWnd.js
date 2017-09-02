function InitWnd(messageBox,pMap,infotext,markerPoint,imgUrl,maptype,centeron,zoomsize){
	console.log("InitWnd on!");
	console.log("x "+infotext.length);
	//------------------初始化地圖--------------------
	var pOMap = document.getElementById("OMap");
	var mapOptiions = {
		scaleControl: false,                //不顯示比例尺
		navigationControl: true,     //顯示地圖縮放控制項
		navigationControlOptions: {        //設定地圖縮放控制項
			controlPosition: TGOS.TGControlPosition.TOP_LEFT,  //控制項位置
			navigationControlStyle: TGOS.TGNavigationControlStyle.SMALL         //控制項樣式
		},
		mapTypeControl: false                   //不顯示地圖類型控制項
	};
	if (maptype == "Google") pMap = new TGOS.TGOnlineMap(pOMap, TGOS.TGCoordSys.EPSG3857, mapOptiions);    //建立地圖,選擇Google坐標
	else pMap = new TGOS.TGOnlineMap(pOMap, TGOS.TGCoordSys.EPSG3826, mapOptiions);    //建立地圖,選擇TWD97坐標
	pMap.setZoom(zoomsize);   
	if (centeron == "yes"){
		if (maptype == "Google") pMap.setCenter(new TGOS.TGPoint(120.4491113,23.4800751));      //初始地圖中心點
		else pMap.setCenter(new TGOS.TGPoint(194178.013,2597686.649));      //初始地圖中心點
	}
	for(var i = 0; i < infotext.length; i++) {
		//------------------建立標記點---------------------
		var markerImg = new TGOS.TGImage(imgUrl[i], new TGOS.TGSize(32, 33), new TGOS.TGPoint(0, 0), new TGOS.TGPoint(10, 33));       //設定標記點圖片及尺寸大小
		var pTGMarker = new TGOS.TGMarker(pMap, markerPoint[i],'', markerImg, {flat:false});   //建立機關單位標記點
		//-----------------建立訊息視窗--------------------
		var InfoWindowOptions = {
			maxWidth:4000,         //訊息視窗的最大寬度
			pixelOffset: new TGOS.TGSize(5, -30), //InfoWindow起始位置的偏移量, 使用TGSize設定, 向右X為正, 向上Y為負 
			opacity:0.8
		};
		messageBox= new TGOS.TGInfoWindow(infotext[i], markerPoint[i], InfoWindowOptions);   //建立訊息視窗 
		TGOS.TGEvent.addListener(pTGMarker, "click", function (pTGMarker, messageBox) {return function () {messageBox.open(pMap, pTGMarker);}} (pTGMarker, messageBox));//滑鼠監聽事件--開啟訊息視窗
		//TGOS.TGEvent.addListener(pTGMarker, "mouseover", function (pTGMarker, messageBox) {return function () {messageBox.open(pMap, pTGMarker);}} (pTGMarker, messageBox));//滑鼠監聽事件--開啟訊息視窗
		//TGOS.TGEvent.addListener(pTGMarker, "mouseout", function (messageBox) {return function () {messageBox.close();}} (messageBox));
	}
	console.log("InitWnd off!");
}