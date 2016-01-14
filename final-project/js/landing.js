//$(document).ready(function(){

//    var $rat = $('#rat');

//   function moveRight(){
//        $rat.animate({
//            'left':'500px'
//      }, 5000, "linear", function() {
//        moveLeft()
//      });
//    }
//
//    function moveLeft(){
//    	$rat.animate({
//    		'left':'0px'
//    	},5000, "linear", function(){
//    		moveRight()	
//    	});
//    }
//    moveRight();
//})
$(document).ready(function(){

    var rat = $('#rat');

    function moveRight(){
        rat.animate({left:$(window).width()}, 9000, "linear", function(){moveLeft()});
    }

    function moveLeft(){
        rat.hide();
        rat.animate({left:"-300px"},800, "linear", function(){rat.show();moveRight()});
    }
    moveRight();
});