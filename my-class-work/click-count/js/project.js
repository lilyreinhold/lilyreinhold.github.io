// Program Flow
//
// 1: User clicks on #clickme (this element)
// 2: Increment the value of #click-num (eg if clicknum is 0, make it 1)
// 3: If the number of clicks == 5, change the background-color of <body> to red
// 4: If the number of clicks == 10, change the background-color of <body> to green
// 5: If the number of clicks == 15, change the background-color of <body> to blue
// 6: Else, change the background-color of <body> to black

$(document).ready(function () {

$(.'#clickme').click(function () {

	var total = 0
	//make a variable =0. building off of this value instead of resetting it
	$('#clickme').click(function () {
	//call on click function, not changing value
	total += 1
	//add one to total: VARIABLE REASSIGNMENT
	$('#click-num').text(total)
	//change value of span, .text changes text value
	if (total == 5) {
		$('body').css('background-color', 'red')
		//property and the value you want to change it to
	} else if (total == 10) {
		$('body').css('background-color', 'green')
	} else if (total == 15)
		$('body').css('background-color', 'blue')
	} else {
		$('body').css('background-color', 'black')
	}
	})
	//every time we hit click me, we change the value and add1

})
