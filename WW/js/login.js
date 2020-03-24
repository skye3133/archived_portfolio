$(function(){
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
   /* $("section.sign>form>fieldset>input[type='radio']").click(function(){
        
        $("div.agree").addClass("on");
    })*/
     $("section.sign>form>fieldset>.agree").click(function(){
        
        $("div.agree").addClass("on");
    })
    
    
});