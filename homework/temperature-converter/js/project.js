$(document).ready

	$('button').click(function() {
		var input = $('input').val()
		//gets whats inside input
		input = parseInt(input)
		input = (input-32) * 5/9;
		input = parseInt(input)
		$('.output').text(input)
	})