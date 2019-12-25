// typekit
(function(d) {
	var config = {
		kitId: 'nbh5pbp',
		scriptTimeout: 3000,
		async: true
	},
	h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

$(function () {
	var width = $(window).width();
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 120) {
			$("nav").removeClass("nav");
			$("body").addClass("scrolling");
			$("nav").addClass("nav-fixed");
			// 0730 gotop
			$(".gotop").addClass("show");
		}
		else{
			$("nav").removeClass("nav-fixed");
			$("body").removeClass("scrolling");
			$("nav").addClass("nav");
			// 0730 gotop
			$(".gotop").removeClass("show");
		}
	});
	if ( width < 768 ) {
		if (location.href.match('register|succeed|login')) {
			var memberBox = $(".member-box").height() + 60;
			$("body").css({ 'min-height' : memberBox });
		}
	}
	$("nav .value-added li > i.icon-search").click(function(){
		$(this).animate({ 'opacity': 0 });
		$(this).parent().siblings().animate({ 'opacity': 0 });
		$(this).siblings("form").fadeIn();
	});
	$("nav .value-added li > form i.icon-close").click(function(){
		$(this).parent().parent().siblings().animate({ 'opacity': 1 });
		$(this).parent().siblings().animate({ 'opacity': 1 });
		$(this).parent().fadeOut();
	});
	$("nav .hamburger").click(function(){
		if ($(this).hasClass("closed")){
			$("body").css({
				'body': '100vh',
				'overflow': 'hidden'
			});
			$(this).removeClass("closed");
			$(this).addClass("active");
			$(this).parent().parent().parent().parent().addClass("open");
			$(this).parent().siblings(".slide-menu").delay(200).slideDown();
		} else {
			$("body").css({
				'body': 'auto',
				'overflow': 'inherit'
			});
			$(this).addClass("closed");
			$(this).removeClass("active");
			$(this).parent().parent().parent().parent().removeClass("open");
			$(this).parent().siblings(".slide-menu").slideUp();
		}
	});

	// slider start-----------------------------------------------
	var _header_wrap = $('.header-wrap').width(),
		_header_slider_index = 0,
		_header_slider_count = $('.header-slider > li').length,
		_slider_dot = '',
		$header_slider_li = $('.header-slider li'),
		$header_bg_slider_li = $('.header-bg-slider li');
	var _special_wrap = $('.special-wrap').width(),
		_special_slider_index = 0,
		_special_slider_count = $('.special-slider > li').length,
		_special_slider_dot = '',
		$special_slider_li = $('.special-slider li');
	if (_header_slider_count > 1) {
		$('.header-wrap').after('<ul class="slider_control"></ul>')
		for (var i = 0; i < _header_slider_count; i++) {
			_slider_dot += '<li></li>';
		}
		$('.header-wrap').append('<a href="#" class="prev_slider"></a><a href="#" class="next_slider"></a>');
		$('.slider_control').append(_slider_dot);
		$('.slider_control li').eq(_header_slider_index).addClass('active');
		$('.prev_slider').click(function () {
			if (_header_slider_index != 0) {
				_header_slider_index--;
			} else {
				_header_slider_index = $('header .slider_control li').length - 1;
			}
			switch_slider();
			return false;
		})
		$('.next_slider').click(function () {
			if (_header_slider_index != $('header .slider_control li').length - 1) {
				_header_slider_index++;
			} else {
				_header_slider_index = 0;
			}
			switch_slider();
			return false;
		})
		setInterval(function () {
			if (_header_slider_index != $('header .slider_control li').length - 1) {
				_header_slider_index++;
			} else {
				_header_slider_index = 0;
			}
			switch_slider();
		}, 5000)
	}
	if (_special_slider_count > 1) {
		$('.special-wrap').after('<ul class="specialTw slider_control"></ul>')
		for (var i = 0; i < _special_slider_count; i++) {
			_special_slider_dot += '<li></li>';
		}
		$('.special-wrap').append('<a href="#" class="prev_slider prev_slider"></a><a href="#" class="next_slider"></a>');
		$('.specialTw .slider_control').append(_special_slider_dot);
		$('.specialTw .slider_control li').eq(_special_slider_index).addClass('active');
		$('.prev_slider').click(function () {
			if (_special_slider_index != 0) {
				_special_slider_index--;
			} else {
				_special_slider_index = $('.specialTw .slider_control li').length - 1;
			}
			switch_special_slider();
			return false;
		})
		$('.next_slider').click(function () {
			if (_special_slider_index != $('.specialTw .slider_control li').length - 1) {
				_special_slider_index++;
			} else {
				_special_slider_index = 0;
			}
			switch_special_slider();
			return false;
		})
		setInterval(function () {
			if (_special_slider_index != $('.specialTw .slider_control li').length - 1) {
				_special_slider_index++;
			} else {
				_special_slider_index = 0;
			}
			switch_special_slider();
		}, 5000)
	}
	var $control_li = $('header .slider_control li');
	$control_li.click(function () {
		if (_header_slider_index != $(this).index()) {
			$header_slider_li.eq(_header_slider_index).removeClass('active');
			$control_li.eq(_header_slider_index).removeClass();
			_header_slider_index = $(this).index();
			switch_slider();
		}
	})
	function switch_slider() {
		$header_slider_li.eq(_header_slider_index).addClass('active').siblings().removeClass('active');
		$header_bg_slider_li.eq(_header_slider_index).addClass('active').siblings().removeClass('active');
		$control_li.eq(_header_slider_index).addClass('active').siblings().removeClass('active');
	}
	var $special_control_li = $('.specialTw .slider_control li');
	$special_control_li.click(function () {
		if (_special_slider_index != $(this).index()) {
			$special_slider_li.eq(_special_slider_index).removeClass('active');
			$special_control_li.eq(_special_slider_index).removeClass();
			_special_slider_index = $(this).index();
			switch_special_slider();
		}
	})
	function switch_special_slider() {
		$special_slider_li.eq(_special_slider_index).addClass('active').siblings().removeClass('active');
		$special_control_li.eq(_special_slider_index).addClass('active').siblings().removeClass('active');
	}
	// slider end-------------------------------------------------
	// 0730 gotop
	$(".gotop").click(function(){
		var nowscroll = $(window).scrollTop();
		var SPEEDvar = nowscroll/10 + 300;
		console.log(nowscroll,SPEEDvar);
		$("html,body").animate({scrollTop:0},SPEEDvar);
	});
	// 0730 右欄文字區塊行數限制
	var ellipsisText = function (e, etc) {
	    var wordArray = e.innerHTML.split("");
	    while (e.scrollHeight > e.offsetHeight) {
	        wordArray.pop();
	        e.innerHTML = wordArray.join("") + (etc || "...");
	    }
	};
	[].forEach.call(document.querySelectorAll(".hot-issue ul li .h6 a"), function(elem) {
	    ellipsisText(elem);
	});
	// 
	// $content = file_get_contents('../t1.html');
	// $content = str_replace('</head>','<link rel="stylesheet" href="../assets_new/css/iframe.css" /></head>', $content);
	// var cssLink = document.createElement("#iframe1");
 //    cssLink.href = "../css/iframe.css";
 //    cssLink.rel = "stylesheet";
 //    cssLink.type = "text/css";
 //    frames['#iframe1'].document.head.appendChild(cssLink);
});