$(document).ready

	$('button').click(function() {
		var input = $('input').val()
		input = parseInt(input)
		input = (input-32) * 5/9;
		input = parseInt(input)
		$('.output').text(input)
	})