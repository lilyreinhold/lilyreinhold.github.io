$(document).ready(function () {

	$('.box').css('background-color', 'pink')
	$('.box').css('background-color', 'pink')
		//value we wish to change
		//adding text inside of box

		$('#box-one').click(increaseBoxOne)
		$('#box-two').click(increaseBoxTwo)
		//grabbing an ID and assigning a click ID/handler/trigger
		//click events that trigger a function

		function increaseBoxOne(){
			$("#box-one")
			.css({
				'height': '500px', 
				'width':'500px'
			})		
		}
		function increaseBoxTwo(){
			$("#box-two")
			.css({
				'height':'500px', 
				'width': '500px'})
		}
})

