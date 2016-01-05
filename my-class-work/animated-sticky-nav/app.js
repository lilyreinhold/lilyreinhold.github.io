$(document).ready(function () {

	$(window).scroll(function () {

		if ($(this).scrollTop() > 1) {
			$('header').addClass('sticky')
		} else {
			$('header').removeClass('sticky')
		}

	})

})
			//once we scroll a certain value from top, we add sticky class to header, but once this value is back to 0 it is removed
			//when we move beyond 1px, we add a class of sticky to the header
			//get the header element and add the sticky class