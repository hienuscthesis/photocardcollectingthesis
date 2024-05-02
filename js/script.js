/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block

	$(".gridpic").hover(function(){
		$('.photocaption', this).fadeToggle();

	});

	$('.popup').click(function(){
		$('.overlay').fadeIn();

	});

	$('.closer').click(function(){
		$('.overlay').hide();

	});


}); //end document.ready block
