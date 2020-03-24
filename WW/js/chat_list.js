$(function(){
	$(".chat_btn li").eq(0).click(function(){
		$(this).parent().toggleClass("on");
	})
	
	$("div.wrap>dl.top_menu dd").eq(1).click(function(){
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
	
	$(".chat_list>.chat>li").eq(3).click(function(){
		$("div.wrap>dl.top_menu").addClass("on")
		$("div.wrap>div.chat").addClass("on")
		$("div.wrap>div.chat_list>ul.chat").addClass("on")
		$("div.wrap>div.chat_bg").addClass("on")
		
	});
	
	$("div.chat>dl.top_menu dd:first-of-type").click(function(){
		$("div.wrap>dl.top_menu").removeClass("on")
		$("div.wrap>div.chat").removeClass("on")
		$("div.wrap>div.chat_list>ul.chat").removeClass("on")
		$("div.wrap>div.chat_bg").removeClass("on")
	})
});//document.ready end