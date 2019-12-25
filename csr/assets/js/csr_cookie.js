$(function () {
	$(".hamburger").click(function() {
		$(this).toggleClass("active");
		$("nav").toggleClass("show");
		return false;
	});
	$("nav div").click(function(){
		// $("nav div").removeClass("clicked");
		$(this).toggleClass("clicked");
		// $(this).parents().siblings().children(".submenu").slideUp(300);
		$(this).removeClass("show").siblings(".submenu").slideToggle(300);
		return false;
	});
	$("nav a,nav .close").click(function(){
		$("nav").removeClass("show");
		$(".hamburger").removeClass("active");
		// return false;
	});

	$(".search i").click(function() {
		$(".searchBox").fadeIn(200);
	});
	$(".searchBox .mask").click(function() {
		$(".searchBox").fadeOut(200);
	});
	$(".goTop").click(function(){
		$("html,body").animate({scrollTop:0},500);
	});
	var WINDOWh = $(window).height();
	var cookieBoxH = $("#cookie-bar").outerHeight();
	var headerH = $("header").outerHeight();
	$("nav").css("margin-top",cookieBoxH);
	$(".goTop").hide();
	$("body").css("padding-top","0");
	$("header").css("position","relative");
	//當是手機時
	var allMOBILE = window.matchMedia( "(max-width: 766px)");
	if (allMOBILE.matches) {
		$(".nav").css("position","absolute");
	};
	
	$(window).scroll(function() {
		//取得目前捲軸滾動到的位置
		var NOWs = $(this).scrollTop();
		var NAVmove = cookieBoxH - NOWs;
		var AddTop = cookieBoxH + headerH + 16;
		if (NAVmove <= 0) {
			NAVmove = 0;
			AddTop = cookieBoxH + headerH + 16;
			if ( cookieBoxH <= 0)  {
				AddTop = 0;
			}
		}
		if (NAVmove > 0)  {
			NAVmove = cookieBoxH - NOWs;
			AddTop = 0;
		}

		// $("body").css("padding-top",AddTop);

		// console.log(cookieBoxH,NAVmove,AddTop);
		if ( NOWs > cookieBoxH + headerH){
			$("body").removeClass("cookieShow");
			$("header").css("position","fixed");
			$("nav").css("margin-top",0);
			if ( NOWs > WINDOWh){
				$(".shares").addClass("show");
				$(".goTop").fadeIn(300);
			} else {
				$(".shares").removeClass("show");
				$(".goTop").fadeOut(300);
			}
		} else {
		   	$("body").addClass("cookieShow");
		   	$("nav").css("margin-top",NAVmove);
		   	$("header").css("position","relative");
		}
	});
	$("#cookie-know-button").click(function(){
		$("#cookie-bar").hide();
		cookieBoxH = 0;
	});
})