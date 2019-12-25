webpackJsonp([8],{

/***/ "./resources/assets/js/csr.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// (function(d) {
//     // TYPEKIT
//     var config = {
//       kitId: 'tmy8pbh',
//       scriptTimeout: 3000,
//       async: true
//     },
//     h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
//   })(document);
$(function () {
	$(".hamburger").click(function () {
		$(this).toggleClass("active");
		$("nav").toggleClass("show");
		return false;
	});

	var WINDOWw = $(window).width();
	$("nav div").click(function () {
		// $(this).parents().siblings().children("div").removeClass("clicked");
		if ($("nav").hasClass("index") && WINDOWw >= 1000) {
			$("nav").show();
		} else {
			$(this).toggleClass("clicked");
			$(this).removeClass("show").siblings(".submenu").slideToggle(300);
			return false;
		}
	});
	if (WINDOWw >= 1000) {
		$("nav.index li").hover(function () {
			$(this).children(".submenu").slideDown(200);
		}, function () {
			$(this).children(".submenu").slideUp(100);
		});
	};
	$("nav a").click(function () {
		$("nav").removeClass("show");
		// $("nav").animate({"left":"-100%"},100);
		$(".hamburger").removeClass("active");
		// return false;
	});
	$("nav .close").click(function () {
		$("nav").removeClass("show");
		$(".hamburger").removeClass("active");
		// return false;
	});

	$(".search i").click(function () {
		$(".searchBox").fadeIn(200);
	});
	$(".searchBox .mask").click(function () {
		$(".searchBox").fadeOut(200);
	});
	$(".goTop").click(function () {
		$("html,body").animate({ scrollTop: 0 }, 500);
	});
	var WINDOWh = $(window).height();
	var headerH = $("header").outerHeight();
	$(".goTop").hide();
	$(window).scroll(function () {
		//�硋��桀��脰遘皛曉��啁�雿滨蔭
		var NOWs = $(this).scrollTop();
		// console.log(NOWs,headerH);
		if (NOWs > WINDOWh) {
			$(".shares").addClass("show");
			$(".goTop").fadeIn(300);
		} else {
			$(".shares").removeClass("show");
			$(".goTop").fadeOut(300);
		}
	});
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/csr.js");


/***/ })

},[5]);