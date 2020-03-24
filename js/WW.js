$(function(){
	var wt = $(window).width();
	var wh = $(window).height();
	
	$("div.wrap").width(wt);
	$("div.wrap").height(wh);
	
	$("html,body").stop().animate({"scrollTop":"0"},300,"linear");
	
	var s1 = $("div.wrap>.main>.start").offset().top;
	var s1f = $("div.wrap>.content>.main>.finish").offset().top;
	
    var s2 = $("div.wrap>.content>.main>.start").offset().top;
	var s2f = $("div.wrap>.content>.about>.about_t>.finish").offset().top;
	
    var s3 = $("div.wrap>.content>.about>.about_t>.start").offset().top;
	var s3f = $("div.wrap>.content>.about>.about_b>.finish").offset().top;
	
    var s4 = $("div.wrap>.content>.about>.about_b>.start").offset().top;
    var s4f = $("div.wrap>.content>.tcy_box>.typo>.finish").offset().top;
	
	var s5 = $("div.wrap>.content>.tcy_box>.typo>.start").offset().top;
    var s5f = $("div.wrap>.content>.tcy_box>.color>.finish").offset().top;
    
    var s6 = $("div.wrap>.content>.tcy_box>.color>.start").offset().top;
    var s6f = $("div.wrap>.content>.tcy_box>.icon>.finish").offset().top;
    
    var s7 = $("div.wrap>.content>.tcy_box>.icon>.start").offset().top;
    var s7f = $("div.wrap>.content>.main_page>.main_t>.finish").offset().top;
    
    var s8 = $("div.wrap>.content>.main_page>.main_t>.start").offset().top;
    var s8f = $("div.wrap>.content>.main_page>.main_b>.finish").offset().top;
    
    var s9 = $("div.wrap>.content>.main_page>.main_b>.start").offset().top;
    var s9f = $("div.wrap>.content>.weather>.wt_t>.finish").offset().top;
    
    var s10 = $("div.wrap>.content>.weather>.wt_t>.start").offset().top;
    var s10f = $("div.wrap>.content>.weather>.wt_b>.finish").offset().top;
	
	var s11 = $("div.wrap>.content>.weather>.wt_b>.start").offset().top;
	var s112 = $("div.wrap>.content>.wear>.start").offset().top;
	var s113 = $("div.wrap>.content>.wear>.start2").offset().top;
    var s11f = $("div.wrap>.content>.wear>.finish").offset().top;
	
	var s12 = $("div.wrap>.content>.wear>.start3").offset().top;
	var s12f = $("div.wrap>.content>.chat>.finish").offset().top;
	
	var s13 = $("div.wrap>.content>.chat>.start").offset().top;
	var s13f = $("div.wrap>.content>.my_page>.finish").offset().top;
	
	var s14 = $("div.wrap>.content>.my_page>.start").offset().top;
	var s14f = $("div.wrap>.content>.etc>.etc_b>.finish").offset().top;
	
	var s15 = $("div.wrap>.content>.etc>.etc_t>.start").offset().top;
	
	var s16 = $("div.wrap>.content>.etc>.etc_b>.start").offset().top;
	





	$(".top").click(function(){
		$("html,body").stop().animate({"scrollTop":"0"},300,"linear");	
	})
	
	$(window).scroll(function(){
		
		var scrollTop = $(window).scrollTop();
		
		if(scrollTop > s1){	
			$(".top").addClass("on");
		}else if(scrollTop < s1f){
			$(".top").removeClass("on")
		}
		
		if(scrollTop > s1 && scrollTop < s1f){	
			$("div.wrap>.content>.main").addClass("on");
		}else{
			$("div.wrap>.content>.main").removeClass("on");	
		}
		
		if(scrollTop > s2 && scrollTop < s2f){
			$("div.wrap>.content>.about>.about_t").addClass("on");
			$("div.wrap>.content>.about").addClass("on");
		}else{
			$("div.wrap>.content>.about>.about_t").removeClass("on");
			$("div.wrap>.content>.about").removeClass("on");
		}
		
        if(scrollTop > s3 && scrollTop < s3f){
			$("div.wrap>.content>.about>.about_b").addClass("on");
		}else{
			$("div.wrap>.content>.about>.about_b").removeClass("on");
		}
        
        if(scrollTop > s4 && scrollTop < s4f){
            $("div.wrap>.content>.tcy_box>.typo").addClass("on");
		}else{
		    $("div.wrap>.content>.tcy_box>.typo").removeClass("on");
		}
        
        if(scrollTop > s5 && scrollTop < s5f){
            $("div.wrap>.content>.tcy_box>.color").addClass("on");
		}else{
		    $("div.wrap>.content>.tcy_box>.color").removeClass("on");
		}
        
        if(scrollTop > s6 && scrollTop < s6f){
            $("div.wrap>.content>.tcy_box>.icon").addClass("on");
		}else{
		    $("div.wrap>.content>.tcy_box>.icon").removeClass("on");
		}
        
        if(scrollTop > s7 && scrollTop < s8f){
            $("div.wrap>.content>.main_page>.main_t").addClass("on");
            $("div.wrap>.content>.main_page").addClass("on");
             $("div.wrap>.content>.main_page>span.arrow").eq(0).addClass("on");
		}else{
		    $("div.wrap>.content>.main_page>.main_t").removeClass("on");
		    $("div.wrap>.content>.main_page").removeClass("on");
            $("div.wrap>.content>.main_page>span.arrow").eq(0).removeClass("on");
		}
        
        if(scrollTop > s8 && scrollTop < s8f){
            $("div.wrap>.content>.main_page>.main_b").addClass("on");
            $("div.wrap>.content>.main_page>span.arrow").eq(1).addClass("on");
            $("div.wrap>.content>.main_page>span.arrow").eq(2).addClass("on");
            $("div.wrap>.content>.main_page>span.arrow").eq(3).addClass("on");
           
		}else{
		    $("div.wrap>.content>.main_page>.main_b").removeClass("on");
            $("div.wrap>.content>.main_page>span.arrow").eq(1).removeClass("on");
            $("div.wrap>.content>.main_page>span.arrow").eq(2).removeClass("on");
            $("div.wrap>.content>.main_page>span.arrow").eq(3).removeClass("on");
            
		}
        
        if(scrollTop > s9 && scrollTop < s10f){
            $("div.wrap>.content>.weather>.wt_t").addClass("on");
            $("div.wrap>.content>.weather").addClass("on");
            $("div.wrap>.content>.weather>span.arrow").eq(0).addClass("on");   
            $("div.wrap>.content>.weather>span.arrow").eq(1).addClass("on");   
            $("div.wrap>.content>.weather>span.arrow").eq(2).addClass("on");   
            $("div.wrap>.content>.weather>span.arrow").eq(3).addClass("on");
		}else{
		    $("div.wrap>.content>.weather>.wt_t").removeClass("on");
            $("div.wrap>.content>.weather").removeClass("on");
            $("div.wrap>.content>.weather>span.arrow").eq(0).removeClass("on");   
            $("div.wrap>.content>.weather>span.arrow").eq(1).removeClass("on");   
            $("div.wrap>.content>.weather>span.arrow").eq(2).removeClass("on");   
            $("div.wrap>.content>.weather>span.arrow").eq(3).removeClass("on");
		}
        
        if(scrollTop > s10 && scrollTop < s10f){
            $("div.wrap>.content>.weather>.wt_b").addClass("on");   
            $("div.wrap>.content>.weather>span.arrow").eq(4).addClass("on");   
            $("div.wrap>.content>.weather>span.arrow").eq(5).addClass("on");   
            $("div.wrap>.content>.weather>span.arrow").eq(6).addClass("on");   
            $("div.wrap>.content>.weather>span.arrow").eq(7).addClass("on");   
		}else{
		    $("div.wrap>.content>.weather>.wt_b").removeClass("on");
            $("div.wrap>.content>.weather>span.arrow").eq(4).removeClass("on");   
            $("div.wrap>.content>.weather>span.arrow").eq(5).removeClass("on");   
            $("div.wrap>.content>.weather>span.arrow").eq(6).removeClass("on");   
            $("div.wrap>.content>.weather>span.arrow").eq(7).removeClass("on"); 
		}
		
		if(scrollTop > s11 && scrollTop < s11f){
           $("div.wrap>.content>.wear").addClass("on");      
           $("div.wrap>.content>.wear>.mockup_box01").addClass("on");      
           $("div.wrap>.content>.wear>span").eq(0).addClass("on");      
           $("div.wrap>.content>.wear>span").eq(1).addClass("on");      
		}else{
		   $("div.wrap>.content>.wear").removeClass("on");      
           $("div.wrap>.content>.wear>.mockup_box01").removeClass("on");
			$("div.wrap>.content>.wear>span").eq(0).removeClass("on");      
           $("div.wrap>.content>.wear>span").eq(1).removeClass("on"); 
		}
		
		if(scrollTop > s112 && scrollTop < s11f){
           $("div.wrap>.content>.wear>.mockup_box02").addClass("on");
		   $("div.wrap>.content>.wear>span").eq(2).addClass("on");      
           $("div.wrap>.content>.wear>span").eq(3).addClass("on");  
		}else{     
           $("div.wrap>.content>.wear>.mockup_box02").removeClass("on"); 
			$("div.wrap>.content>.wear>span").eq(2).removeClass("on");      
           $("div.wrap>.content>.wear>span").eq(3).removeClass("on"); 
		}
		
		if(scrollTop > s113 && scrollTop < s11f){
           $("div.wrap>.content>.wear>.mockup_box03").addClass("on");
		   $("div.wrap>.content>.wear>span").eq(4).addClass("on");  
		}else{     
           $("div.wrap>.content>.wear>.mockup_box03").removeClass("on"); 
			$("div.wrap>.content>.wear>span").eq(4).removeClass("on"); 
		}
		
		if(scrollTop > s12 && scrollTop < s12f){
        	$("div.wrap>.content>.chat").addClass("on");  
		}else{     
           $("div.wrap>.content>.chat").removeClass("on"); 
			
		}
		
		if(scrollTop > s13 && scrollTop < s13f){
        	$("div.wrap>.content>.my_page").addClass("on");  
		}else{     
           $("div.wrap>.content>.my_page").removeClass("on"); 
			
		}
		
		if(scrollTop > s14 && scrollTop < s14f){
        	$("div.wrap>.content>.etc").addClass("on");  
        	$("div.wrap>.content>.etc>.etc_t").addClass("on");  
		}else{     
           $("div.wrap>.content>.etc").removeClass("on");  
        	$("div.wrap>.content>.etc>.etc_t").removeClass("on");   
		}
		
		if(scrollTop > s15 && scrollTop < s14f){  
        	$("div.wrap>.content>.etc>.etc_b").addClass("on");  
		}else{
        	$("div.wrap>.content>.etc>.etc_b").removeClass("on");   
		}
		
		if(scrollTop > s16){  
        	$("div.wrap>.content>.last").addClass("on");  
		}else{
        	$("div.wrap>.content>.last").removeClass("on");   
		}
		
	})

	$(window).resize(function(){

		var wt = $(window).width();
		var wh = $(window).height();

		var wt = $(window).width();
		var wh = $(window).height();
	

		var s1 = $("div.wrap>.main>.start").offset().top;
		var s1f = $("div.wrap>.content>.main>.finish").offset().top;
		
		var s2 = $("div.wrap>.content>.main>.start").offset().top;
		var s2f = $("div.wrap>.content>.about>.about_t>.finish").offset().top;
		
		var s3 = $("div.wrap>.content>.about>.about_t>.start").offset().top;
		var s3f = $("div.wrap>.content>.about>.about_b>.finish").offset().top;
		
		var s4 = $("div.wrap>.content>.about>.about_b>.start").offset().top;
		var s4f = $("div.wrap>.content>.tcy_box>.typo>.finish").offset().top;
		
		var s5 = $("div.wrap>.content>.tcy_box>.typo>.start").offset().top;
		var s5f = $("div.wrap>.content>.tcy_box>.color>.finish").offset().top;
		
		var s6 = $("div.wrap>.content>.tcy_box>.color>.start").offset().top;
		var s6f = $("div.wrap>.content>.tcy_box>.icon>.finish").offset().top;
		
		var s7 = $("div.wrap>.content>.tcy_box>.icon>.start").offset().top;
		var s7f = $("div.wrap>.content>.main_page>.main_t>.finish").offset().top;
		
		var s8 = $("div.wrap>.content>.main_page>.main_t>.start").offset().top;
		var s8f = $("div.wrap>.content>.main_page>.main_b>.finish").offset().top;
		
		var s9 = $("div.wrap>.content>.main_page>.main_b>.start").offset().top;
		var s9f = $("div.wrap>.content>.weather>.wt_t>.finish").offset().top;
		
		var s10 = $("div.wrap>.content>.weather>.wt_t>.start").offset().top;
		var s10f = $("div.wrap>.content>.weather>.wt_b>.finish").offset().top;
		
		var s11 = $("div.wrap>.content>.weather>.wt_b>.start").offset().top;
		var s112 = $("div.wrap>.content>.wear>.start").offset().top;
		var s113 = $("div.wrap>.content>.wear>.start2").offset().top;
		var s11f = $("div.wrap>.content>.wear>.finish").offset().top;
		
		var s12 = $("div.wrap>.content>.wear>.start3").offset().top;
		var s12f = $("div.wrap>.content>.chat>.finish").offset().top;
		
		var s13 = $("div.wrap>.content>.chat>.start").offset().top;
		var s13f = $("div.wrap>.content>.my_page>.finish").offset().top;
		
		var s14 = $("div.wrap>.content>.my_page>.start").offset().top;
		var s14f = $("div.wrap>.content>.etc>.etc_b>.finish").offset().top;
		
		var s15 = $("div.wrap>.content>.etc>.etc_t>.start").offset().top;
		
		var s16 = $("div.wrap>.content>.etc>.etc_b>.start").offset().top;

		$(".top").click(function(){
			$("html,body").stop().animate({"scrollTop":"0"},300,"linear");	
		})
		
		$(window).scroll(function(){
			
			var scrollTop = $(window).scrollTop();
			
			if(scrollTop > s1){	
				$(".top").addClass("on");
			}else if(scrollTop < s1f){
				$(".top").removeClass("on")
			}
			
			if(scrollTop > s1 && scrollTop < s1f){	
				$("div.wrap>.content>.main").addClass("on");
			}else{
				$("div.wrap>.content>.main").removeClass("on");	
			}
			
			if(scrollTop > s2 && scrollTop < s2f){
				$("div.wrap>.content>.about>.about_t").addClass("on");
				$("div.wrap>.content>.about").addClass("on");
			}else{
				$("div.wrap>.content>.about>.about_t").removeClass("on");
				$("div.wrap>.content>.about").removeClass("on");
			}
			
			if(scrollTop > s3 && scrollTop < s3f){
				$("div.wrap>.content>.about>.about_b").addClass("on");
			}else{
				$("div.wrap>.content>.about>.about_b").removeClass("on");
			}
			
			if(scrollTop > s4 && scrollTop < s4f){
				$("div.wrap>.content>.tcy_box>.typo").addClass("on");
			}else{
				$("div.wrap>.content>.tcy_box>.typo").removeClass("on");
			}
			
			if(scrollTop > s5 && scrollTop < s5f){
				$("div.wrap>.content>.tcy_box>.color").addClass("on");
			}else{
				$("div.wrap>.content>.tcy_box>.color").removeClass("on");
			}
			
			if(scrollTop > s6 && scrollTop < s6f){
				$("div.wrap>.content>.tcy_box>.icon").addClass("on");
			}else{
				$("div.wrap>.content>.tcy_box>.icon").removeClass("on");
			}
			
			if(scrollTop > s7 && scrollTop < s8f){
				$("div.wrap>.content>.main_page>.main_t").addClass("on");
				$("div.wrap>.content>.main_page").addClass("on");
				 $("div.wrap>.content>.main_page>span.arrow").eq(0).addClass("on");
			}else{
				$("div.wrap>.content>.main_page>.main_t").removeClass("on");
				$("div.wrap>.content>.main_page").removeClass("on");
				$("div.wrap>.content>.main_page>span.arrow").eq(0).removeClass("on");
			}
			
			if(scrollTop > s8 && scrollTop < s8f){
				$("div.wrap>.content>.main_page>.main_b").addClass("on");
				$("div.wrap>.content>.main_page>span.arrow").eq(1).addClass("on");
				$("div.wrap>.content>.main_page>span.arrow").eq(2).addClass("on");
				$("div.wrap>.content>.main_page>span.arrow").eq(3).addClass("on");
			   
			}else{
				$("div.wrap>.content>.main_page>.main_b").removeClass("on");
				$("div.wrap>.content>.main_page>span.arrow").eq(1).removeClass("on");
				$("div.wrap>.content>.main_page>span.arrow").eq(2).removeClass("on");
				$("div.wrap>.content>.main_page>span.arrow").eq(3).removeClass("on");
				
			}
			
			if(scrollTop > s9 && scrollTop < s10f){
				$("div.wrap>.content>.weather>.wt_t").addClass("on");
				$("div.wrap>.content>.weather").addClass("on");
				$("div.wrap>.content>.weather>span.arrow").eq(0).addClass("on");   
				$("div.wrap>.content>.weather>span.arrow").eq(1).addClass("on");   
				$("div.wrap>.content>.weather>span.arrow").eq(2).addClass("on");   
				$("div.wrap>.content>.weather>span.arrow").eq(3).addClass("on");
			}else{
				$("div.wrap>.content>.weather>.wt_t").removeClass("on");
				$("div.wrap>.content>.weather").removeClass("on");
				$("div.wrap>.content>.weather>span.arrow").eq(0).removeClass("on");   
				$("div.wrap>.content>.weather>span.arrow").eq(1).removeClass("on");   
				$("div.wrap>.content>.weather>span.arrow").eq(2).removeClass("on");   
				$("div.wrap>.content>.weather>span.arrow").eq(3).removeClass("on");
			}
			
			if(scrollTop > s10 && scrollTop < s10f){
				$("div.wrap>.content>.weather>.wt_b").addClass("on");   
				$("div.wrap>.content>.weather>span.arrow").eq(4).addClass("on");   
				$("div.wrap>.content>.weather>span.arrow").eq(5).addClass("on");   
				$("div.wrap>.content>.weather>span.arrow").eq(6).addClass("on");   
				$("div.wrap>.content>.weather>span.arrow").eq(7).addClass("on");   
			}else{
				$("div.wrap>.content>.weather>.wt_b").removeClass("on");
				$("div.wrap>.content>.weather>span.arrow").eq(4).removeClass("on");   
				$("div.wrap>.content>.weather>span.arrow").eq(5).removeClass("on");   
				$("div.wrap>.content>.weather>span.arrow").eq(6).removeClass("on");   
				$("div.wrap>.content>.weather>span.arrow").eq(7).removeClass("on"); 
			}
			
			if(scrollTop > s11 && scrollTop < s11f){
			   $("div.wrap>.content>.wear").addClass("on");      
			   $("div.wrap>.content>.wear>.mockup_box01").addClass("on");      
			   $("div.wrap>.content>.wear>span").eq(0).addClass("on");      
			   $("div.wrap>.content>.wear>span").eq(1).addClass("on");      
			}else{
			   $("div.wrap>.content>.wear").removeClass("on");      
			   $("div.wrap>.content>.wear>.mockup_box01").removeClass("on");
				$("div.wrap>.content>.wear>span").eq(0).removeClass("on");      
			   $("div.wrap>.content>.wear>span").eq(1).removeClass("on"); 
			}
			
			if(scrollTop > s112 && scrollTop < s11f){
			   $("div.wrap>.content>.wear>.mockup_box02").addClass("on");
			   $("div.wrap>.content>.wear>span").eq(2).addClass("on");      
			   $("div.wrap>.content>.wear>span").eq(3).addClass("on");  
			}else{     
			   $("div.wrap>.content>.wear>.mockup_box02").removeClass("on"); 
				$("div.wrap>.content>.wear>span").eq(2).removeClass("on");      
			   $("div.wrap>.content>.wear>span").eq(3).removeClass("on"); 
			}
			
			if(scrollTop > s113 && scrollTop < s11f){
			   $("div.wrap>.content>.wear>.mockup_box03").addClass("on");
			   $("div.wrap>.content>.wear>span").eq(4).addClass("on");  
			}else{     
			   $("div.wrap>.content>.wear>.mockup_box03").removeClass("on"); 
				$("div.wrap>.content>.wear>span").eq(4).removeClass("on"); 
			}
			
			if(scrollTop > s12 && scrollTop < s12f){
				$("div.wrap>.content>.chat").addClass("on");  
			}else{     
			   $("div.wrap>.content>.chat").removeClass("on"); 
				
			}
			
			if(scrollTop > s13 && scrollTop < s13f){
				$("div.wrap>.content>.my_page").addClass("on");  
			}else{     
			   $("div.wrap>.content>.my_page").removeClass("on"); 
				
			}
			
			if(scrollTop > s14 && scrollTop < s14f){
				$("div.wrap>.content>.etc").addClass("on");  
				$("div.wrap>.content>.etc>.etc_t").addClass("on");  
			}else{     
			   $("div.wrap>.content>.etc").removeClass("on");  
				$("div.wrap>.content>.etc>.etc_t").removeClass("on");   
			}
			
			if(scrollTop > s15 && scrollTop < s14f){  
				$("div.wrap>.content>.etc>.etc_b").addClass("on");  
			}else{
				$("div.wrap>.content>.etc>.etc_b").removeClass("on");   
			}
			
			if(scrollTop > s16){  
				$("div.wrap>.content>.last").addClass("on");  
			}else{
				$("div.wrap>.content>.last").removeClass("on");   
			}
			
		})
	})
})