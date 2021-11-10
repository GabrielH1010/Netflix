//Comando para o Carrocel em Jquery para Javascript que foi pego no demo do owl carousel

$('.owl-carousel').owlCarousel({

    loop:true, //Comando que permite você passar os filmes no carrocel infinitamente
    margin:15, //Comando de espaçamento de um filme para o outro
    nav:false, //Comando de navegação

    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})