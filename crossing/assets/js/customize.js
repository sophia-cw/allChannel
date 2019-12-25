$(document).ready(function(){
	var width = $(window).width();
	$("header .mobileNav > ul > li.mgz > .img, header .mobileNav > ul > li.user > .img, header .mobileNav > ul > li.search > .img").click(function(){
		$(this).parent().toggleClass('active');
		$(this).parent().siblings().removeClass('active');
		$(this).parent().siblings().children('.subLevel').fadeOut();
		$(this).siblings(".subLevel").fadeToggle();
	});
	$(".hamburger").click(function(){
		$(this).parent().parent().toggleClass("active");
	});
	if (width >= 768) {
		$("header nav > ul > li:last-child > a").click(function(){
			$(this).siblings("ul").fadeToggle();
			return false;
		});
	}
	if (width < 768) {
		$(".hamburger").click(function(){
			$('.mobileNav').slideToggle();
		});
		$("header nav > ul > li:last-child > a").click(function(){
			$(this).siblings().toggleClass("active");
			$(this).siblings("ul").slideToggle();
			return false;
		});
	}
	if (width < 769) {
		$("li.sns").click(function(){
			$("ul.sns").slideToggle();
		});
	}
	$('.mode .list').click(function() {
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		$(this).parent().siblings().removeClass("card-grid").addClass("card-list");
	});
	$('.mode .grid').click(function() {
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		$(this).parent().siblings().removeClass("card-list").addClass("card-grid");
	});
	if (width >= 1024) {
		$('.catagory-new-list ul li h5 a').mousemove(function(e) {
			$(this).parent().parent().parent().siblings('.previewImg').children('img').attr('src', $(this).attr('data-role'));
			$(this).parent().parent().siblings().removeClass('active');
			$(this).parent().parent().addClass('active');
		})
	}
	if (width >= 768) {
		$('.fixed-btn a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: (target.offset().top - 125)
					}, 1000, "easeInOutExpo");
					return false;
				}
			}
		});
	}else{
		$('.fixed-btn a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: (target.offset().top - 95)
					}, 1000, "easeInOutExpo");
					return false;
				}
			}
		});
	}
	var objectTop = $(".mode").offset().top;
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		// var nowHeaderHeight = $("header").outerHeight();
		
		var startpoint = objectTop - 279;
		console.log(scroll,startpoint,objectTop);
		if (scroll >= 100) {
			$("header").addClass("nav-fixed");
		}
		else{
			$("header").removeClass("nav-fixed");
		}
		if (scroll >= 212) {
			$(".search-filter").addClass("filter-fixed");
		}
		else{
			$(".search-filter").removeClass("filter-fixed");
		}
		if (scroll >= startpoint) {
			$(".mode").addClass("filter-fixed");
		}
		else{
			$(".mode").removeClass("filter-fixed");
		}
		if (scroll >= 1000) {
			$(".fixed-btn").addClass("fixed-block");
		}
		else{
			$(".fixed-btn").removeClass("fixed-block");
		}
	});
	if (location.href.match('blogClass|author|blogIndividual|blogTopic|blogSearch|about')) {
		$('aside').simpleScrollFollow({
			min_width: 768,
			upper_side: 'header',
			limit_elem: $('article')
		});
		// $('.mode').simpleScrollFollow({
		// 	min_width: 768,
		// 	upper_side: 'header',
		// 	limit_elem: $('aside')
		// });
		// $('.search-filter').simpleScrollFollow({
		// 	min_width: 768,
		// 	upper_side: '#testtop',
		// 	limit_elem: $('aside')
		// });
	}
	//2018.02.27新增
	//2018.03.08修改
	$(".bar-view").click(function(){
		$(".bar-expand").slideToggle();
	});
	if ( width >= 840 ){
		var containerWidth = $('.container').width();
		var btnLeft = ($(window).width() - containerWidth) / 2 ;
		$('.fixed-btn').css({ 'left' : btnLeft - 70 });
		if ( width >= 992 ){
			if ( width <= 1280 ){
				$('.fixed-btn').css({ 'left' : btnLeft - 50 });
			}
		}
		if ( width >= 840 ){
			if ( width <= 860 ){
				$('.fixed-btn').css({ 'left' : btnLeft - 50 });
			}
		}
	}

	// var containerWidth = $('.container').width();
	// var btnLeft = ($(window).width() - containerWidth) / 2 ;
	// if ( width >= 1281 ){
	// 	$('.fixed-btn').css({ 'left' : btnLeft - 70 });
	// }
	// if ( width <= 1280 ){
	// 	if ( width >= 992 ) {
	// 		$('.fixed-btn').css({ 'left' : btnLeft - 50 });
	// 	}
	// }
	// if ( width <= 991 ){
	// 	if ( width >= 859 ) {
	// 		$('.fixed-btn').css({ 'left' : btnLeft - 70 });
	// 	}
	// }
	// if ( width <= 860 ){
	// 	if ( width >= 839 ){
	// 		$('.fixed-btn').css({ 'left' : btnLeft - 50 });
	// 	}
	// }

});