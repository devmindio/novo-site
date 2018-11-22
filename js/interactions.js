var myQuote = new Array();
    myQuote[0] = "Trabalhar onde quiser?";
    myQuote[1] = "Editar diretamente na nuvem?";
    myQuote[2] = "Trabalhar com flexibilidade?";

var ProductSections = ".editor-section, .tools-section, .teamwork-section, .structure-section, .security-section";

$(this).scrollTop(0);

$(document).ready(function(){
    //Botão para voltar ao topo
    $(".goTop").click(function() {
      $("html, body").animate({ scrollTop: 0 }, 400);
    });
    
    //Gatilho para o menu (mobile) abrir ou fechar
    $(".menu").click(function() {
      $(".mobile").toggleClass("open");
    });
    
    //Se a tela for for maior que 900px de largura, 
    //as condições de controle modular do Header são ativadas
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
    
    /////////////////////////////
    //Relativo a página inicial//
    /////////////////////////////
    
    //Decide dentro do array qual é a frase da página inicial
    var myRandom = Math.floor(Math.random()*myQuote.length);
    $('.cta-question').html(myQuote[myRandom]);
    
    ////////////////////////////////
    //Relativo a página de produto//
    ////////////////////////////////
    
    //Da destaque para a opção selecionada no gestor de seções
    $(".section-control > button").click(function() {
      $(".section-control > button").removeClass("active");
      $(this).addClass("active");
      $(ProductSections).hide();
    });
    
    //Oculta as demais seções e mostra a seção "Editor"
    $(".editor-trigger").click(function() {
      $(".editor-section").show();
    });
    
    //Oculta as demais seções e mostra a seção "Ferramentas"
    $(".tools-trigger").click(function() {
      $(".tools-section").show();
    });
    
    //Oculta as demais seções e mostra a seção "Colaboração"
    $(".teamwork-trigger").click(function() {
      $(".teamwork-section").show();
    });
    
    //Oculta as demais seções e mostra a seção "Estrutura"
    $(".structure-trigger").click(function() {
      $(".structure-section").show();
    });
    
    //Oculta as demais seções e mostra a seção "Segurança"
    $(".security-trigger").click(function() {
      $(".security-section").show();
    });
});