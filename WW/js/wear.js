$(function(){
    
    $(".top_menu>a").click(function(){
        $("section.drawer").addClass("on");
		$("div.wrap").addClass("on");    
    });
    
    $(".my_info dl dd").eq(0).click(function(){
		$("section.drawer").removeClass("on");
		$("div.wrap").removeClass("on");
	})
    
    $(".navi_menu .snb>ul>li:nth-child(2)>ul>li span").click(function(){
		$(this).toggleClass("on");
	})
    
    $(".reco_box article h3").click(function(){
        $(this).parent().siblings().removeClass("on")
        $(this).parent().addClass("on")
        
        $(".reco_box article ul li").parent().stop().animate({left:0},500,"swing");
        $(".reco_box article ul li").removeClass("on")
        $(this).next("ul").children().eq(0).addClass("on")
    })
    
    $(".reco_box article ul li").click(function(){
        var i = $(this).index();
        console.log(i);
        
        $(this).siblings().removeClass("on")
        $(this).addClass("on")
        
        $(this).parent().stop().animate({left:-i*111},500,"swing");
    });
    
    $(".d_menu>p").click(function(){
        $(".d_menu form").toggleClass("on"); 
    });
    
    
   /* $("body,html").scroll(function(){
        var i = $(this).scrollTop();
        console.log(i);
    });*/
    
    $(".d_menu article h3").click(function(){
        $(this).parent().siblings().removeClass("on"); 
        $(this).parent().addClass("on"); 
    });
});