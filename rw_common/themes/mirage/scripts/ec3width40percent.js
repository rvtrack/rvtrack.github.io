function ec3width40percent(){
	if($mirage('#extraContainer3').is(':visible')){
		$mirage('#extraContainer3').css({width: '38%'});
		$mirage('#logoTitle').css({width: '55%'});
	}
}
$mirage(document).ready(function() {
	ec3width40percent();
});