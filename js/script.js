$(document).ready(function(){


$('.navbar-toggler').click(function(){
    $('.navbar-toggler').toggleClass('change')
})

$('.navbar-collapse a').click(function(){
  $(".navbar-collapse").collapse('hide'),
  $('.navbar-toggler').removeClass('change')
});


$('.parent-container').magnificPopup({
    delegate: 'a',
    type: 'image',

    gallery:{
        enabled: true
    }
});



$('.carrosel').slick({
    centerMode: true,
    mobileFirst: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 360,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
});



$('.fotos-sushi-bar').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 700,
  infinite: true,
  speed: 500,
  arrows: false,
  fade: true,
  cssEase: 'linear'
});




$(window).scroll(function(){
  let position = $(this).scrollTop();
  if(position >= 718){
    $('.navbar').addClass('navbar-background');
    $('.navbar').addClass('fixed-top');
  }else{
    $('.navbar').removeClass('navbar-background');
    $('.navbar').removeClass('fixed-top');
  }
});



$(window).scroll(function(){
  let position = $(this).scrollTop();

  if(position >= 718){
    $('#voltar-topo').addClass('scrollTop');
  }else{
    $('#voltar-topo').removeClass('scrollTop');
  }
  });




  $('.nav-item a, header-link, .btn-adiante, #voltar-topo, .navbar-brand').click(function(link){
      link.preventDefault();
      let target = $(this).attr('href');

      $('html, body').stop().animate({
        scrollTop: $(target).offset().top - 10
      }, 1000);
  });
})