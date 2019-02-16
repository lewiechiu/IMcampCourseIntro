$(document).ready(function(){


	var height = Math.round($("#NAVBAR").outerHeight());
	height = height + "px";
	$(".sidenav").css("top",height);


	// $(window).resize(function(){
	// 	$(".sidenav").css("margin-top",height);
		
	// });


	var warningShowed = false;
	$(window).resize(function(){

		var wide = $( window.self ).width();

		if (wide < 1100 && warningShowed == false)
		{
			warningShowed = true;
			alert("拉大視窗到左邊的紅色消失為止");
		}
	});

});

