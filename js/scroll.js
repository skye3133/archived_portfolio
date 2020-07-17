$(function(){
        
        var w_width = $(window).width();

        /* $('body,html').animate({scrollTop: 0},1500,'swing'); */

        var work_top = $(".work_p").offset().top;
        var resume_top = $(".resume_p").offset().top;
        var about_top = $(".about_p").offset().top;
        var contact_top = $(".contact_p").offset().top;
        var last = $(".about_p>dl>dt").eq(3).offset().top;
        var last2 = $(".about_p>dl>dd").eq(2).offset().top;
        var last3 = $(".about_p>dl>dt").eq(1).offset().top;

        console.log(work_top);
        console.log(resume_top);
        console.log(about_top);
        console.log(contact_top);


        $(window).scroll(function(){


            var scroll_top = $(document).scrollTop();
            console.log(scroll_top);
            var height = $(document).height();
            console.log(height);
            var height_win = $(window).height();
            console.log(height_win);

            console.log(scroll_top);

            if(scroll_top < resume_top){
                $(".snb>li").removeClass("on")
                $(".snb>li").eq(1).addClass("on")
            }

            if(scroll_top > resume_top && scroll_top < about_top){
                $(".snb>li").removeClass("on")
                $(".snb>li").eq(2).addClass("on")
            }

            if(scroll_top > about_top && scroll_top < contact_top){
                $(".snb>li").removeClass("on")
                $(".snb>li").eq(3).addClass("on")
            }

            if(scroll_top > contact_top){
                $(".snb>li").removeClass("on")
                $(".snb>li").eq(4).addClass("on")
            }

            if(scroll_top > work_top){
                $(".m_gnb").addClass("on");
            }
            
            if(scroll_top < work_top){
                $(".m_gnb").removeClass("on");
            }

            if(Math.round(scroll_top) == Math.round(height - height_win)){
                $(".snb>li").removeClass("on")
                $(".snb>li").eq(4).addClass("on")  
            }
        })

    

        $(".gnb>li").click(function(){
            var idx = $(this).index();

            var h = $(document).height() - $(window).height();
            

            if(idx == 0){
                $('body,html').animate({scrollTop: 0},1500,"swing");    
            }else if(idx > 0 && idx < 4){
                var m_idx = $('main>section').eq(idx).offset().top;
                var rm_idx = m_idx + 10;

                $('body,html').animate({scrollTop: rm_idx},1500,"swing");
            }else if(idx == 4){
                $('body,html').animate({scrollTop: h},1500,"swing");    
            }

            console.log(h);
        })

        $(".snb>li").click(function(){
            var idx = $(this).index();

            var h = $(document).height() - $(window).height();
            

            if(idx == 0){
                $('body,html').animate({scrollTop: 0},1500,"swing");    
            }else if(idx > 0 && idx < 4){
                var m_idx = $('main>section').eq(idx).offset().top;
                var rm_idx = m_idx + 10;

                $('body,html').animate({scrollTop: rm_idx},1500,"swing");
            }else if(idx == 4){
                $('body,html').animate({scrollTop: h},1500,"swing");    
            }

            console.log(h);
        })


        $(".m_gnb").click(function(){     

            $("body").toggleClass("on");    
            $(".m_gnb>li").toggleClass("on");    
            $(".menu_box").toggleClass("on");    
        })

        $(".menu_box>ul>li").click(function(){
            $("body").removeClass("on");    
            $(".m_gnb>li").removeClass("on");    
            $(".menu_box").removeClass("on");


            var idx = $(this).index();

            var h = $(document).height() - $(window).height();

            setTimeout(function(){
                if(idx == 0){
                    $('body,html').animate({scrollTop: 0},1500,"swing");    
                }else if(idx > 0 && idx < 4){
                    var m_idx = $('main>section').eq(idx).offset().top;
                    var rm_idx = m_idx + 10;

                    $('body,html').animate({scrollTop: rm_idx},1500,"swing");
                }else if(idx == 4){
                    $('body,html').animate({scrollTop: h},1500,"swing");    
                }    
            },500)
        })


    
        $(window).resize(function(){

            var w_width = $(window).width();

            var work_top = $(".work_p").offset().top;
            var resume_top = $(".resume_p").offset().top;
            var about_top = $(".about_p").offset().top;
            var contact_top = $(".contact_p").offset().top;
            var last = $(".about_p>dl>dt").eq(3).offset().top;
            var last2 = $(".about_p>dl>dd").eq(1).offset().top;   
            var last3 = $(".about_p>dl>dt").eq(1).offset().top;  
            
            $("body").removeClass("on");    
            $(".m_gnb>li").removeClass("on");    
            $(".menu_box").removeClass("on");

            $(window).scroll(function(){


                var scroll_top = $(document).scrollTop();
                var height = $(document).height();
                var height_win = $(window).height();
    
                console.log(scroll_top);
    
                if(scroll_top < resume_top){
                    $(".snb>li").removeClass("on")
                    $(".snb>li").eq(1).addClass("on")
                }
    
                if(scroll_top > resume_top && scroll_top < about_top){
                    $(".snb>li").removeClass("on")
                    $(".snb>li").eq(2).addClass("on")
                }
    
                if(scroll_top > about_top && scroll_top < contact_top){
                    $(".snb>li").removeClass("on")
                    $(".snb>li").eq(3).addClass("on")
                }
    
                if(scroll_top > contact_top){
                    $(".snb>li").removeClass("on")
                    $(".snb>li").eq(4).addClass("on")
                }
    
                if(scroll_top > work_top){
                    $(".m_gnb").addClass("on");
                }
                
                if(scroll_top < work_top){
                    $(".m_gnb").removeClass("on");
                }
    
                if(Math.round(scroll_top) == Math.round(height - height_win)){
                    $(".snb>li").removeClass("on")
                    $(".snb>li").eq(4).addClass("on")  
                }
    
                
            })
        })
    

})