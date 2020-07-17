$(function() {
    
    main();

    $(window).resize(function(){
        main();
    });
});

function main(){
    $(".h_info>ul").click(function() {
        $(this).toggleClass("on");
    });


    /* 배너 */
    var b_width = $(".main_banner").width();

    $(".main_banner>.arrow>.next").click(function() {
        $(".main_banner>.banner_frame").stop().animate({ "left": -b_width }, 700, "linear", function() {
            $(this).append($(this).find("div:first").clone());
            $(this).find("div:first").remove();
            $(this).css("left", 0);
        });
    });

    $(".main_banner>.arrow>.prev").click(function() {
        $(".main_banner>.banner_frame").css("left", -b_width);
        $(".main_banner>.banner_frame").prepend($(".main_banner>.banner_frame").find("div:last").clone());
        $(".main_banner>.banner_frame").find("div:last").remove();
        $(".main_banner>.banner_frame").stop().animate({ "left": 0 }, 700, "linear");
    });

    /* 햄버거 버튼 */
    $(".h_info>a.btn_ham").click(function(e){
        e.preventDefault();
        $("body").addClass("on")
        $("header>.menu").stop().animate({"left":"0"},300, "linear");
    });

    $(".menu>.close").click(function(e){
        e.preventDefault();
        $("body").removeClass("on")
        $("header>.menu").stop().animate({"left":"-105%"},300, "linear");
    });
}