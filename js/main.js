

window.onload = function(){

    
    TweenMax.staggerTo('.text_ani',0.5,{
        ease: Power2.easeOut,
        y: 0,
        delay:0
    },0.05)

    TweenMax.staggerTo('.up_ani',0.5,{
        ease: Power2.easeOut,
        y: 0,
        opacity: 1,
        delay:0.75
    },0.35)

    TweenMax.to('header,nav',0.5,{
        ease: Power1.easeOut,
        opacity: 1,
        delay:1.65
    });

    TweenMax.to('.img_box',0.5,{
        ease: Power1.easeOut,
        opacity: 1,
        delay:1
    });
    



    var controller = new ScrollMagic.Controller();

    var tween1 = TweenMax.staggerTo('.trigger_ani',0.5,{
        ease: Power2.easeOut,
        y: 0,
        opacity: 1,
        delay:0    
    },0.05);

    var scene = new ScrollMagic.Scene({
        triggerElement: '.work_p',
        triggerHook: 0.85,
        offset: '3vw'
    })
    .setTween(tween1)
    .setTween(tween2)
    .addTo(controller);

    var controller2 = new ScrollMagic.Controller();

    var tween2 = TweenMax.to('.snb_box',0.5,{
        ease: Power2.easeOut,
        opacity: 1,
        cursor: 'pointer',
        delay: 0
    });
    

    var scene2 = new ScrollMagic.Scene({
        triggerElement: '.work_p',
        triggerHook: 0.55,
        offset: '100vw'
    })
    .setTween(tween2)
    .addTo(controller2);


    var controller3 = new ScrollMagic.Controller();

    var tween3 = TweenMax.staggerTo('.trigger_ani2',0.5,{
        ease: Power2.easeOut,
        y: 0,
        opacity: 1,
        delay:0    
    },0.05);
    
    var scene3 = new ScrollMagic.Scene({
        triggerElement: '.resume_p',
        triggerHook: 0.65,
        offset: 0
    })
    .setTween(tween3)
    .addTo(controller3);

    var controller4 = new ScrollMagic.Controller();

    var tween4 = TweenMax.staggerTo('.trigger_ani3',0.5,{
        ease: Power2.easeOut,
        y: 0,
        opacity: 1,
        delay:0    
    },0.05);
    
    var scene3 = new ScrollMagic.Scene({
        triggerElement: '.about_p',
        triggerHook: 0.65,
        offset: 0
    })
    .setTween(tween4)
    .addTo(controller4);

    var controller5 = new ScrollMagic.Controller();

    var tween5 = TweenMax.staggerTo('.trigger_ani4',0.5,{
        ease: Power2.easeOut,
        y: 0,
        opacity: 1,
        delay:0    
    },0.05);
    
    var scene3 = new ScrollMagic.Scene({
        triggerElement: '.contact_p',
        triggerHook: 0.85,
        offset: 0
    })
    .setTween(tween5)
    .addTo(controller5);

}

