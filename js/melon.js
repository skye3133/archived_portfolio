$(function(){
    
    $("html,body").stop().animate({scrollTop:0},500,"linear");
    
    $(".bg_box").click(function(){
        $("html,body").stop().animate({scrollTop:0},500,"linear");    
    })
    
    $(".fixed>li").click(function(){
       
        $(".tunning_box").addClass("on")
        var d = setTimeout(function(){
             $(".tunning_box").removeClass("on")
        },2005)
        
        var i = $(this).index();
        
        var c = setTimeout(function(){
            
            $(".content>section").removeClass("on");
            $(".content>section").eq(i).addClass("on");
            
            $(".fixed>li").removeClass("on");
            $(".fixed>li").eq(i).addClass("on");
            
            $("html,body").stop().animate({scrollTop:0},100,"linear");
        },1000)
        
    })
    
})