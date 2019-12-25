$(function () {
	$(window).scroll(function() {
		//取得目前捲軸滾動到的位置
		var NowSearch = $(this).scrollTop();
		var HeaderSearch = $("header").outerHeight();
		var MainSearch = $(".resultList").outerHeight();
		var BoxSearch = $(".filter-option > div").outerHeight();
		var BoxMove = NowSearch - HeaderSearch;
		var BoxStop = MainSearch - HeaderSearch -BoxSearch;
		if (BoxMove >0) {
			if (BoxMove < BoxStop) {
				$(".filter-option > div").css("top",BoxMove);
			}else {
				$(".filter-option > div").css("top",BoxStop);
			}
		} else {
			$(".filter-option > div").css("top","0");
		}
		
	});
	
})