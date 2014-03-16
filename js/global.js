$( document ).ready(function() {
    
    if ( $(window).width() > 767) {     
     
	    // set min-height on sections
	    
	    var wheight = $(window).height();
	    $('section').css('min-height', wheight);
	    
	    $(window).resize(function(){	    
		    var wheight = $(window).height();
		    $('section').css('min-height', wheight);
	    })
	    
	    // centering tooltips over social media links
	    
	   	$( window ).load(function() {
	
			$( 'footer a' ).each(function() {
		    	  var tip = $(this).children('span');
				  var buttonw = $(this).width();
				  var tipw = tip.width();
				  
				  $(tip).css('left', (buttonw/2)-(tipw/2) );
			});
		
		});	    
    
    }
     


    // navigation scrolling... been using this for a while, forget where I found it.
    
    $(".scroll").click(function(event){
    	//prevent the default action for the click event
    	event.preventDefault();
    
    	//get the full url - like mysitecom/index.htm#home
    	var full_url = this.href;
    
    	//split the url by # and get the anchor target name - home in mysitecom/index.htm#home
    	var parts = full_url.split("#");
    	var trgt = parts[1];
    
    	//get the top offset of the target anchor
    	var target_offset = $("#"+trgt).offset();
    	var target_top = target_offset.top;
    
    	//goto that anchor by setting the body scroll top to anchor top
    	$('html, body').animate({scrollTop:target_top}, 500);
    	
    });		
    
});
