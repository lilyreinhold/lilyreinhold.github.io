$(document).ready(function(){
	var total = 0;

$('.math div').click(function(){
	var num $(this).text()
	num = parseInt(num)
	total = total + num
	$("#out").html(total);
	//total = total + someValue
	//$('#out').html(total)	
})
//value reassignment
//	$("#a10").click(function(){
//		total += 10;
//		//reassigning the value of x, adds the value of X to 0
//		$("#out").html(total);
//	});
//	$("#a20").click(function(){
//		total += 20;
//		$("#out").html(total);
//	});
//	$("#a30").click(function (){
//		total += 30;
//		$("#out").html(total);
//	});
//	$("#n10").click(function(){
//		total -= 10;
//		$("#out").html(total);
//	});
//	$("#n20").click(function(){
//		total -= 20;
//		$("#out").html(total);
//	});
//	$("#n30").click(function(){
//		total -= 30;
//		$("#out").html(total);
//	});
	$("#red").click(function(){
		$("#out").css("background-color", "red");
	});
	$("#blue").click(function (){
		$("#out").css("background-color", "blue");
	});
	$("#out").click(function (){
		$("#out").css("background-color", "white")
	});
//});

//try to use the concept of this