// 'mirage' is the global object for mirage theme functions
var mirage = {};
// reduce potential conflicts with other scripts on the page
mirage.jQuery = jQuery.noConflict(true);
var $mirage = mirage.jQuery;
// Create unique object and namespace for theme functions
mirage.themeFunctions = {};
// Define a closure
mirage.themeFunctions = (function() {
    // When jQuery is used it will be available as $ and jQuery but only
    // inside the closure.
    var jQuery = mirage.jQuery;
    var $ = jQuery;
	var $mirage = jQuery.noConflict();
	
	function mobileViewport(){
		function extractUrl(input){ return input.replace(/"/g,"").replace(/url\(|\)$/ig, ""); }// remove quotes and wrapping url()
		if(((navigator.userAgent.match(/iPhone/i))||(navigator.userAgent.match(/iPod/i))||(navigator.userAgent.match(/Android/))||(navigator.userAgent.match(/webOS/))) && ($mirage('#mobileMenuTab').is(':visible'))){
			$mirage('head').append('<meta name = "viewport" content = "width=device-width; initial-scale=1.0; maximum-scale=1.0;" />');
			$mirage('#headerImage').append('<img src="' + extractUrl($mirage('#headerImage').css("background-image")) + '" class="iPhoneHeaderImage"/>');
		}
	}
	$mirage(function(){ mobileViewport(); });
	
	$mirage(document).ready(function() {
		if(((navigator.userAgent.match(/iPhone/i))||(navigator.userAgent.match(/iPod/i))||(navigator.userAgent.match(/Android/))||(navigator.userAgent.match(/webOS/))) && ($mirage('#mobileMenuTab').is(':visible'))){
			iPhoneAdjustments();
			mobileMenu();
			mobileImageResize();
		}
		else
		{
		 	mirageMenu();
		 	iPhoneDesktopAdjustments();
		}
		if( navigator.userAgent.match(/iPad/i) ) {
			iPadAdjustments();
		}
		extraContent();
	});
	
	/* Simple function to improve browsing by mobile devices. 
	 * Resizes images too large for the iPhone.
	 * Copyright 2009-2011 Jonathan Head of NimbleHost.com http://themes.nimblehost.com
	 */
	function mobileImageResize() {
		$mirage('.imageStyle').each(function(){
			if( window.orientation == 0 ){
				if( ($mirage(this).width() > 280) ) {
					$mirage(this).width(280);
				}
			} else if ( (window.orientation == 90) || (window.orientation == -90) ) {
				if( ($mirage(this).width() > 440) ) {
					$mirage(this).width(440);
				}
			}
		});
		$mirage('.logo img').each(function(){
			if( window.orientation == 0 ){
				if( ($mirage(this).width() > 300) ) {
					$mirage(this).width(300);
				}
			} else if ( (window.orientation == 90) || (window.orientation == -90) ) {
				if( ($mirage(this).width() > 460) ) {
					$mirage(this).width(460);
				}
			}
		});
		
		$mirage('.iPhoneHeaderImage').each(function(){
			if( window.orientation == 0 ){
				$mirage(this).width(320);
			} else if ( (window.orientation == 90) || (window.orientation == -90) ) {
				$mirage(this).width(480);
			}
		});
	}
	
	function iPhoneAdjustments(){
		var ddMenuTextColor = $mirage('.menu ul ul a').css('color');
		var ddMenuBGColor = $mirage('.menu ul ul').css('background-color');
		var ddMenuBottomBorder = '1px dotted ' + $mirage('.menu ul ul a').css('border-bottom-color');
		var mainMenuCurrentText = $mirage('.menu ul #current').css('color');
		var mainMenuCurrentBG = $mirage('.menu ul #current').css('background-color');
		var mainMenuAncestorText = $mirage('.menu ul .currentAncestor').css('color');
		var mainMenuAncestorBG = $mirage('.menu ul .currentAncestor').css('background-color');
		var ddMenuCurrentText = $mirage('.menu ul ul #current').css('color');
		var ddMenuCurrentBG = $mirage('.menu ul ul #current').css('background-color');
		var ddMenuAncestorText = $mirage('.menu ul ul .currentAncestor').css('color');
		var ddMenuAncestorBG = $mirage('.menu ul ul .currentAncestor').css('background-color');
		$mirage('.menu ul a').css({backgroundColor: ddMenuBGColor, color: ddMenuTextColor, borderBottom: ddMenuBottomBorder});
		$mirage('.menu ul #current, .menu ul #current:hover').css({backgroundColor: mainMenuCurrentBG, color: mainMenuCurrentText});
		$mirage('.menu ul .currentAncestor, .menu ul .currentAncestor:hover').css({backgroundColor: mainMenuAncestorBG, color: mainMenuAncestorText});
		$mirage('.menu ul ul #current, .menu ul ul #current:hover').css({backgroundColor: ddMenuCurrentBG, color: ddMenuCurrentText});
		$mirage('.menu ul ul .currentAncestor, .menu ul ul .currentAncestor:hover').css({backgroundColor: ddMenuAncestorBG, color: ddMenuAncestorText});
	}
	
	function mirageMenu() {
	 	var mirageMenuConfig = {
			sensitivity: 3, // number = sensitivity threshold (must be 1 or higher)    
			interval: 30, // number = milliseconds for onMouseOver polling interval    
			over: revealMainMenuChildren, // function = onMouseOver callback (REQUIRED)    
			timeout: 500, // number = milliseconds delay before onMouseOut    
			out: hideMainMenuChildren
			};
		
		function revealMainMenuChildren(){
			$mirage(this).find("ul:first").css({visibility: "visible",display: "none"}).slideDown(300);//show(300);
		}
		
		function hideMainMenuChildren(){
			$mirage(this).find("ul:first").fadeOut(300);
		}
	 	
	 	$mirage(".menu ul ul").parent().addClass("ddarrow");
	 	$mirage(".menu ul ul").parent().append("<span></span>");
	 	$mirage(".menu ul ul").css({display: "none"}); //Opera fix
		$mirage(".menu ul li").hoverIntent(mirageMenuConfig); 
	}
	
	function mobileMenu() {
		$mirage('#mobileMenuTab, #hideMenu').click(function () {
			$mirage('#menuContainer').slideToggle('medium', function() {
				if ( $mirage('#menuContainer').is(':visible') ) {
					$mirage('#mobileMenuTab').animate({backgroundPosition: '0px 0px'}, 0);
				} else {
					$mirage('#mobileMenuTab').animate({backgroundPosition: '0px -50px'}, 0);
				}
			});
		});
	}
	
	function iPadAdjustments() {
		if ( $mirage('#topContainer').width() > '700' ) {
			var menuContainerOffset = $mirage('#menuContainer').offset();
			if ( window.orientation == 0 ) {
				$mirage('#topContainer, #menuContainer, #menuShadow, #midContainer, #EC6Wrapper, #bottomContainer').css({'width': '92%'});
				$mirage('#navigation, #headerImageLower, #breadcrumbcontainer').css({width: '100%'});
				if (menuContainerOffset.left == 0 ) { $mirage('#navigation').css({'width': '92%','margin': '0 auto'}); }
				$mirage('#EC1Wrapper').css({'width': '96%'});
				$mirage('#EC1TabWrapper').css({'width': '92%'});
				$mirage('#extraContainer1').css({'width': '90%'});
			} else if ( (window.orientation == 90) || (window.orientation == -90) ) {
				$mirage('#topContainer, #menuContainer, #menuShadow, #midContainer, #EC6Wrapper, #bottomContainer').css({'width': '90%'});
				$mirage('#navigation, #headerImageLower, #breadcrumbcontainer').css({width: '100%'});
				if (menuContainerOffset.left == 0 ) { $mirage('#navigation').css({'width': '90%','margin': '0 auto'}); }
				$mirage('#EC1Wrapper').css({'width': '94%'});
				$mirage('#EC1TabWrapper').css({'width': '90%'});
				$mirage('#extraContainer1').css({'width': '88%'});
			}
		}
	}
	
	function iPhoneDesktopAdjustments() {
		if(((navigator.userAgent.match(/iPhone/i))||(navigator.userAgent.match(/iPod/i))||(navigator.userAgent.match(/Android/))||(navigator.userAgent.match(/webOS/)))){
			mirageMenu();
		}
	}
	
	/* ExtraContent r1.3 02-23-09 12:33 */
	
	function extraContent() {
		var extraContent =  (function() {
			var ecValue = 10;
			for (i=1;i<=ecValue;i++)
			{
				$mirage('#myExtraContent'+i+' script').remove();
				$mirage('#myExtraContent'+i).appendTo('#extraContainer'+i).show(0);
			}
		})();
		
		$mirage('#ECTabText').appendTo('#EC1Tab');
		$mirage('#ECcloseButton').appendTo('#closeButton');
		
		var ec1WrapperPosition = parseInt($mirage('#EC1WrapperContainer').css('top'));
		
		$mirage('#EC1Tab, #closeButton').click(function () {
			if( parseInt($mirage('#EC1WrapperContainer').css('top')) < 0) {
				$mirage('#EC1WrapperContainer').delay(200).animate({top: 0}, 1000, 'easeOutQuint');
			} else {
				$mirage('#EC1WrapperContainer').animate({top: ec1WrapperPosition}, 800, 'easeInQuint');
			}
		});
		
		var ec1buttonWidth = $mirage('#closeButton').width();
		var ec1width = $mirage('#EC1Wrapper').width();
		var ec1buttonPosition = (ec1width - ec1buttonWidth) / 2;
		$mirage('#closeButton').css({right: ec1buttonPosition + 'px'});
	}
	
	/*
	 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
	 *
	 * Uses the built in easing capabilities added In jQuery 1.1
	 * to offer multiple easing options
	 *
	 * TERMS OF USE - jQuery Easing
	 * 
	 * Open source under the BSD License. 
	 * 
	 * Copyright å© 2008 George McGinley Smith
	 * All rights reserved.
	 * 
	 * Redistribution and use in source and binary forms, with or without modification, 
	 * are permitted provided that the following conditions are met:
	 * 
	 * Redistributions of source code must retain the above copyright notice, this list of 
	 * conditions and the following disclaimer.
	 * Redistributions in binary form must reproduce the above copyright notice, this list 
	 * of conditions and the following disclaimer in the documentation and/or other materials 
	 * provided with the distribution.
	 * 
	 * Neither the name of the author nor the names of contributors may be used to endorse 
	 * or promote products derived from this software without specific prior written permission.
	 * 
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
	 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
	 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
	 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
	 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
	 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
	 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
	 * OF THE POSSIBILITY OF SUCH DAMAGE. 
	 *
	*/
	
	// t: current time, b: begInnIng value, c: change In value, d: duration
	jQuery.easing['jswing'] = jQuery.easing['swing'];
	
	jQuery.extend( jQuery.easing,
	{
		def: 'easeOutQuad',
		swing: function (x, t, b, c, d) {
			//alert(jQuery.easing.default);
			return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
		},
		easeInQuad: function (x, t, b, c, d) {
			return c*(t/=d)*t + b;
		},
		easeOutQuad: function (x, t, b, c, d) {
			return -c *(t/=d)*(t-2) + b;
		},
		easeInOutQuad: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) return c/2*t*t + b;
			return -c/2 * ((--t)*(t-2) - 1) + b;
		},
		easeInCubic: function (x, t, b, c, d) {
			return c*(t/=d)*t*t + b;
		},
		easeOutCubic: function (x, t, b, c, d) {
			return c*((t=t/d-1)*t*t + 1) + b;
		},
		easeInOutCubic: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) return c/2*t*t*t + b;
			return c/2*((t-=2)*t*t + 2) + b;
		},
		easeInQuart: function (x, t, b, c, d) {
			return c*(t/=d)*t*t*t + b;
		},
		easeOutQuart: function (x, t, b, c, d) {
			return -c * ((t=t/d-1)*t*t*t - 1) + b;
		},
		easeInOutQuart: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
			return -c/2 * ((t-=2)*t*t*t - 2) + b;
		},
		easeInQuint: function (x, t, b, c, d) {
			return c*(t/=d)*t*t*t*t + b;
		},
		easeOutQuint: function (x, t, b, c, d) {
			return c*((t=t/d-1)*t*t*t*t + 1) + b;
		},
		easeInOutQuint: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
			return c/2*((t-=2)*t*t*t*t + 2) + b;
		},
		easeInSine: function (x, t, b, c, d) {
			return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
		},
		easeOutSine: function (x, t, b, c, d) {
			return c * Math.sin(t/d * (Math.PI/2)) + b;
		},
		easeInOutSine: function (x, t, b, c, d) {
			return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
		},
		easeInExpo: function (x, t, b, c, d) {
			return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
		},
		easeOutExpo: function (x, t, b, c, d) {
			return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
		},
		easeInOutExpo: function (x, t, b, c, d) {
			if (t==0) return b;
			if (t==d) return b+c;
			if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
			return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
		},
		easeInCirc: function (x, t, b, c, d) {
			return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
		},
		easeOutCirc: function (x, t, b, c, d) {
			return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
		},
		easeInOutCirc: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
			return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
		},
		easeInElastic: function (x, t, b, c, d) {
			var s=1.70158;var p=0;var a=c;
			if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
			if (a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		},
		easeOutElastic: function (x, t, b, c, d) {
			var s=1.70158;var p=0;var a=c;
			if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
			if (a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
		},
		easeInOutElastic: function (x, t, b, c, d) {
			var s=1.70158;var p=0;var a=c;
			if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
			if (a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
			return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
		},
		easeInBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			return c*(t/=d)*t*((s+1)*t - s) + b;
		},
		easeOutBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
		},
		easeInOutBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158; 
			if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
			return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
		},
		easeInBounce: function (x, t, b, c, d) {
			return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
		},
		easeOutBounce: function (x, t, b, c, d) {
			if ((t/=d) < (1/2.75)) {
				return c*(7.5625*t*t) + b;
			} else if (t < (2/2.75)) {
				return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
			} else if (t < (2.5/2.75)) {
				return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
			} else {
				return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
			}
		},
		easeInOutBounce: function (x, t, b, c, d) {
			if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
			return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
		}
	});
	/**
	* hoverIntent r5 // 2007.03.27 // jQuery 1.1.2+
	* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
	* 
	* @param  f  onMouseOver function || An object with configuration options
	* @param  g  onMouseOut function  || Nothing (use configuration options object)
	* @author    Brian Cherne <brian@cherne.net>
	*/
	(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);

})(mirage.themeFunctions);