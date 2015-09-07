function moveHeaderImage(){
	$mirage('#headerImage script').remove();
	$mirage('#headerImage').appendTo('#headerImageLower');
	$mirage('#menuContainer').css({WebkitBorderTopLeftRadius: 7, WebkitBorderTopRightRadius: 7, MozBorderRadiusTopLeft: 7, MozBorderRadiusTopRight: 7, BorderTopLeftRadius: 7, BorderTopRightRadius: 7});
	$mirage('#logoTitleWrapper').css({position: 'relative', height: 'auto'});
	$mirage('#logoTitle').css({marginTop: '15px', position: 'relative'});
	$mirage('#extraContainer3').css({position: 'relative'});
	if(((navigator.userAgent.match(/iPhone/i))||(navigator.userAgent.match(/iPod/i))||(navigator.userAgent.match(/Android/))||(navigator.userAgent.match(/webOS/))) && ($mirage('#mobileMenuTab').is(':visible'))) { $mirage('#headerImageLower').css({height: '80px'}); }
}
$mirage(document).ready(function() {
	moveHeaderImage();
});