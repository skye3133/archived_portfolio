$(function(){
    $("div.wrap dl.top_menu dd").eq(1).click(function(){
		$("section.drawer").addClass("on");
		$("div.wrap").addClass("on");
	})
	
	
	$(".my_info dl dd").eq(0).click(function(){
		$("section.drawer").removeClass("on");
		$("div.wrap").removeClass("on");
	})
    
    $(".navi_menu .snb>ul>li:nth-child(2)>ul>li span").click(function(){
		$(this).toggleClass("on");
	})
	
	$(".tab_menu dd").click(function(){
		$(this).siblings().removeClass("on");
		$(this).addClass("on");
	});
});