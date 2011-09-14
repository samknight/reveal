(function( $ ){
  $.fn.reveal = function(options) {
		var defaults = {
			activeClass: "active",
			loadFirst: false,
			target: "#target",
		  trigger: ".trigger",
			triggerText: ".detail"
		};
		
		var options = $.extend({}, defaults, options);
		
		// Hide the text, Although this should be specified from css before plugin is called for speed and for fallback when used on a non javascript browser
		$(options.triggerText).hide();
		
		// Complete the initialise method
		if(options.loadFirst == true) {
			var content = $(options.trigger).filter(":first").find(options.triggerText).html();
			triggerTransition(content);
			$(options.trigger).filter(":first").addClass(options.activeClass);
		}
		
		$(options.trigger).mouseenter(function(){
			var content = $(this).find(options.triggerText).html();
			if ($(options.target).html() != content) {
				$(options.trigger).each(function(){
					$(this).removeClass(options.activeClass);
				});
			
				triggerTransition(content);
				$(this).addClass(options.activeClass);
			}
		});
		
		//Gather text from the trigger and insert into the target area
		function triggerTransition(content) {	
			$(options.target).animate({opacity: 0}, 100, function(){
				$(options.target).html(content);
				$(options.target).animate({opacity: 1}, 100);
			});
		};
  };	
})( jQuery );
