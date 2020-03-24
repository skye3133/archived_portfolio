window.onload = function(){
    
    TweenMax.staggerTo('.trigger_ani1',0.5,{
        ease: Power2.easeOut,
        y: 0,
        delay:0.3
    },0.09)

    TweenMax.staggerTo('.up_ani',0.5,{
        ease: Power2.easeOut,
        y: 0,
        opacity: 1,
        delay:0.75
    },0.35)

    TweenMax.to('header',0.5,{
        ease: Power1.easeOut,
        opacity: 1,
        delay:1.65
    });
    
    
    
    
    var controller = new ScrollMagic.Controller();

    var tween1 = TweenMax.staggerTo('.trigger_ani2',0.5,{
        ease: Power2.easeOut,
        y: 0,
        opacity: 1,
        delay:0.1   
    },0.07);

    var scene = new ScrollMagic.Scene({
        triggerElement: '.detail_p',
        triggerHook: 0.65,
        offset: 0
    })
    .setTween(tween1)
    .addTo(controller);


    var controller2 = new ScrollMagic.Controller();

    var tween2 = TweenMax.staggerTo('.trigger_ani3',0.5,{
        ease: Power2.easeOut,
        y: 0,
        opacity: 1,
        delay:0.3  
    },0.05);

    var scene2 = new ScrollMagic.Scene({
        triggerElement: '.footer_trigger',
        triggerHook: 0.85,
        offset: 0
    })
    .setTween(tween2)
    .addTo(controller2);


}

$(function(){

    $("body,html").stop().animate({scrollTop: 0},700,"swing");

    $(".top").click(function(){
        $("body,html").stop().animate({scrollTop: 0},700,"swing");
    })

    $(".w_link").click(function(e){
        e.preventDefault;
        var url = "WW/index.html";
        var option = "resizeble=no,scrollbars=no,status=no,width=375px,height=812px";
        window.open(url,'test',option);
    });
})