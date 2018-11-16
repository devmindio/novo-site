var myQuote = new Array();
    myQuote[0] = "Trabalhar de qualquer lugar?";
    myQuote[1] = "Editar diretamente na nuvem?";
    myQuote[2] = "Trabalhar com mais facilidade?";

$(this).scrollTop(0);

$(document).ready(function(){
    var myRandom = Math.floor(Math.random()*myQuote.length);
    $('.cta-question').html(myQuote[myRandom]);

    $(".goTop").click(function() {
      $("html, body").animate({ scrollTop: 0 }, 400);
    });
    
    $(".menu").click(function() {
      $(".mobile").toggleClass("open");
    });
    
    if ($(window).width() > 900) {
        $(document).scroll(function() {
            var y = $(this).scrollTop();
            if (y > 10) {
                $(".goTop").fadeIn();
                $("header").addClass("detach");
            } else {
                $("header").removeClass("detach");
                $(".goTop").fadeOut();
            }
        });
    }
});