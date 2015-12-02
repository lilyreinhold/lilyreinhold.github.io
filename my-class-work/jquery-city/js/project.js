$(document).ready(function() {

	$('.thumb').click(function(){
		//selecting all classes of thumb (4 elements)
		//assigning them all a click handler to the funciton runs 
		var imgSrc = $(this).attr('src')
		//function creates a new image source
		$('#bigimage').attr('src',imgSrc)
		//stores whatevr 
	});

//	$('#first').click(function () {
//		$('#bigimage').attr('src', 'img/1.jpg')
//})

//	$('#second').click(function() {
//		$('#bigimage').attr('src','img/2.jpg')
//	})
//})
//	$('#third').click(function() {
//		$('#bigimage').attr('src', 'img/3.jpg')
//})
//	$('#fourth').click(function() {
//		$('#bigimage').attr('src', 'img/4.jpg')
//})
