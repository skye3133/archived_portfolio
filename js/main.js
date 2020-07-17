

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


    let btnDarkMode = document.querySelector(".dark_mode_btn");
    
    let imgMe = document.querySelector(".me");
    let imgGihub = document.querySelector(".github");
    let imgMail = document.querySelector(".mail");

    let body = document.querySelector("body");


    function saveClassName(mode){
        localStorage.removeItem("mode");
        localStorage.setItem("mode", JSON.stringify(mode));
    }



    function currentCLassName(){
 
        let currentClass = btnDarkMode.classList;
        console.log(currentClass);

        if(currentClass.contains("on")){
            
            btnDarkMode.classList.remove("on");
            body.classList.remove("dark");
            imgMe.src = "../images/img_me.png";
            imgGihub.src = "../images/github_logo.png";
            imgMail.src = "../images/mail_logo.png";

            const whiteObj ={
                className : "white"
            }
            saveClassName(whiteObj);
            btnDarkMode.title = "Dark Mode";

        }else{
            btnDarkMode.classList.add("on");
            body.classList.add("dark");
            imgMe.src = "../images/img_me_dark.png";
            imgGihub.src = "../images/github_logo_white.png";
            imgMail.src = "../images/mail_logo_white.png";

            const darkObj ={
                className : "dark"
            }
            
            saveClassName(darkObj);
            btnDarkMode.title = "White Mode";
        } 
    }

    function loadClassName(){
        const className = localStorage.getItem("mode");
        
        if(className !== null){

            const parsedClassName = JSON.parse(className);
            const mode = parsedClassName.className;
    
            if(mode === "dark"){
                body.classList.add("dark")
                btnDarkMode.classList.add("on");
                imgMe.src = "../images/img_me_dark.png";
                imgGihub.src = "../images/github_logo_white.png";
                imgMail.src = "../images/mail_logo_white.png";
                btnDarkMode.title = "White Mode";
            }else{
                body.classList.remove("dark")
                btnDarkMode.classList.remove("on");
                imgMe.src = "../images/img_me.png";
                imgGihub.src = "../images/github_logo.png";
                imgMail.src = "../images/mail_logo.png";
                btnDarkMode.title = "Dark Mode";
            }
        }else{
            return false;
        }
        
    }

    function init(){
        loadClassName();
        btnDarkMode.addEventListener("click", currentCLassName);
    }

    init();
}