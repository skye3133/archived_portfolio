$(function(){
    $("div.location>a").click(function(){
        $("section.location_p").addClass("on");
        $("div.wrap").addClass("on");
        
    });
    
    $("section.location_p>div.off>a").click(function(){
        $("section.location_p").removeClass("on");
        $("div.wrap").removeClass("on");
    });
    
    $(".item_box .bg img").click(function(){
        
        var index = $(this).index();
        var i = (index+1) * 375;
        console.log(i);
        
        if(index>=2){
            $(".bg").css({"left": 0});
			$(".t_D>span").css({"left": "18px"});
        }else if(index == 1){
            var k = (index+1) * 375 + 70;
            $(".bg").css({"left": -k});
			$(".t_D>span").css({"left": "90px"});
        }else{
        $(".bg").css({"left": -i});
			$(".t_D>span").css({"left": "171px"});
        }
        
        $(".item_box").addClass("on");
        
        if(index>=2){
            $(".item_box ul li").removeClass("on");
            $(".item_box ul li").eq(0).addClass("on");
            $("div.roll a").removeClass("on");
            $("div.roll a").eq(0).addClass("on");
        }else{
            $(".item_box ul li").removeClass("on");
            $(".item_box ul li").eq(index+1).addClass("on");
            $("div.roll a").removeClass("on");
            $("div.roll a").eq(index+1).addClass("on");
        }
		
		
    });
    
    $(".roll a").click(function(){
        var index = $(this).index();
        var i = index * 375;
        
        if(index == 2){
            var k = index * 375 + 70;
            $(".bg").css({"left": -k});
        }else{
            $(".bg").css({"left": -i});
        }
        
        $(".item_box").addClass("on");
        
        
        $(".item_box ul li").removeClass("on");
        $(".item_box ul li").eq(index).addClass("on");
        $("div.roll a").removeClass("on");
        $("div.roll a").eq(index).addClass("on");
    
    });
	
	$(".navi_menu .snb>ul>li:nth-child(2)>ul>li span").click(function(){
		$(this).toggleClass("on");
	})
	
	$(".main dl.top_menu dd").eq(1).click(function(){
		$("section.drawer").addClass("on");
		$("div.wrap").addClass("on");
	})
	
	
	$(".my_info dl dd").eq(0).click(function(){
		$("section.drawer").removeClass("on");
		$("div.wrap").removeClass("on");
	})
});