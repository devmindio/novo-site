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

    //Esconde o banner de cookies
    $(".close-this").click(function() {
      $(".cookie-alert").hide();
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

    ////////////////////////////////////////
    // Relativo a página de suporte (FAQ) //
    ////////////////////////////////////////

    //Oculta a seção do artigo e mostra todas as opções
    $(".reading-section > .back").click(function() {
      $(".reading-section").hide();
      $(".result-holder").show();
    });

    //Oculta as opções de artigos e mostra um específico (nulo)
    $(".result-holder > .card").click(function() {
      $(".result-holder").hide();
      $(".reading-section").show();
    });

    //Altera os conteúdos do artigo para os conteúdos de "O primeiro Passo"
    $("#primeiro-passo").click(function() {
      $(".reading-section > .title").text("O Primeiro Passo");
      $(".reading-section > .description").html("O que é necessário para começar no Devmind.io é somente uma conta no Dropbox, Github ou Gitlab. Após ter sua conta criada, basta ir a página de login e utilizar suas credencias para acessar o Devmind.io. Depois disso você poderá acessar qualquer dos seus projetos, caso não tenha nenhum, veja <strong>como criar um projeto</strong> no Devmind.io na sessão anterior.");
    });

    //Altera os conteúdos do artigo para os conteúdos de "primeiro projeto"
    $("#meu-primeiro-projeto").click(function() {
      $(".reading-section > .title").text("Meu Primeiro Projeto");
      $(".reading-section > .description").html("Para criar seu primeiro projeto, acesse sua conta em <strong>https://devmind.io/login</strong>. Depois disso você estará em uma tela parecida com esta:<br><br><img src='img/faqIMG/meu-primeiro-projeto-1.jpg'><br><br>Basta clicar no botão + demarcado no canto superior direito e você será direcionado a tela de novo projeto, complete os dados e então salve. Ao retornar a esta tela e recarregar, seu novo projeto já deve estar listado");
    });

    //Altera os conteúdos do artigo para os conteúdos de "primeiro projeto"
    $("#conectando-aos-projetos").click(function() {
      $(".reading-section > .title").text("Conectando com seus projetos");
      $(".reading-section > .description").html("Considerando que você já tem um projeto, basta clicar no nome dele, ele ficará destacado dos demais, como mostra a imagem:<br><br><img src='img/faqIMG/meu-primeiro-projeto-2.jpg'><br><br>Clique em <strong>Próximo</strong> e então você será levado para a tela de seleção de Branch (segmento), nessa tela você pode escolher a branch do seu projeto que deseja trabalhar e qual pasta você deseja tratar como a raiz do projeto (não escolha nenhuma se quiser acessar a Raiz do projeto).<br><br><img src='img/faqIMG/meu-primeiro-projeto-3.jpg'><br><br>Quando tudo estiver pronto, clique em <strong>Conectar</strong>.");
    });

    //Altera os conteúdos do artigo para os conteúdos de "primeiro projeto"
    $("#instalar-devmind").click(function() {
      $(".reading-section > .title").text("Instalando o Devmind em seus dispositivos");
      $(".reading-section > .description").html("Em nosso blog, nós já fizemos dois artigos que tratam sobre o assunto:<br><br>- <a href='https://blog.devmind.io/instalando-o-devmind-io-no-seu-smartphone/'>Instalando em um Smartphone</a><br>- <a href='https://blog.devmind.io/pwa-google-chrome-desktop/'>Instalando em um Computador</a><br><br>Caso a instalação não seja possível em seu dispositivo, continue usando o serviço no navegador, tudo funcionará normalmente.");
    });

    //Altera os conteúdos do artigo para os conteúdos do termo de uso
    $("#termos-de-uso").click(function() {
      $(".reading-section > .title").text("Termos de Uso");
      $(".reading-section > .description").html("Em breve...");
    });
});
