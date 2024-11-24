
var stacks = {};
stacks.stacks_in_4483472 = {};
stacks.stacks_in_4483472 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;// Set Language for Document
document.documentElement.lang = "en";

$(document).ready(function(){
  

  
});

$.fn.elementRealHeight = function () {
   $clone = this.clone()
       .css("visibility","hidden")
       .appendTo($('body'));
   var $height = $clone.outerHeight();
   $clone.remove();
   return $height;
 };

 $.fn.elementRealWidth = function () {
    $clone = this.clone()
        .css("visibility","hidden")
        .appendTo($('body'));
    var $width = $clone.outerWidth();
    $clone.remove();
    return $width;
  };


  // Handles offsets for anchor tags
  // (function(document, history, location) {
  //   var HISTORY_SUPPORT = !!(history && history.pushState);
  //
  //   var anchorScrolls = {
  //     ANCHOR_REGEX: /^#[^ ]+$/,
  //     OFFSET_HEIGHT_PX: 0,
  //
  //     /**
  //      * Establish events, and fix initial scroll position if a hash is provided.
  //      */
  //     init: function() {
  //       this.scrollToCurrent();
  //       window.addEventListener('hashchange', this.scrollToCurrent.bind(this));
  //       document.body.addEventListener('click', this.delegateAnchors.bind(this));
  //     },
  //
  //     /**
  //      * Return the offset amount to deduct from the normal scroll position.
  //      * Modify as appropriate to allow for dynamic calculations
  //      */
  //     getFixedOffset: function() {
  //       return this.OFFSET_HEIGHT_PX;
  //     },
  //
  //     /**
  //      * If the provided href is an anchor which resolves to an element on the
  //      * page, scroll to it.
  //      * @param  {String} href
  //      * @return {Boolean} - Was the href an anchor.
  //      */
  //     scrollIfAnchor: function(href, pushToHistory) {
  //       var match, rect, anchorOffset;
  //
  //       if(!this.ANCHOR_REGEX.test(href)) {
  //         return false;
  //       }
  //
  //       match = document.getElementById(href.slice(1));
  //
  //       if(match) {
  //         rect = match.getBoundingClientRect();
  //         anchorOffset = window.pageYOffset + rect.top - this.getFixedOffset();
  //         window.scrollTo(window.pageXOffset, anchorOffset);
  //
  //         // Add the state to history as-per normal anchor links
  //         if(HISTORY_SUPPORT && pushToHistory) {
  //           history.pushState({}, document.title, location.pathname + href);
  //         }
  //       }
  //
  //       return !!match;
  //     },
  //
  //     /**
  //      * Attempt to scroll to the current location's hash.
  //      */
  //     scrollToCurrent: function() {
  //       this.scrollIfAnchor(window.location.hash);
  //     },
  //
  //     /**
  //      * If the click event's target was an anchor, fix the scroll position.
  //      */
  //     delegateAnchors: function(e) {
  //       var elem = e.target;
  //
  //       if(
  //         elem.nodeName === 'A' &&
  //         this.scrollIfAnchor(elem.getAttribute('href'), true)
  //       ) {
  //         e.preventDefault();
  //       }
  //     }
  //   };
  //
  //   window.addEventListener(
  //     'DOMContentLoaded', anchorScrolls.init.bind(anchorScrolls)
  //   );
  // })(window.document, window.history, window.location);

return stack;})(stacks.stacks_in_4483472);
stacks.stacks_in_4483473 = {};
stacks.stacks_in_4483473 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;function foundry_navigation_bar() {
	// Removes overflow hidden so dropdowns can show as they should.
	$('#stacks_in_4483473 .navigation_bar ').parentsUntil('.stacks_top').css({'overflow' : 'visible'});
	$('.stacks_top').css({'overflow' : 'visible'});

	// Unwraps the link from dividers and small subheaders
	$('#stacks_in_4483473 .navigation_bar div.nav_divider, #stacks_in_4483473 .navigation_bar .small_hdr').unwrap();



	// Removes href attributes from parent navigation links.
	// This could be offered as an option possibly.
	// $('#stacks_in_4483473 .navigation_bar .navigation_container > ul > li > a.parent').removeAttr("href").addClass('closed');
	$('#stacks_in_4483473 .navigation_bar .navigation_container > ul > li > a.parent').attr("href", "#").addClass('closed');

	//
	// Handles displaying drop down navigation.
	//
	$('#stacks_in_4483473 .navigation_bar .navigation_container ul').find("li").each(function() {
			if ($(this).find("ul:first").length > 0) {

					$(this).find('a.parent').click(function() {

						event.preventDefault();

							
							//
							// Close all navigation drop downs when another is opened.
							//
							$("#stacks_in_4483473 .navigation_bar .navigation_container ul li").removeClass('clicked');

							$(this).parent().addClass('clicked');

							$("#stacks_in_4483473 .navigation_bar .navigation_container ul li:not(.clicked) a.open").parent().find('ul:first').stop(true, true).slideUp(200);


							$("#stacks_in_4483473 .navigation_bar .navigation_container ul li").find("> a").addClass('closed').removeClass('open');
							

							//
							// Show child-level menu items
							//
							$(this).parent().find("ul:first").stop(true, true).animate({height: 'toggle' , opacity: 'toggle'}, 200);

							$(this).parent().find("> a").toggleClass('closed').toggleClass('open');
					});
			}
	});


	//
	// Handles showing and hiding the navigation when the navigation toggle is clicked or tapped.
	//
	$('#stacks_in_4483473_mobile_navigation_toggle').click(function(){
		$('#stacks_in_4483473 .navigation_bar .navigation_container > ul').slideToggle(175, function(){});
	});

	//
	// Handles pairing navigation with parent banner
	//
	
}




	$(document).ready(function(){
		foundry_navigation_bar();
	});



return stack;})(stacks.stacks_in_4483473);
stacks.stacks_in_4483474 = {};
stacks.stacks_in_4483474 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;$(document).ready(function(){






	// Load parallax effect
	

});


// $(window).load(function(){
// });

return stack;})(stacks.stacks_in_4483474);
stacks.stacks_in_4485425 = {};
stacks.stacks_in_4485425 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;$(document).ready(function(){
	
		$('#stacks_in_4485425 > .container').parentsUntil('.stacks_top').css('overflow', 'visible');
		$('.stacks_top').css({'overflow' : 'visible'});
	
});

return stack;})(stacks.stacks_in_4485425);
stacks.stacks_in_4485426 = {};
stacks.stacks_in_4485426 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;$(document).ready(function() {
  $('#stacks_in_4485426 .alert a').addClass('alert-link');
});


return stack;})(stacks.stacks_in_4485426);
stacks.stacks_in_4485373 = {};
stacks.stacks_in_4485373 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;$(document).ready(function(){
	
		$('#stacks_in_4485373 > .container').parentsUntil('.stacks_top').css('overflow', 'visible');
		$('.stacks_top').css({'overflow' : 'visible'});
	
});

return stack;})(stacks.stacks_in_4485373);
stacks.stacks_in_4485331 = {};
stacks.stacks_in_4485331 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;$(document).ready(function(){
	
		$('#stacks_in_4485331 > .container').parentsUntil('.stacks_top').css('overflow', 'visible');
		$('.stacks_top').css({'overflow' : 'visible'});
	
});

return stack;})(stacks.stacks_in_4485331);
stacks.stacks_in_4485337 = {};
stacks.stacks_in_4485337 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;$(document).ready(function(){
  
});

return stack;})(stacks.stacks_in_4485337);
stacks.stacks_in_4485419 = {};
stacks.stacks_in_4485419 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;$(document).ready(function(){
	
		$('#stacks_in_4485419 > .container').parentsUntil('.stacks_top').css('overflow', 'visible');
		$('.stacks_top').css({'overflow' : 'visible'});
	
});

return stack;})(stacks.stacks_in_4485419);
stacks.stacks_in_4485401 = {};
stacks.stacks_in_4485401 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;$(document).ready(function(){
	
		$('#stacks_in_4485401 > .container').parentsUntil('.stacks_top').css('overflow', 'visible');
		$('.stacks_top').css({'overflow' : 'visible'});
	
});

return stack;})(stacks.stacks_in_4485401);
stacks.stacks_in_4483650 = {};
stacks.stacks_in_4483650 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;$(document).ready(function(){
	
		$('#stacks_in_4483650 > .container').parentsUntil('.stacks_top').css('overflow', 'visible');
		$('.stacks_top').css({'overflow' : 'visible'});
	
});

return stack;})(stacks.stacks_in_4483650);
stacks.stacks_in_4483649 = {};
stacks.stacks_in_4483649 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;$(document).ready(function() {

	

	

	

	


});

return stack;})(stacks.stacks_in_4483649);