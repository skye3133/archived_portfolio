$(function(){
       /* var target = "login_page.html"
        var timer1 = setTimeout(function(){
            window.location.href = target;
        },1000);*/
    
    //map
    $("div.wrap dl.top_menu dd").eq(1).click(function(){
		$("section.drawer").addClass("on");
		$("div.wrap").addClass("on");
		$("body").addClass("on");
	})
	
	$("div.wrap div.top_menu a").click(function(){
		$("section.drawer").addClass("on");
		$("div.wrap").addClass("on");
	})
	
	$(".my_info dl dd").eq(0).click(function(){
		$("section.drawer").removeClass("on");
		$("div.wrap").removeClass("on");
		$("body").removeClass("on");
		$autoS = setInterval(autoMoving,3000);
	})
    
    $(".navi_menu .snb>ul>li:nth-child(2)>ul>li span").click(function(){
		$(this).toggleClass("on");
	})
	
	$(".tab_menu dd a").click(function(e){
		e.preventDefault();
		$(this).parent().siblings().children().removeClass("on");
		$(this).addClass("on");
        target = $(this).attr('href');
        
        var timer = setTimeout(function(){
            window.location.href = target;
        },1000);
	});

	$(".drawer>.navi_menu>ul>li>a").click(function(e){
		e.preventDefault();
		
        target = $(this).attr('href');
        
        var timer = setTimeout(function(){
            window.location.href = target;
        },0);
	});
	
	
	//weather 
	$(window).scroll(function(){
		var s = $(this).scrollTop();
		console.log(s);
		
		if(s > 0){
			$("section.d_weather").addClass("on")
		}else{
			$("section.d_weather").removeClass("on")
		}
		
		
	});
	
	//chat_list
	$(".chat_btn li").eq(0).click(function(){
		$(this).parent().toggleClass("on");
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
		$("div.chat_list ul.chat>li:first-child>a>ul>li:last-child span").removeClass("on");
	})
	
	var timer = setTimeout(function(){
            $("ul.chat>li:nth-child(4)").insertBefore("ul.chat>li:first");
			$("div.chat_list ul.chat>li>a>ul>li:last-child span").addClass("on");
			$("div.chat_list ul.chat>li:nth-child(1)>a>ul>li:last-child em").text("Right now");
        },3000);
	
	
	//login
	$("footer>p>a").click(function(){
        $("div.wrap").addClass("on")
    });
    
     $("div.click").click(function(){
        $("div.wrap").removeClass("on")
    });
    
    $("section.sign>form>fieldset>input:last-of-type").click(function(e){
        e.preventDefault();
        $("div.wrap").removeClass("on")
    });

     $("section.sign>form>fieldset>.agree").click(function(){
        
        $("div.agree").addClass("on");
    })
	
	
	//main
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
        /*console.log(i);*/
        
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
	
	
	
	$(".main dl.top_menu dd").eq(1).click(function(){
		$("section.drawer").addClass("on");
		$("div.wrap").addClass("on");
		clearInterval($autoS);
		
	})
	
	var fNum = 0;
	var lNum = 2;
	
	function autoMoving(){
		fNum++
		if(fNum > lNum) fNum = 0;
		/*console.log(fNum);*/
		
		if(fNum == 2){
			 var k = fNum * 375 + 70;
            $(".bg").css({"left": -k});
			$(".t_D>span").css({"left": "90px"});
			
            
        }else if(fNum == 1){
        	$(".bg").css({"left": -375});
			$(".t_D>span").css({"left": "171px"});
        }else{
        	$(".bg").css({"left": 0});
			$(".t_D>span").css({"left": "18px"});    
        }
		
		$(".item_box ul li").removeClass("on");
        $(".item_box ul li").eq(fNum).addClass("on");
        $("div.roll a").removeClass("on");
        $("div.roll a").eq(fNum).addClass("on");
	}
	$autoS = setInterval(autoMoving,3000);
	
		
	
	//wear
    $(".reco_box article h3").click(function(){
		
		num = 0;
		
        $(this).parent().siblings().removeClass("on")
        $(this).parent().addClass("on")
		
		$(this).parent().siblings().children("ul").animate({"left":"0"});
		$(this).parent().siblings().find("li").removeClass("on");
		$(this).parent().siblings().find("li:first-child").addClass("on");
		
    })
    
    $(".reco_box article ul li").click(function(){
        var i = $(this).index();
        console.log(i);
        
		num = i;
		
        $(this).siblings().removeClass("on")
        $(this).addClass("on")
        
        $(this).parent().stop().animate({left:-i*111},500,"swing");
    });
    
    $(".d_menu>p").click(function(){
        $(".d_menu form").toggleClass("on"); 
    });
    
    $(".d_menu article h3").click(function(){
        $(this).parent().siblings().removeClass("on"); 
        $(this).parent().addClass("on"); 
    });
	
	var num = 0;
	var lastnum = 4;
	function autoMove(){
		
		num++;
		if(num > lastnum) num = 0;
		console.log(num);
		
		
		$(".reco_box article.on ul").animate({"left": -num*111},800,"linear");
		$(".reco_box article.on ul li").removeClass("on");
	
		$(".reco_box article.on ul li").eq(num).addClass("on");
	
	}
	$autoImg = setInterval(autoMove,3000);
	
	
	var inveSet; 
		var currentChk;
		var count;
		var cntEffect = Power1.easeOut;
		var cntStart = -910;
		var cntDue = 2.5;

		inveSet = function(){
	   //countInit
		TweenMax.to('.nb21', 0, {y:cntStart});
		TweenMax.to('.nb22', 0, {y:cntStart});

		TweenMax.to('.nb23', 0, {y:-630});
		}

		count = function(){
		new TweenMax.to('.nb21', cntDue, {y: 5, ease:cntEffect}).delay(0.5);
		new TweenMax.to('.nb22', cntDue, {y: 5, ease:cntEffect}).delay(0.7);

		new TweenMax.to('.nb23', cntDue, {y: 25, ease:cntEffect}).delay(0.6);

		}

		inveSet();
		count();
	
	
});