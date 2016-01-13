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
    var $rat = $('#rat');
    function moveRight(){
        $rat.animate({left:"+=500px"}, 5000, "linear", function(){moveLeft()});
    }
    function moveLeft(){
        if (parseFloat($rat.css("left")) >= $(window).width()) {
            $rat.hide();
            $rat.animate({left:"-400px"},2000, "linear", function(){moveRight()});
        }
        else {
            $rat.animate({left:"-=400px"},4000, "linear", function(){moveRight()});
        }
    }
    moveRight();
})