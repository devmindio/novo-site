$(document).ready(function(){
    $(".goTop").click(function() {
      $("html, body").animate({ scrollTop: 0 }, 400);
    });

    if ($(window).width() > 900) {
        $(document).scroll(function() {
            var y = $(this).scrollTop();
            if (y > 100) {
                $(".goTop").fadeIn();
                //$(".first").css("padding-top", "100px");
                $("header").addClass("detach");
            } else {
                //$(".first").css("padding-top", "0px");
                $("header").removeClass("detach");
                $(".goTop").fadeOut();
            }
        });
    }
});