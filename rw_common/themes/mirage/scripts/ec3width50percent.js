function ec3width50percent(){
	if($mirage('#extraContainer3').is(':visible')){
		$mirage('#extraContainer3').css({width: '46%'});
		$mirage('#logoTitle').css({width: '47%'});
	}
}
$mirage(document).ready(function() {
	ec3width50percent();
});