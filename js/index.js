$(document).ready(function(){
  $(".goTop").click(function(){
		$("html, body").animate({ scrollTop: 0 }, 400);
	});
	
	$(document).scroll(function() {
		var y = $(this).scrollTop();
		if (y > 100) {
			$('.goTop').fadeIn();
		} else {
			$('.goTop').fadeOut();
		}
	}); 
});