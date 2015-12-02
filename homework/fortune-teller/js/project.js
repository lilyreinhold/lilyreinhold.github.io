$(document).ready(function () {

	$('#clickme').click(getFortune)

	function getFortune () {
		
		var hometown = $('#hometown').val();
		var partner = $('#partner').val();
		var numKids = $('#numKids').val();
		var jobTitle = $('#jobTitle').val();

		var fortuneStr = "You will be a " + jobTitle + " living in "
		+ hometown + " married to " + partner + " with " + numKids + " kids."

		$('#output').text(fortuneStr)
	}

	$('#output').mouseover(function() {
		$('#output').css('fontSize', '60px');
	});
})



