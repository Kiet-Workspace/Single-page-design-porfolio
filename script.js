$(document).ready(function(){
    $('.my-carousel').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        arrows: true,
        draggable: false,    
        autoplay: true,
        autoplaySpeed: 2000, 
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
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
  });

  $(".btn-arrow-prev").click( () => {
    $(".my-carousel").slick("slickPrev");
  });
  $(".btn-arrow-next").click( () => {
    $(".my-carousel").slick("slickNext");
  });
  