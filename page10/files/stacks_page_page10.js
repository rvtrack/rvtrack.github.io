
// 'stacks' is the Stacks global object.
// All of the other Stacks related Javascript will 
// be attatched to it.
var stacks = {};


// this call to jQuery gives us access to the globaal
// jQuery object. 
// 'noConflict' removes the '$' variable.
// 'true' removes the 'jQuery' variable.
// removing these globals reduces conflicts with other 
// jQuery versions that might be running on this page.
stacks.jQuery = jQuery.noConflict(true);

// Javascript for stacks_in_5_page10
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_5_page10 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_5_page10 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	

var img = new Image();
img.src = "files/fxslider/ajax-loader.gif";

/*
FX Slider Stack 1.1.0 - http://www.weaveraddons.com/stacks/fx-slider for more information
*/

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
 * Copyright © 2008 George McGinley Smith
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

/**
 * jQuery Skitter Slideshow
 * @name jquery.skitter.js
 * @description Slideshow
 * @author Thiago Silva Ferreira - http://thiagosf.net
 * @version 3.3
 * @date August 04, 2010
 * @update September 19, 2011
 * @copyright (c) 2010 Thiago Silva Ferreira - http://thiagosf.net
 * @license Dual licensed under the MIT or GPL Version 2 licenses
 * @example http://thiagosf.net/projects/jquery/skitter/
 */

jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(c,a,e,f,d){return jQuery.easing[jQuery.easing.def](c,a,e,f,d)},easeInQuad:function(c,a,e,f,d){return f*(a/=d)*a+e},easeOutQuad:function(c,a,e,f,d){return-f*(a/=d)*(a-2)+e},easeInOutQuad:function(c,a,e,f,d){return 1>(a/=d/2)?f/2*a*a+e:-f/2*(--a*(a-2)-1)+e},easeInCubic:function(c,a,e,f,d){return f*(a/=d)*a*a+e},easeOutCubic:function(c,a,e,f,d){return f*((a=a/d-1)*a*a+1)+e},easeInOutCubic:function(c,a,e,f,d){return 1>(a/=d/2)?f/2*a*a*a+e:
f/2*((a-=2)*a*a+2)+e},easeInQuart:function(c,a,e,f,d){return f*(a/=d)*a*a*a+e},easeOutQuart:function(c,a,e,f,d){return-f*((a=a/d-1)*a*a*a-1)+e},easeInOutQuart:function(c,a,e,f,d){return 1>(a/=d/2)?f/2*a*a*a*a+e:-f/2*((a-=2)*a*a*a-2)+e},easeInQuint:function(c,a,e,f,d){return f*(a/=d)*a*a*a*a+e},easeOutQuint:function(c,a,e,f,d){return f*((a=a/d-1)*a*a*a*a+1)+e},easeInOutQuint:function(c,a,e,f,d){return 1>(a/=d/2)?f/2*a*a*a*a*a+e:f/2*((a-=2)*a*a*a*a+2)+e},easeInSine:function(c,a,e,f,d){return-f*Math.cos(a/
d*(Math.PI/2))+f+e},easeOutSine:function(c,a,e,f,d){return f*Math.sin(a/d*(Math.PI/2))+e},easeInOutSine:function(c,a,e,f,d){return-f/2*(Math.cos(Math.PI*a/d)-1)+e},easeInExpo:function(c,a,e,f,d){return 0==a?e:f*Math.pow(2,10*(a/d-1))+e},easeOutExpo:function(c,a,e,f,d){return a==d?e+f:f*(-Math.pow(2,-10*a/d)+1)+e},easeInOutExpo:function(c,a,e,f,d){return 0==a?e:a==d?e+f:1>(a/=d/2)?f/2*Math.pow(2,10*(a-1))+e:f/2*(-Math.pow(2,-10*--a)+2)+e},easeInCirc:function(c,a,e,f,d){return-f*(Math.sqrt(1-(a/=d)*
a)-1)+e},easeOutCirc:function(c,a,e,f,d){return f*Math.sqrt(1-(a=a/d-1)*a)+e},easeInOutCirc:function(c,a,e,f,d){return 1>(a/=d/2)?-f/2*(Math.sqrt(1-a*a)-1)+e:f/2*(Math.sqrt(1-(a-=2)*a)+1)+e},easeInElastic:function(c,a,e,f,d){var c=1.70158,h=0,m=f;if(0==a)return e;if(1==(a/=d))return e+f;h||(h=0.3*d);m<Math.abs(f)?(m=f,c=h/4):c=h/(2*Math.PI)*Math.asin(f/m);return-(m*Math.pow(2,10*(a-=1))*Math.sin((a*d-c)*2*Math.PI/h))+e},easeOutElastic:function(c,a,e,f,d){var c=1.70158,h=0,m=f;if(0==a)return e;if(1==
(a/=d))return e+f;h||(h=0.3*d);m<Math.abs(f)?(m=f,c=h/4):c=h/(2*Math.PI)*Math.asin(f/m);return m*Math.pow(2,-10*a)*Math.sin((a*d-c)*2*Math.PI/h)+f+e},easeInOutElastic:function(c,a,e,f,d){var c=1.70158,h=0,m=f;if(0==a)return e;if(2==(a/=d/2))return e+f;h||(h=d*0.3*1.5);m<Math.abs(f)?(m=f,c=h/4):c=h/(2*Math.PI)*Math.asin(f/m);return 1>a?-0.5*m*Math.pow(2,10*(a-=1))*Math.sin((a*d-c)*2*Math.PI/h)+e:0.5*m*Math.pow(2,-10*(a-=1))*Math.sin((a*d-c)*2*Math.PI/h)+f+e},easeInBack:function(c,a,e,f,d,h){void 0==
h&&(h=1.70158);return f*(a/=d)*a*((h+1)*a-h)+e},easeOutBack:function(c,a,e,f,d,h){void 0==h&&(h=1.70158);return f*((a=a/d-1)*a*((h+1)*a+h)+1)+e},easeInOutBack:function(c,a,e,f,d,h){void 0==h&&(h=1.70158);return 1>(a/=d/2)?f/2*a*a*(((h*=1.525)+1)*a-h)+e:f/2*((a-=2)*a*(((h*=1.525)+1)*a+h)+2)+e},easeInBounce:function(c,a,e,f,d){return f-jQuery.easing.easeOutBounce(c,d-a,0,f,d)+e},easeOutBounce:function(c,a,e,f,d){return(a/=d)<1/2.75?f*7.5625*a*a+e:a<2/2.75?f*(7.5625*(a-=1.5/2.75)*a+0.75)+e:a<2.5/2.75?
f*(7.5625*(a-=2.25/2.75)*a+0.9375)+e:f*(7.5625*(a-=2.625/2.75)*a+0.984375)+e},easeInOutBounce:function(c,a,e,f,d){return a<d/2?0.5*jQuery.easing.easeInBounce(c,2*a,0,f,d)+e:0.5*jQuery.easing.easeOutBounce(c,2*a-d,0,f,d)+0.5*f+e}});
Utils=function(){return{wait:function(c){var c=$.extend({until:function(){return!1},success:function(){},error:function(){Galleria.raise("Could not complete wait function.")},timeout:3E3},c),a=Utils.timestamp(),e,f,d=function(){f=Utils.timestamp();e=f-a;if(c.until(e))return c.success(),!1;if(f>=a+c.timeout)return c.error(),!1;window.setTimeout(d,10)};window.setTimeout(d,10)},timestamp:function(){return(new Date).getTime()},toggleQuality:function(c,a){!(7!==IE&&8!==IE)&&c&&("undefined"===typeof a&&
(a="nearest-neighbor"===c.style.msInterpolationMode),c.style.msInterpolationMode=a?"bicubic":"nearest-neighbor")}}}();
(function(c){var a=0,e=[];c.fn.skitter=function(b){return this.each(function(){c(this).data("skitter_number",a);e.push(new d(this,b,a));++a})};var f={v:1,i:2500,a:"",nr:!0,n:!0,lb:!0,b:null,ti:null,il:null,ia:null,lia:null,laa:null,w:null,h:null,ii:1,ian:!1,ih:!1,ria:null,sr:!1,th:!1,aou:{backgroundColor:"#333",color:"#fff"},ao:{backgroundColor:"#000",color:"#fff"},aa:{backgroundColor:"#cc3333",color:"#fff"},ht:!1,f:!1,x:!1,d:!1,wl:null,o:0.75,iie:300,ioe:500,l:null,is:null,mnh:20,ls:!0,fl:1,ahl:!0,
s:'<a href="#" class="prev_button">prev</a><a href="#" class="next_button">next</a><span class="info_slide"></span><div class="border_skitter"><div class="container_skitter"><div class="image"><a href=""><img class="image_main" /></a><div class="label_skitter"></div></div></div></div>'};c.skitter=function(b,a,k){this.b=c(b);this.timer=null;this.s=c.extend({},f,a||{});this.number_skitter=k;this.ca=0;this.oc=this.at=!1;this.setup()};var d=c.skitter;d.fn=d.prototype={};d.fn.extend=c.extend;d.fn.extend({setup:function(){var b=
this,a=this.s.a.replace(/,/g," ").split(/\s+/);1>=a.length?this.at=!1:(real_at=[],c.each(a,function(b,g){isNaN(g)&&(isNaN(a[b+1])?real_at.push([g,0]):real_at.push([g,a[b+1]]))}),this.at=1>real_at.length?!1:real_at);this.b.append(this.s.s);2<=this.s.v&&(this.s.v=2);0>=this.s.v&&(this.s.v=1);!this.s.nr&&!this.s.th&&!this.s.d&&this.b.find(".info_slide").hide();this.s.lb||this.b.find(".label_skitter").hide();this.s.n||(this.b.find(".prev_button").hide(),this.b.find(".next_button").hide());if(this.s.f)this.s.w=
c(window).width(),this.s.h=c(window).height(),this.b.css({position:"absolute",top:0,left:0,"z-index":1E3}),c("body").css({overflown:"hidden"});else if(!this.s.w||!this.s.h){var k=b.b.find(".skitter_size_info:first"),g=b.b.find("img:first");if(k.length)this.s.w=k.data("width")||k.attr("data-width"),this.s.h=k.data("height")||k.attr("data-height");else if(g.length){if(this.s.w=g.attr("width"),this.s.h=g.attr("height"),!this.s.w||!this.s.h){k=!1;g=g.parent().html();if(k=g.match(/width\s*=\s*["']?([0-9]+)/))this.s.w=
k[1];if(k=g.match(/height\s*=\s*["']?([0-9]+)/))this.s.h=k[1]}}else this.s.w=800,this.s.h=300}this.s.w=parseInt(this.s.w,10);this.s.h=parseInt(this.s.h,10);if(0==this.s.w||0==this.s.h)this.s.w=800,this.s.h=300;this.b.width(this.s.w+2*this.s.bw).height(this.s.h+2*this.s.bw);this.b.find(".container_skitter").width(this.s.w).height(this.s.h);this.s.bw&&this.b.find(".border_skitter").css("border","0px solid #000000");this.s.sbr&&this.b.css({"margin-bottom":this.s.sbr+5+"px",
"margin-top":this.s.sbr+5+"px"});g=this.s.wl?this.s.wl:this.s.w;this.b.find(".label_skitter").width(g);var g=" image_number_select",f=0;this.s.il=[];this.s.x?c.ajax({type:"GET",url:this.s.x,async:!1,dataType:"xml",success:function(a){c("<ul></ul>");c(a).find("skitter slide").each(function(){++f;var a=c(this).find("link").text()?c(this).find("link").text():"#",g=c(this).find("image").text(),k=c(this).find("image").attr("type"),x=c(this).find("label").text();b.s.il.push([g,a,k,x,""])})}}):this.s.json||
this.b.find("ul li").each(function(){++f;if(c(this).find("a").length){var a=c(this).find("a").attr("href"),g=c(this).find("a").attr("target");"external"==c(this).find("a").attr("rel")&&(g="_blank")}else a="#",g="";var k=c(this).find("img").attr("src"),x=c(this).find("img").attr("alt");if(x&&(x.match(/Stacks Image [0-9+]/i)||x.match("/stacks_image/i")))x="";"undefined"!=typeof k&&b.s.il.push([k,a,"",x,g])});if(1<this.s.il.length){this.s.sr&&this.s.il.sort(function(){return Math.random()-0.5});for(i=
0;i<this.s.il.length;i++)this.s.th?(k="",k=this.s.w>this.s.h?'height="100"':'width="100"',this.b.find(".info_slide").append('<span class="image_number'+g+'" rel="'+i+'" id="image_n_'+(i+1)+"_"+this.number_skitter+'"><img src="'+this.s.il[i][0]+'" '+k+" /></span> ")):this.b.find(".info_slide").append('<span class="image_number'+g+'" rel="'+i+'" id="image_n_'+(i+1)+"_"+this.number_skitter+'">'+(i+1)+"</span> "),g=""}if(b.s.th){b.s.aou={opacity:0.5,width:"70px"};b.s.ao={opacity:1,width:"70px"};b.s.aa=
{opacity:1,width:"70px"};b.b.find(".info_slide").addClass("info_slide_thumb");g=55*f+75;b.b.find(".info_slide_thumb").width(g);b.b.css({height:b.b.height()+b.b.find(".info_slide").height()+5});b.s.lb=!1;"top"==b.s.nl?b.b.find(".border_skitter").prepend('<div class="container_thumbs"></div>'):(b.s.nl="bottom",b.b.find(".border_skitter").append('<div class="container_thumbs"></div>'));k=b.b.find(".info_slide").clone();b.b.find(".info_slide").remove();b.b.find(".container_thumbs").width(b.s.w).height(50).append(k);
var y=0,w=this.s.w,j=this.s.h,e=0,d=b.b.find(".info_slide_thumb"),n=b.b.offset().left,h=b.b.offset().top;d.find(".image_number").each(function(){y+=c(this).width()+parseInt(c(this).css("marginLeft"))+parseInt(c(this).css("marginRight"))+parseInt(c(this).css("paddingLeft"))+parseInt(c(this).css("paddingRight"))});d.width(y+"px");e=d.width();width_valor=this.s.w;width_valor=w-100;n+=90;g>b.s.w&&b.b.mousemove(function(a){var g=a.pageX,a=a.pageY,k=0,g=g-n,a=a-h;novo_width=e-width_valor;k=-(novo_width*
g/width_valor);0<k&&(k=0);k<-(e-w-5)&&(k=-(e-w-5));("bottom"==b.s.nl&&a>j||"top"==b.s.nl&&50>a)&&d.css({left:k})});b.b.find(".scroll_thumbs").css({left:10});g<b.s.w&&(b.b.find(".info_slide").width(b.s.w),b.b.find(".box_scroll_thumbs").hide())}else if(b.s.d||b.s.nr){g={};b.s.d?(k=Math.round(1.8*b.s.ds),15>k?k=15:50<k&&(k=45)):k=30;"top"==b.s.nl?(g.top="-"+k+"px",g.bottom="auto",(!this.s.sbr||this.s.sbr<k)&&b.b.css("margin-top",k+"px")):"bottom"==b.s.nl&&(g.bottom="-"+k+"px",g.top="auto",(!this.s.sbr||
this.s.sbr<k)&&b.b.css("margin-bottom",k+"px"));k=b.b.find(".info_slide");if(b.s.d)k.addClass("info_slide_dots").removeClass("info_slide");else if("top"==b.s.nl||"bottom"==b.s.nl)k.addClass("info_slide_numbers"),k.height()>b.s.mnh&&k.hide();"top"==b.s.nl||"bottom"==b.s.nl?g.left=(b.s.w+2*this.s.bw-k.width())/2:(g.top=15+this.s.bw,g.left=15+this.s.bw);k.css(g)}this.b.find("ul").hide();this.s.ia=this.s.il[0][0];this.s.lia=this.s.il[0][1];this.s.laa=this.s.il[0][3];this.s.lit=this.s.il[0][4];1<this.s.il.length&&
(this.b.find(".prev_button").click(function(){var a=b.s.ii-2;0>a&&(a=b.s.il.length+a);b.jumpToImage(a);return!1}),this.b.find(".next_button").click(function(){b.jumpToImage(b.s.ii);return!1}),this.b.find(".next_button, .prev_button").hover(function(){c(this).stop().animate({opacity:1},200)},function(){c(this).stop().animate({opacity:0.75},200)}),this.b.find(".image_number").hover(function(){"image_number image_number_select"!=c(this).attr("class")&&c(this).css(b.s.ao)},function(){"image_number image_number_select"!=
c(this).attr("class")&&c(this).css(b.s.aou)}),this.b.find(".image_number").click(function(){if("image_number image_number_select"!=c(this).attr("class")){var a=c(this).attr("rel");b.jumpToImage(a)}return!1}),this.b.find(".image_number").css(b.s.aou),this.b.find(".image_number:eq(0)").css(b.s.aa));this.s.ht&&this.hideTools();this.loadImages()},loadImages:function(){var b=this;this.b.append(c('<div class="loading">Loading</div>'));var a=this.s.il.length,k=0;c.each(this.s.il,function(){var g=c('<span class="image_loading"></span>');
g.css({position:"absolute",top:"-9999em"});b.b.append(g);g=new Image;c(g).load(function(){++k;k==a&&(b.b.find(".loading").remove(),b.b.find(".image_loading").remove(),b.start())}).error(function(){b.b.find(".loading, .image_loading, .image_number, .next_button, .prev_button").remove();b.b.html('<p style="color:white;background:black;">Error loading images. One or more images were not found.</p>')}).attr("src",this[0])})},start:function(){var b=this;this.setLinkAtual();this.b.find(".image a img").attr({src:this.s.ia});
img_link=this.b.find(".image a");img_link=this.resizeImage(img_link);img_link.find("img").fadeIn(1500);this.setValueBoxText();this.showBoxText();this.stopOnMouseOver();1<this.s.il.length?this.timer=setTimeout(function(){b.nextImage()},this.s.i):this.b.find(".loading, .image_loading, .image_number, .next_button, .prev_button").remove();c.isFunction(this.s.l)&&this.s.l()},jumpToImage:function(b){!1==this.s.ian?(this.b.find(".box_clone").stop(),this.clearTimer(!0),this.s.ii=Math.floor(b),this.b.find(".image a").attr({href:this.s.lia,
target:this.s.lit}),this.b.find(".image_main").attr({src:this.s.ia}),this.b.find(".box_clone").remove(),this.nextImage()):this.oc=b},nextImage:function(){animations_functions="cube,cuberandom,block,cubestop,cubestoprandom,cubehide,cubesize,horizontal,showbars,showbarsrandom,tube,fade,fadefour,paralell,blind,blindheight,blindwidth,directiontop,directionbottom,directionright,directionleft,cubespread,glasscube,glassblock,circles,circlesinside,circlesrotate".split(",");this.at&&!this.s.il[this.s.ii][2]?
(animation_type=this.at[this.ca],this.ca++,this.ca>=this.at.length&&(this.ca=0)):animation_type=this.s.il[this.s.ii][2]?this.s.il[this.s.ii][2]:""==this.s.a?"randomsmart":this.s.a;if(c.isArray(animation_type))var b=parseInt(animation_type[1],10),a=animation_type[0];else b=0,a=animation_type;a=a.toLowerCase();if("randomsmart"==a)this.s.ria||(animations_functions.sort(function(){return 0.5-Math.random()}),this.s.ria=animations_functions),a=this.s.ria[this.s.ii];else if("random"==a)var k=parseInt(Math.random()*
animations_functions.length),a=animations_functions[k];k={};if(a.match(/random/i))a=a.replace(/random/i,""),k.random=!0;else{var g={blindheight:{height:!0},blindwidth:{height:!1,time_animate:400,delay:50},directiontop:{direction:"top"},directionbottom:{direction:"bottom"},directionright:{direction:"right",total:5},directionleft:{direction:"left",total:5}};g[a]&&(k=g[a],a=a.replace(/width|height|top|bottom|left|right/i,""))}k.timeAnimate=b;easing="easeOutQuad";this.s.ian=!0;a="animation"+a.charAt(0).toUpperCase()+
a.slice(1);if(this[a])this[a](k);else this.animationTube({timeAnimate:b})},animationCube:function(b){var a=this;easing="easeOutBack";var k=b.timeAnimate?b.timeAnimate:700/this.s.v;this.setActualLevel();var g=Math.ceil(this.s.w/(this.s.w/8)),c=Math.ceil(this.s.h/(this.s.h/3)),f=g*c,g=Math.ceil(this.s.w/g),w=Math.ceil(this.s.h/c),j=init_left=this.s.h+200,e=0,d=0;for(i=0;i<f;i++){var n=this.getBoxClone();n.hide();var h={left:this.s.w/2,top:this.s.h+50,width:g,height:w};b.random&&(h.left=(0==i%2?init_left:
-init_left)+g*d+50*d+"px",h.top=(0==i%2?j:-j)+w*e+50*e+"px");n.css(h);n.find("img").css({left:-(g*d),top:-(w*e)});this.addBoxClone(n);var h=40*d,o=i==f-1?function(){a.finishAnimation()}:"";n.show().delay(h).animate({top:w*e+"px",left:g*d+"px"},k,easing,o);e++;e==c&&(e=0,d++)}},animationBlock:function(b){var a=this,b=b.timeAnimate?b.timeAnimate:500/this.s.v;this.setActualLevel();var k=Math.ceil(this.s.w/(this.s.w/10)),g=Math.ceil(this.s.w/k),c=this.s.h;for(i=0;i<k;i++){var f=g*i,e=this.getBoxClone();
e.css({left:this.s.w,top:0,width:g,height:c});e.find("img").css({left:-(g*i),top:0});this.addBoxClone(e);var j=i==k-1?function(){a.finishAnimation()}:"";e.delay(80*i).animate({top:0,left:f,opacity:"show"},b,easing,j)}},animationCubestop:function(b){var a=this;easing="easeOutBack";var k=b.timeAnimate?b.timeAnimate:800/this.s.v,g=this.b.find(".image_main").attr("src");this.setActualLevel();this.setLinkAtual();this.b.find(".image_main").attr({src:this.s.ia});var c=Math.ceil(this.s.w/(this.s.w/8)),e=
Math.ceil(this.s.h/(this.s.w/8)),f=c*e,c=Math.ceil(this.s.w/c),j=Math.ceil(this.s.h/e),d=0,l=0,n=0,h=0,o=this.s.w/16;for(i=0;i<f;i++){var d=0==i%2?d:-d,l=0==i%2?l:-l,p=d+j*n,m=l+c*h,s=-(j*n),t=-(c*h),v=p-o,u=m-o,r=this.getBoxClone(g);r.css({left:m+"px",top:p+"px",width:c,height:j});r.find("img").css({left:t,top:s});this.addBoxClone(r);r.show();s=30*i;b.random&&(k=1E3/this.s.v,v=p,u=m,s=30*30*Math.random());p=i==f-1?function(){a.finishAnimation()}:"";r.delay(s).animate({opacity:"hide",top:v+"px",left:u+
"px"},k,easing,p);n++;n==e&&(n=0,h++)}},animationCubehide:function(b){var a=this,b=b.timeAnimate?b.timeAnimate:500/this.s.v,k=this.b.find(".image_main").attr("src");this.setActualLevel();this.setLinkAtual();this.b.find(".image_main").attr({src:this.s.ia});var g=Math.ceil(this.s.w/(this.s.w/8)),c=Math.ceil(this.s.h/(this.s.h/3)),e=g*c,g=Math.ceil(this.s.w/g),f=Math.ceil(this.s.h/c),j=0,d=0,l=0,n=0;for(i=0;i<e;i++){var j=0==i%2?j:-j,d=0==i%2?d:-d,h=j+f*l,o=d+g*n,p=-(f*l),m=-(g*n),s=this.getBoxClone(k);
s.css({left:o+"px",top:h+"px",width:g,height:f});s.find("img").css({left:m,top:p});this.addBoxClone(s);s.show();h=50*i;h=i==e-1?50*e:h;o=i==e-1?function(){a.finishAnimation()}:"";s.delay(h).animate({opacity:"hide"},b,easing,o);l++;l==c&&(l=0,n++)}},animationCubejelly:function(b){var a=this;easing="easeInBack";var b=b.timeAnimate?b.timeAnimate:300/this.s.v,c=this.b.find(".image_main").attr("src");this.setActualLevel();this.setLinkAtual();this.b.find(".image_main").attr({src:this.s.ia});var g=Math.ceil(this.s.w/
(this.s.w/8)),e=Math.ceil(this.s.h/(this.s.h/3)),f=g*e,g=Math.ceil(this.s.w/g),d=Math.ceil(this.s.h/e),j=0,q=0,l=0,h=0,m=-1;for(i=0;i<f;i++){0!=h%2?(0==l&&(m=m+e+1),m--):(0<h&&0==l&&(m+=2),m++);var j=0==i%2?j:-j,q=0==i%2?q:-q,o=j+d*l,p=q+g*h,r=-(d*l),s=-(g*h),t=this.getBoxClone(c);t.css({left:p+"px",top:o+"px",width:g,height:d});t.find("img").css({left:s,top:r});this.addBoxClone(t);t.show();o=i==f-1?function(){a.finishAnimation()}:"";t.delay(50*i).animate({width:"+=100px",height:"+=100px",top:"-=20px",
left:"-=20px",opacity:"hide"},b,easing,o);l++;l==e&&(l=0,h++)}},animationCubesize:function(b){var a=this;easing="easeInOutQuad";var b=b.timeAnimate?b.timeAnimate:600/this.s.v,c=this.b.find(".image_main").attr("src");this.setActualLevel();this.setLinkAtual();this.b.find(".image_main").attr({src:this.s.ia});var g=Math.ceil(this.s.w/(this.s.w/8)),e=Math.ceil(this.s.h/(this.s.h/3)),f=g*e,g=Math.ceil(this.s.w/g),d=Math.ceil(this.s.h/e),j=0,h=0,l=0,n=0;Math.ceil(this.s.w/6);for(i=0;i<f;i++){var j=0==i%
2?j:-j,h=0==i%2?h:-h,m=j+d*l,o=h+g*n,p=-(d*l),r=-(g*n),s=this.getBoxClone(c);s.css({left:o,top:m,width:g,height:d});s.find("img").css({left:r,top:p});this.addBoxClone(s);s.show();p=i==f-1?function(){a.finishAnimation()}:"";s.delay(50*i).animate({opacity:"hide",width:"hide",height:"hide",top:m+1.5*g,left:o+1.5*d},b,easing,p);l++;l==e&&(l=0,n++)}},animationHorizontal:function(b){var a=this;easing="easeOutExpo";b=b.timeAnimate?b.timeAnimate:700/this.s.v;this.setActualLevel();var c=Math.ceil(this.s.w/
(this.s.w/7)),g=this.s.w,e=Math.ceil(this.s.h/c);for(i=0;i<c;i++){var f=(0==i%2?"":"")+g,d=i*e,j=this.getBoxClone();j.css({left:f+"px",top:d+"px",width:g,height:e});j.find("img").css({left:0,top:-d});this.addBoxClone(j);f=i==c-1?function(){a.finishAnimation()}:"";j.delay(70*i).animate({opacity:"show",top:d,left:0},b,easing,f)}},animationShowbars:function(b){var a=this,c=b.timeAnimate?b.timeAnimate:400/this.s.v;this.setActualLevel();var g=Math.ceil(this.s.w/(this.s.w/10)),e=Math.ceil(this.s.w/g),f=
this.s.h;for(i=0;i<g;i++){var d=e*i,j=this.getBoxClone();j.css({left:d,top:-50,width:e,height:f});j.find("img").css({left:-(e*i),top:0});this.addBoxClone(j);if(b.random)var h=50*this.getRandom(g),h=i==g-1?50*g:h;else h=70*i,c-=2*i;var l=i==g-1?function(){a.finishAnimation()}:"";j.delay(h).animate({opacity:"show",top:"0px",left:d+"px"},c,easing,l)}},animationTube:function(b){var a=this;easing="easeOutElastic";b=b.timeAnimate?b.timeAnimate:600/this.s.v;this.setActualLevel();var c=Math.ceil(this.s.w/
(this.s.w/10)),g=Math.ceil(this.s.w/c),e=this.s.h;for(i=0;i<c;i++){var f=e,d=g*i,j=this.getBoxClone();j.css({left:d,top:f,height:e,width:g});j.find("img").css({left:-d});this.addBoxClone(j);f=40*this.getRandom(c);d=i==c-1?function(){a.finishAnimation()}:"";j.show().delay(f).animate({top:0},b,easing,d)}},animationFade:function(b){var a=this,b=b.timeAnimate?b.timeAnimate:800/this.s.v;this.setActualLevel();var c=this.s.w,g=this.s.h;for(i=0;2>i;i++){var e=this.getBoxClone();e.css({left:0,top:0,width:c,
height:g});this.addBoxClone(e);e.animate({opacity:"show",left:0,top:0},b,easing,1==i?function(){a.finishAnimation()}:"")}},animationFadefour:function(b){var a=this,b=b.timeAnimate?b.timeAnimate:500/this.s.v;this.setActualLevel();var c=this.s.w,g=this.s.h;for(i=0;4>i;i++){if(0==i)var e="-100px",f="-100px";else 1==i?(e="-100px",f="100px"):2==i?(e="100px",f="-100px"):3==i&&(f=e="100px");var d=this.getBoxClone();d.css({left:f,top:e,width:c,height:g});this.addBoxClone(d);d.animate({opacity:"show",left:0,
top:0},b,easing,3==i?function(){a.finishAnimation()}:"")}},animationParalell:function(b){var a=this;easing="easeOutCirc";b=b.timeAnimate?b.timeAnimate:400/this.s.v;this.setActualLevel();var c=Math.ceil(this.s.w/(this.s.w/16)),g=Math.ceil(this.s.w/c),e=this.s.h;for(i=0;i<c;i++){var f=g*i,d=this.getBoxClone();d.css({left:f,top:0-this.s.h,width:g,height:e});d.find("img").css({left:-(g*i),top:0});this.addBoxClone(d);var j;i<=c/2-1?j=1400-200*i:i>c/2-1&&(j=200*(i-c/2));j/=2.5;var h=i==c-1?function(){a.finishAnimation()}:
"";d.show().delay(j).animate({top:"0px",left:f+"px"},b,easing,h)}},animationBlind:function(b){var a=this,c=b.timeAnimate?b.timeAnimate:400/this.s.v;this.setActualLevel();var g=Math.ceil(this.s.w/(this.s.w/16)),e=Math.ceil(this.s.w/g),f=this.s.h;for(i=0;i<g;i++){var d=e*i,j=this.getBoxClone();j.css({left:d,top:0,width:e,height:f});j.find("img").css({left:-(e*i),top:0});this.addBoxClone(j);var h;if(b.height)i<=g/2-1?h=200+200*i:i>g/2-1&&(h=200*(g/2-i)+100*g),l=i==g/2?function(){a.finishAnimation()}:
"";else{i<=g/2-1?h=1400-200*i:i>g/2-1&&(h=200*(i-g/2));var l=i==g-1?function(){a.finishAnimation()}:""}h/=2.5;b.height?(c+=2*i,easing="easeOutQuad",j.delay(h).animate({opacity:"show",top:"0px",left:d+"px",height:"show"},c,easing,l)):j.delay(h).animate({opacity:"show",top:"0px",left:d+"px",width:"show"},c,easing,l)}},animationBlinddimension:function(b){var a=this,b=c.extend({},{height:!0,time_animate:500,delay:100},b||{}),e=b.time_animate/this.s.v;this.setActualLevel();var g=Math.ceil(this.s.w/(this.s.w/
16)),f=Math.ceil(this.s.w/g),d=this.s.h;for(i=0;i<g;i++){var h=f*i,j=this.getBoxClone();j.css({left:h,top:0,width:f,height:d});j.find("img").css({left:-(f*i),top:0});this.addBoxClone(j);var q=b.delay*i,l=i==g-1?function(){a.finishAnimation()}:"";b.height?(easing="easeOutQuad",j.delay(q).animate({opacity:"show",top:"0px",left:h+"px",height:"show"},e,easing,l)):j.delay(q).animate({opacity:"show",top:"0px",left:h+"px",width:"show"},e,easing,l)}},animationDirection:function(b){var a=this,b=c.extend({},
{direction:"top",delay_type:"sequence",total:7},b||{});easing="easeInOutExpo";var e=b.timeAnimate?b.timeAnimate:1200/this.s.v,g=this.b.find(".image_main").attr("src");this.setActualLevel();this.setLinkAtual();this.b.find(".image_main").attr({src:this.s.ia});this.b.find(".image_main").hide();var f=b.total;for(i=0;i<f;i++){switch(b.direction){default:case "top":var d=Math.ceil(this.s.w/f),h=this.s.h,j=0,q=d*i,l=-h,n=q,m=h,o=q,p=0,r=q,s=0,t=-q;break;case "bottom":d=Math.ceil(this.s.w/f);h=this.s.h;j=
0;q=d*i;l=h;n=q;m=-h;o=q;p=0;r=q;s=0;t=-q;break;case "right":d=this.s.w;h=Math.ceil(this.s.h/f);j=h*i;q=0;l=j;n=d;m=j;o=-n;p=j;r=0;s=-j;t=0;break;case "left":d=this.s.w,h=Math.ceil(this.s.h/f),j=h*i,q=0,l=j,n=-d,m=j,o=-n,p=j,r=0,s=-j,t=0}switch(b.delay_type){default:var v=0==i%2?0:150;break;case "random":v=30*30*Math.random();break;case "sequence":v=100*i}var u=this.getBoxClone(g);u.find("img").css({left:t,top:s});u.css({top:j,left:q,width:d,height:h});this.addBoxClone(u);u.show();u.delay(v).animate({top:l,
left:n},e,easing);j=this.getBoxClone();j.find("img").css({left:t,top:s});j.css({top:m,left:o,width:d,height:h});this.addBoxClone(j);j.show();d=i==f-1?function(){a.finishAnimation()}:"";j.delay(v).animate({top:p,left:r},e,easing,d)}},animationCubespread:function(b){var a=this;easing="easeInOutQuad";b=b.timeAnimate?b.timeAnimate:700/this.s.v;this.setActualLevel();var c=Math.ceil(this.s.w/(this.s.w/8)),g=Math.ceil(this.s.h/(this.s.w/8)),e=c*g,c=Math.ceil(this.s.w/c),d=Math.ceil(this.s.h/g),f=0,h=0,q=
0,l=0,n=[],m=[];for(i=0;i<e;i++){var f=0==i%2?f:-f,h=0==i%2?h:-h,o=f+d*q,p=h+c*l;n[i]=[o,p];q++;q==g&&(q=0,l++)}for(i=l=q=0;i<e;i++)m[i]=i;m=a.shuffleArray(m);for(i=0;i<e;i++){var f=0==i%2?f:-f,h=0==i%2?h:-h,o=f+d*q,p=h+c*l,r=-(d*q),s=-(c*l),t=o,v=p,o=n[m[i]][0],p=n[m[i]][1],u=this.getBoxClone();u.css({left:p+"px",top:o+"px",width:c,height:d});u.find("img").css({left:s,top:r});this.addBoxClone(u);o=30*30*Math.random();i==e-1&&(o=900);p=i==e-1?function(){a.finishAnimation()}:"";u.delay(o).animate({opacity:"show",
top:t+"px",left:v+"px"},b,easing,p);q++;q==g&&(q=0,l++)}},animationGlasscube:function(b){var a=this;easing="easeOutExpo";b=b.timeAnimate?b.timeAnimate:500/this.s.v;this.setActualLevel();var c=2*Math.ceil(this.s.w/(this.s.w/10)),g=2*Math.ceil(this.s.w/c),e=this.s.h/2,f=0;for(i=0;i<c;i++){mod=0==i%2?!0:!1;var d=g*f,h=mod?-a.s.h:a.s.h,m=g*f,l=mod?0:e,n=-(g*f),r=mod?0:-e,o=120*f,p=this.getBoxClone();p.css({left:d,top:h,width:g,height:e});p.find("img").css({left:n+g/1.5,top:r}).delay(o).animate({left:n,
top:r},1.9*b,"easeOutQuad");this.addBoxClone(p);d=i==c-1?function(){a.finishAnimation()}:"";p.show().delay(o).animate({top:l,left:m},b,easing,d);0!=i%2&&f++}},animationGlassblock:function(b){var a=this;easing="easeOutExpo";b=b.timeAnimate?b.timeAnimate:700/this.s.v;this.setActualLevel();var c=Math.ceil(this.s.w/(this.s.w/10)),g=Math.ceil(this.s.w/c),e=this.s.h;for(i=0;i<c;i++){var f=g*i,d=g*i,h=-(g*i),m=100*i,l=this.getBoxClone();l.css({left:f,top:0,width:g,height:e});l.find("img").css({left:h+g/
1.5,top:0}).delay(m).animate({left:h,top:0},1.1*b,"easeInOutQuad");this.addBoxClone(l);f=i==c-1?function(){a.finishAnimation()}:"";l.delay(m).animate({top:0,left:d,opacity:"show"},b,easing,f)}},animationCircles:function(b){var a=this;easing="easeInQuad";b=b.timeAnimate?b.timeAnimate:500/this.s.v;this.setActualLevel();var c=Math.ceil(this.s.w/(this.s.w/10)),g=100,f=Math.sqrt(Math.pow(this.s.w,2)+Math.pow(this.s.h,2)),f=Math.ceil(f);for(i=0;i<c;i++){var e=a.s.w/2-g/2,d=a.s.h/2-g/2,h=e,m=d,l=this.getBoxClone();
l.css({left:e,top:d,width:g,height:g}).css3({"border-radius":f+"px"});l.find("img").css({left:-e,top:-d});g+=100;this.addBoxClone(l);e=i==c-1?function(){a.finishAnimation()}:"";l.delay(70*i).animate({top:m,left:h,opacity:"show"},b,easing,e)}},animationCirclesinside:function(b){var a=this;easing="easeInQuad";var b=b.timeAnimate?b.timeAnimate:500/this.s.v,c=this.b.find(".image_main").attr("src");this.setActualLevel();this.setLinkAtual();this.b.find(".image_main").attr({src:this.s.ia});var e=Math.ceil(this.s.w/
(this.s.w/10)),f=Math.sqrt(Math.pow(this.s.w,2)+Math.pow(this.s.h,2)),d=f=Math.ceil(f);for(i=0;i<e;i++){var h=a.s.w/2-d/2,j=a.s.h/2-d/2,m=h,l=j,n=this.getBoxClone(c);n.css({left:h,top:j,width:d,height:d}).css3({"border-radius":f+"px"});n.find("img").css({left:-h,top:-j});d-=100;this.addBoxClone(n);n.show();h=i==e-1?function(){a.finishAnimation()}:"";n.delay(70*i).animate({top:l,left:m,opacity:"hide"},b,easing,h)}},animationCirclesrotate:function(b){var a=this,b=b.timeAnimate?b.timeAnimate:500/this.s.v,
c=this.b.find(".image_main").attr("src");this.setActualLevel();this.setLinkAtual();this.b.find(".image_main").attr({src:this.s.ia});var f=Math.ceil(this.s.w/(this.s.w/10)),e=Math.sqrt(Math.pow(this.s.w,2)+Math.pow(this.s.h,2)),d=e=Math.ceil(e);for(i=0;i<f;i++){var h=a.s.w/2-d/2,j=a.s.h/2-d/2,m=h,l=j,n=this.getBoxClone(c);n.css({left:h,top:j,width:d,height:d}).css3({"border-radius":e+"px"});n.find("img").css({left:-h,top:-j});d-=100;this.addBoxClone(n);n.show();h=i==f-1?function(){a.finishAnimation()}:
"";j=0==i%2?"20deg":"-20deg";n.delay(100*i).animate({top:l,left:m,opacity:"hide",rotate:j},b,easing,h)}},finishAnimation:function(){var b=this;this.b.find(".image_main").show();this.showBoxText();this.s.ian=!1;if(!1!==b.oc)b.jumpToImage(b.oc),b.oc=!1;else if((!this.s.poh||!this.s.ih)&&(this.s.ls||this.s.fl))this.timer=setTimeout(function(){b.completeMove()},this.s.i),this.b.find(".image_main").attr({src:this.s.ia}),this.b.find(".image a").attr({href:this.s.lia,target:this.s.lit})},completeMove:function(){var b=
!0;!this.s.ls&&this.s.fl&&(this.s.fl++,this.s.fl>=this.s.il.length&&(b=this.s.fl=!1));this.clearTimer(!0);this.b.find(".box_clone").remove();b&&this.nextImage()},setActualLevel:function(){var b=this;c.isFunction(this.s.is)&&this.s.imageSwitched(this.s.ii,this);var a=this.s.il[this.s.ii][1],d=this.s.il[this.s.ii][3],e=this.s.il[this.s.ii][4];this.s.ia=this.s.il[this.s.ii][0];this.s.lia=a;this.s.laa=d;this.s.lit=e;this.b.find(".image_number_select").css(b.s.aou).removeClass("image_number_select");c("#image_n_"+
(this.s.ii+1)+"_"+b.number_skitter).css(b.s.aa).addClass("image_number_select");this.s.ahl?this.b.find(".label_skitter").slideUp(200,function(){b.setValueBoxText()}):(b.setValueBoxText(),(void 0==this.s.laa||""==this.s.laa)&&this.b.find(".label_skitter").css("display","none"));this.s.ii++;this.s.ii==this.s.il.length&&(this.s.ii=0)},getBoxClone:function(b){b="#"!=this.s.lia?c('<a href="'+this.s.lia+'"'+(this.s.lit?' target="'+this.s.lit+'"':"")+'><img src="'+(b?b:this.s.ia)+'" /></a>'):c('<img src="'+
(b?b:this.s.ia)+'" />');b=this.resizeImage(b);return c('<div class="box_clone"></div>').append(b)},resizeImage:function(b){this.s.f&&b.find("img").height(this.s.h);return b},addBoxClone:function(b){this.b.find(".container_skitter").append(b)},getRandom:function(b){return Math.floor(Math.random()*b)},setValueBoxText:function(){this.b.find(".label_skitter").html("<p>"+this.s.laa+"</p>")},showBoxText:function(){void 0!=this.s.laa&&""!=this.s.laa&&this.s.lb&&(this.s.ahl?this.b.find(".label_skitter").slideDown(400):
this.b.find(".label_skitter").css("display","block"))},stopOnMouseOver:function(){var b=this,a=b.s.o,c=b.s.iie,d=b.s.iie;b.b.hover(function(){b.s.ht&&("top"!=b.s.nl&&"bottom"!=b.s.nl&&b.b.find(".info_slide,.info_slide_dots").show().css({opacity:0}).animate({opacity:a},c),b.s.n&&(b.b.find(".prev_button").show().css({opacity:0}).animate({opacity:a},c),b.b.find(".next_button").show().css({opacity:0}).animate({opacity:a},c)));b.s.poh&&b.clearTimer(!0);b.s.ih=!0},function(){b.s.ht&&("top"!=b.s.nl&&"bottom"!=
b.s.nl&&b.b.find(".info_slide,.info_slide_dots").queue("fx",[]).show().css({opacity:a}).animate({opacity:0},d),b.s.n&&(b.b.find(".prev_button").queue("fx",[]).show().css({opacity:a}).animate({opacity:0},d),b.b.find(".next_button").queue("fx",[]).show().css({opacity:a}).animate({opacity:0},d)));if(b.s.poh&&(b.clearTimer(!0),!b.s.ian&&1<b.s.il.length&&(b.s.fl||b.s.ls)))b.timer=setTimeout(function(){b.timer=setTimeout(function(){b.completeMove()},b.s.i);b.b.find(".image_main").attr({src:b.s.ia});b.b.find(".image a").attr({href:b.s.lia,
target:b.s.lit})},b.s.i);b.s.ih=!1})},clearTimer:function(){clearInterval(this.timer)},setLinkAtual:function(){"#"!=this.s.lia?this.b.find(".image a").attr({href:this.s.lia,target:this.s.lit}):this.b.find(".image a").removeAttr("href")},hideTools:function(){"top"!=this.s.nl&&"bottom"!=this.s.nl&&this.b.find(".info_slide,.info_slide_dots").hide();this.b.find(".prev_button,.next_button,.label_skitter").hide()},shuffleArray:function(a){for(var c=[],d;0<a.length;)d=this.randomUnique(0,a.length-1),c[c.length]=
a[d],a.splice(d,1);return c},randomUnique:function(a,c){var d;do d=Math.random();while(1==d);return d*(c-a+1)+a|0}});c.fn.css3=function(a){var c={},d=["moz","ms","o","webkit"],e;for(e in a){for(var f=0;f<d.length;f++)c["-"+d[f]+"-"+e]=a[e];c[e]=a[e]}this.css(c);return this};var h="deg";c.fn.rotate=function(a){var d=c(this).css("transform")||"none";if("undefined"==typeof a)return d&&(a=d.match(/rotate\(([^)]+)\)/))&&a[1]?a[1]:0;if(a=a.toString().match(/^(-?\d+(\.\d+)?)(.+)?$/))a[3]&&(h=a[3]),c(this).css("transform",
d.replace(/none|rotate\([^)]*\)/,"")+"rotate("+a[1]+h+")");return this};c.fn.scale=function(a){var d=c(this).css("transform");if("undefined"==typeof a)return d&&(a=d.match(/scale\(([^)]+)\)/))&&a[1]?a[1]:1;c(this).css("transform",d.replace(/none|scale\([^)]*\)/,"")+"scale("+a+")");return this};var m=c.fx.prototype.cur;c.fx.prototype.cur=function(){return"rotate"==this.prop?parseFloat(c(this.elem).rotate()):"scale"==this.prop?parseFloat(c(this.elem).scale()):m.apply(this,arguments)};c.fx.step.rotate=
function(a){c(a.elem).rotate(a.now+h)};c.fx.step.scale=function(a){c(a.elem).scale(a.now)};var z=c.fn.animate;c.fn.animate=function(a){if("undefined"!=typeof a.rotate){var c=a.rotate.toString().match(/^(([+-]=)?(-?\d+(\.\d+)?))(.+)?$/);c&&c[5]&&(h=c[5]);a.rotate=c[1]}return z.apply(this,arguments)};var r=null,A=c.fn.css;c.fn.css=function(a,d){null===r&&(r="undefined"!=typeof c.cssProps?c.cssProps:"undefined"!=typeof c.props?c.props:{});if("undefined"==typeof r.transform&&("transform"==a||"object"==
typeof a&&"undefined"!=typeof a.transform)){var e=r,f;a:{f=this.get(0);for(var h=["transform","WebkitTransform","msTransform","MozTransform","OTransform"],m;m=h.shift();)if("undefined"!=typeof f.style[m]){f=m;break a}f="transform"}e.transform=f}if("transform"!=r.transform)if("transform"==a){if(a=r.transform,"undefined"==typeof d&&jQuery.style)return jQuery.style(this.get(0),a)}else"object"==typeof a&&"undefined"!=typeof a.transform&&(a[r.transform]=a.transform,delete a.transform);return A.apply(this,
arguments)}})(jQuery);

$(function(){
	if ($('#stacks_in_5_page10containerwarehouse img').length) {
		if ($('#stacks_in_5_page10images img').length) {
			$('#stacks_in_5_page10images img').appendTo($('#stacks_in_5_page10container'));
		}
		$('#stacks_in_5_page10container').skitter({'a': 'fade', 
								 	 'd': ('numbers'.match(/dots/i) != null), 
								 	 'nr': ('numbers'.match(/number/i) != null), 
								 	 'th': ('numbers'.match(/thumb/i) != null),
								 	 'ds': 18,
								 	 'nl': 'bottom', 
								 	 'al': '',
								 	 'sr': false, 
								 	 'i': 3.00*1000, 
								 	 'ls': true,
								     'ht': false,
								 	 'ahl': true,
								 	 'bw': 0, 
								  	 'sbr': 0,
								 	 'v': 10/10,								
								     'aou': {backgroundColor: '#333333', color: '#FFFFFF'},
								 	 'ao': {backgroundColor: '#000000', color: '#FFFFFF'},
								 	 'aa': {backgroundColor: '#CC3333', color: '#FFFFFF'}, 
								 	 'poh': true});
	}
});

	return stack;
})(stacks.stacks_in_5_page10);


