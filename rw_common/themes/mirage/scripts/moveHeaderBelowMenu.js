function moveHeaderImageAndLogo(){
	if(!($mirage('#mobileMenuTab').is(':visible'))) {
		$mirage('#headerImageWrapper script').remove();
		$mirage('#headerImageWrapper').appendTo('#headerImageLower');
		$mirage('#menuContainer').css({WebkitBorderTopLeftRadius: 7, WebkitBorderTopRightRadius: 7, MozBorderRadiusTopLeft: 7, MozBorderRadiusTopRight: 7, BorderTopLeftRadius: 7, BorderTopRightRadius: 7});
	}
}
$mirage(document).ready(function() {
	moveHeaderImageAndLogo();
});