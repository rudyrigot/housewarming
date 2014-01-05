var wasScratched = false;

$("#secretcode").wScratchPad({
    width: 200,
    height: 100,
    image: "img/secretcode.png",
    color: '#a5a5a5',
    size: 20
})
$('#secretcode-wrapper').mouseover(
	function() {
    	if (!wasScratched) {
    		$('#scratch').hide();
    		wasScratched = true;
    	}
    }
);