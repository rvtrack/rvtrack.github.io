function ec3width30percent(){
	if($mirage('#extraContainer3').is(':visible')){
		$mirage('#logoTitle').css({width: '63%'});
	}
}
$mirage(document).ready(function() {
	ec3width30percent();
});