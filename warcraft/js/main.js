$(function(){

    $(".mtop_menu>dl").slideUp(0);
    
    main();
    
    
    $(window).resize(function(){
        
        let Ww = $(window).width();

        $(".mtop_menu>dl").slideUp(0)
        
        if(Ww > 1024){
            $("section.hero>ul").css({"transform":"translateX(-50%)"});
            $("section.patch>ul").css({"left":"50%","transform":"translateX(-50%)"});
        }else{
            $("section.hero>ul").css({"left":"50%","transform":"translate(-50%)"});
            $("section.patch>ul").css({"left":"0","transform":"translateX(0)"});
        }

        main();
           
    })

});


function main(){
    
    let Ww = $(window).width();

    if(Ww > 1024){
        $("section.hero>ul").css({"transform":"translateX(-50%)"});
        $("section.patch>ul").css({"left":"50%","transform":"translateX(-50%)"});
    }else{
        $("section.hero>ul").css({"left":"50%","transform":"translate(-50%)"});
        $("section.patch>ul").css({"left":"0","transform":"translateX(0)"});
    }

    $(".mtop_menu>a").click(function(e){
        e.preventDefault();
        $(this).siblings("dl").stop().slideToggle();
    });

    $("header a.btn_ham").click(function(e){
        e.preventDefault();
        
        $("body").css({"overflow":"hidden"})
        $(".drawer").addClass("on");

        $(".mtop_menu>dl").slideUp();

        setTimeout(function(){
            $(".drawer>nav").addClass("on");
        },100);

    })

    function close(e){
        e.preventDefault();
        $(".drawer>nav").removeClass("on");
        setTimeout(function(){
            $(".drawer").removeClass("on");    
            $("body").css({"overflow":"visible"})
        },150);
    }
    
    $("header .drawer nav a.btn_close").click(close);
    $("header .drawer").click(close);


    let patchW = $(".patch").width();
    
    $(".patch>.p_arrow>.p_next").click(function(e){
        e.preventDefault();

        $(".patch>ul").stop().animate({"left": -patchW}, 300, function(){
            $(this).append($(this).find("li:first").clone());
            $(this).find("li:first").remove();
            $(this).css("left",0);
        })
    })
    $('.patch>.p_arrow>.p_prev').click(function(e){
        e.preventDefault();
        
        $('.patch>ul').css("left", -patchW);
        $('.patch>ul').prepend($(".patch>ul").find("li:last").clone());
        $('.patch>ul').find("li:last").remove();
        $('.patch>ul').stop().animate({"left": 0}, 300)    
    })
    $("main>.race_info>.race_mobile>ul>li>a").click(function(e){
        e.preventDefault();
        let idx = $(this).parent().index();
        
        $("main>.race_info>.race_mobile>ul>li").removeClass("on");
        $(this).parent().addClass("on");
        
        $("main>.race_info>.race_mobile>dl").removeClass("on")
        $("main>.race_info>.race_mobile>dl").eq(idx).addClass("on")
    })

    let otherW = $(".other_game>ul>li").width();

    $(".other_game>.o_arrow>.o_next").click(function(e){
        e.preventDefault();

        $(".other_game>ul").stop().animate({"left": -otherW}, 300, function(){
            $(this).append($(this).find("li:first").clone());
            $(this).find("li:first").remove();
            $(this).css("left",0);
        })

    })

    $('.other_game>.o_arrow>.o_prev').click(function(e){
        e.preventDefault();
        
        $('.other_game>ul').css("left", -otherW);
        $('.other_game>ul').prepend($(".other_game>ul").find("li:last").clone());
        $('.other_game>ul').stop().animate({"left": 0}, 300)    
        $('.other_game>ul').find("li:last").remove();
    })
    
    const swiper1 = new Swiper('.swiper-container1', {
        slidesPerView: 'auto',
        spaceBetween: 20
    });
    
    const swiper2 = new Swiper('.swiper-container2', {
        slidesPerView: 'auto',
        spaceBetween: 20
    });
};
