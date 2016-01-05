$(document).ready(function () {

	$('button').click(function() {
		var input = $('input').val()
		
		input = (input-32) * 5/9;
		input = parseInt(input)
		$('.output').text(input)
	
	$('body').css('background-color')

		if (input > 60) {
			$('body').css('background-color', 'red')
		} else {
			$('body').css('background-color', 'blue')
		}
	})

})