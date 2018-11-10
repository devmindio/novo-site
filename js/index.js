$(document).ready(function(){
    $(".goTop").click(function() {
      $("html, body").animate({ scrollTop: 0 }, 400);
    });
    
    $(".menu").click(function() {
      $(".mobile").toggleClass("open");
    });
    
    if ($(window).width() > 900) {
        $(document).scroll(function() {
            var y = $(this).scrollTop();
            if (y > 100) {
                $(".goTop").fadeIn();
                $("header").addClass("detach");
            } else {
                $("header").removeClass("detach");
                $(".goTop").fadeOut();
            }
        });
    }
});